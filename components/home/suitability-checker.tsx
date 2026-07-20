"use client";

import { useMemo, useState } from "react";
import {
  openingQuestion,
  followUpQuestions,
  resolveSuitabilityResult,
  suitabilityDisclaimer,
} from "@/content/suitability";
import { getTreatmentBySlug } from "@/content/treatments";
import { CtaLink } from "@/components/ui/cta-link";
import { CTA } from "@/content/ctas";
import { CheckIcon, ChevronRightIcon } from "@/components/ui/icons";
import { trackEvent } from "@/lib/analytics";

type Step = "opening" | "followup" | "result";

export function SuitabilityChecker({ variant = "embedded" }: { variant?: "embedded" | "full" }) {
  const [step, setStep] = useState<Step>("opening");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [started, setStarted] = useState(false);

  const followUp = answers.goal ? followUpQuestions[answers.goal] : undefined;

  const result = useMemo(() => resolveSuitabilityResult(answers), [answers]);

  function selectOpening(optionId: string) {
    if (!started) {
      trackEvent("suitability_start");
      setStarted(true);
    }
    const next = { goal: optionId };
    setAnswers(next);
    const hasFollowUp = Boolean(followUpQuestions[optionId]);
    if (hasFollowUp) {
      setStep("followup");
    } else {
      setStep("result");
      trackEvent("suitability_complete", { pathwayCount: resolveSuitabilityResult(next).pathways.length });
    }
  }

  function selectFollowUp(questionId: string, optionId: string) {
    const next = { ...answers, [questionId]: optionId };
    setAnswers(next);
    setStep("result");
    trackEvent("suitability_complete", { pathwayCount: resolveSuitabilityResult(next).pathways.length });
  }

  function reset() {
    setAnswers({});
    setStep("opening");
    setStarted(false);
  }

  const totalSteps = followUp ? 2 : 1;
  const currentStepNumber = step === "opening" ? 1 : step === "followup" ? 2 : totalSteps;

  return (
    <div
      className={`rounded-2xl border border-line bg-paper shadow-card ${
        variant === "embedded" ? "p-6 sm:p-8" : "p-6 sm:p-10"
      }`}
    >
      {step !== "result" ? (
        <p className="text-sm font-medium text-slate-light" aria-live="polite">
          Step {currentStepNumber} of {totalSteps}
        </p>
      ) : null}

      {step === "opening" ? (
        <QuestionBlock
          question={openingQuestion.question}
          options={openingQuestion.options}
          onSelect={selectOpening}
        />
      ) : null}

      {step === "followup" && followUp ? (
        <QuestionBlock
          question={followUp.question}
          options={followUp.options}
          onSelect={(optionId) => selectFollowUp(followUp.id, optionId)}
          onBack={() => setStep("opening")}
        />
      ) : null}

      {step === "result" ? (
        <ResultBlock
          headline={result.headline}
          rationale={result.rationale}
          pathwaySlugs={result.pathways}
          onReset={reset}
          onBack={followUp ? () => setStep("followup") : () => setStep("opening")}
        />
      ) : null}

      <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-slate-light">
        {suitabilityDisclaimer}
      </p>
    </div>
  );
}

function QuestionBlock({
  question,
  options,
  onSelect,
  onBack,
}: {
  question: string;
  options: { id: string; label: string }[];
  onSelect: (id: string) => void;
  onBack?: () => void;
}) {
  return (
    <div className="mt-3">
      <h3 className="font-serif text-xl text-ink sm:text-2xl">{question}</h3>
      <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            className="flex min-h-11 items-center justify-between gap-3 rounded-xl border border-line bg-cream px-4 py-3.5 text-left text-sm font-medium text-ink transition-colors hover:border-gold hover:bg-cream-2"
          >
            {option.label}
            <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gold" />
          </button>
        ))}
      </div>
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="mt-4 text-sm font-medium text-slate underline underline-offset-4 hover:text-ink"
        >
          Back
        </button>
      ) : null}
    </div>
  );
}

function ResultBlock({
  headline,
  rationale,
  pathwaySlugs,
  onReset,
  onBack,
}: {
  headline: string;
  rationale: string;
  pathwaySlugs: string[];
  onReset: () => void;
  onBack: () => void;
}) {
  return (
    <div className="mt-1" aria-live="polite">
      <h3 className="font-serif text-xl text-ink sm:text-2xl">{headline}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{rationale}</p>

      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {pathwaySlugs.map((slug) => {
          const treatment = getTreatmentBySlug(slug);
          if (!treatment) return null;
          return (
            <li key={slug} className="rounded-xl border border-line bg-cream p-4">
              <p className="flex items-center gap-2 font-serif text-lg text-ink">
                <CheckIcon className="h-4 w-4 text-gold" />
                {treatment.name}
              </p>
              <p className="mt-1 text-sm text-slate">{treatment.keyDifferentiator}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <CtaLink
                  href={`/treatments/${treatment.slug}`}
                  variant="secondary"
                  className="px-4 py-2 text-xs"
                  eventName="treatment_card_click"
                  eventPayload={{ slug: treatment.slug, source: "suitability_result" }}
                >
                  {CTA.treatment}
                </CtaLink>
                <CtaLink
                  href="/contact#book"
                  className="px-4 py-2 text-xs"
                  eventName="book_consultation_click"
                  eventPayload={{ location: "suitability_result" }}
                >
                  {CTA.primary}
                </CtaLink>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 flex gap-4">
        <button
          type="button"
          onClick={onBack}
          className="text-sm font-medium text-slate underline underline-offset-4 hover:text-ink"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-medium text-slate underline underline-offset-4 hover:text-ink"
        >
          Start again
        </button>
      </div>
    </div>
  );
}
