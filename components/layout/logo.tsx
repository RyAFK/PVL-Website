import Image from "next/image";
import Link from "next/link";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex flex-shrink-0 flex-col leading-none"
      aria-label="Precision Vision London — home"
    >
      <span className={`inline-block w-fit ${inverted ? "rounded-lg bg-white px-2 py-1.5" : ""}`}>
        <Image
          src="/brand/precision-vision-logo.webp"
          alt="Precision Vision London"
          width={545}
          height={98}
          priority
          quality={100}
          className="h-7 w-auto sm:h-8 lg:h-9"
        />
      </span>
      <span
        className={`mt-1 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.22em] ${
          inverted ? "text-gold-light" : "text-gold"
        }`}
      >
        London · Harley Street
      </span>
    </Link>
  );
}
