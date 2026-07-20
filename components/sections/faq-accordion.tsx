import { Faq } from "@/content/faqs";
import { JsonLd } from "@/components/seo/json-ld";
import { buildFaqSchema } from "@/lib/structured-data";

export function FaqAccordion({ faqs, includeSchema = true }: { faqs: Faq[]; includeSchema?: boolean }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-paper">
      {includeSchema ? <JsonLd data={buildFaqSchema(faqs)} /> : null}
      {faqs.map((faq) => (
        <details key={faq.question} className="group p-5 sm:p-7">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-ink">
            {faq.question}
            <span className="flex-shrink-0 text-2xl font-light text-gold transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-slate">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
