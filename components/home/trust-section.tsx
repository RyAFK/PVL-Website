import { Container } from "@/components/ui/container";
import { trustStats } from "@/content/trust-stats";

export function TrustSection() {
  return (
    <section aria-labelledby="trust-heading" className="border-b border-line bg-paper py-20 sm:py-24">
      <Container>
        <h2 id="trust-heading" className="sr-only">
          Precision Vision London in numbers
        </h2>
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-gold pl-5">
              <dt className="whitespace-nowrap font-serif text-2xl text-ink sm:text-3xl">{stat.value}</dt>
              <dd className="mt-1 text-sm font-medium text-ink">{stat.label}</dd>
              {stat.detail ? (
                <dd className="mt-1 text-sm text-slate-light">{stat.detail}</dd>
              ) : null}
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
