import Link from "next/link";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex flex-shrink-0 flex-col leading-none"
      aria-label="Precision Vision London — home"
    >
      <span
        className={`whitespace-nowrap font-serif text-lg font-semibold tracking-tight sm:text-xl lg:text-2xl ${
          inverted ? "text-cream" : "text-ink"
        }`}
      >
        Precision Vision
      </span>
      <span
        className={`mt-0.5 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.22em] ${
          inverted ? "text-gold-light" : "text-gold"
        }`}
      >
        London · Harley Street
      </span>
    </Link>
  );
}
