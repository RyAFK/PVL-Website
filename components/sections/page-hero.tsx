import { ReactNode } from "react";
import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-cream py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">{eyebrow}</p>
          ) : null}
          <h1 className="mt-3 text-balance font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-balance text-lg leading-relaxed text-slate">{description}</p>
          ) : null}
        </div>
        {children ? <div className="mt-6">{children}</div> : null}
      </Container>
    </section>
  );
}
