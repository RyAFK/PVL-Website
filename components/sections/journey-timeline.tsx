import { journeyStages } from "@/content/journey";

export function JourneyTimeline() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 2xl:grid-cols-6">
      {journeyStages.map((stage) => (
        <li
          key={stage.step}
          className="relative rounded-2xl border border-line bg-paper p-5 shadow-soft"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-serif text-sm text-cream">
            {stage.step}
          </span>
          <h3 className="mt-3 font-serif text-base text-ink">{stage.title}</h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.06em] text-gold">
            What happens
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate">{stage.whatHappens}</p>
          <dl className="mt-3 space-y-1.5 text-xs text-slate-light">
            <div>
              <dt className="inline font-medium text-slate">You may meet: </dt>
              <dd className="inline">{stage.whoYouMeet}</dd>
            </div>
            <div>
              <dt className="inline font-medium text-slate">Expect: </dt>
              <dd className="inline">{stage.whatToExpect}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs font-medium text-success">{stage.obligation}</p>
        </li>
      ))}
    </ol>
  );
}
