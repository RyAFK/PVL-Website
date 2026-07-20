interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  id,
}: SectionHeadingProps) {
  const Heading = as;
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className="mt-3 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl"
      >
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-balance text-lg leading-relaxed text-slate">
          {description}
        </p>
      ) : null}
    </div>
  );
}
