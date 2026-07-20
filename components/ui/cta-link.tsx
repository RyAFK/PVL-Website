"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "ghost" | "outline-light" | "gold";
type Size = "md" | "lg";

interface CtaLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  eventName?: string;
  eventPayload?: Record<string, string | number | boolean>;
}

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors duration-150 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-cream hover:bg-ink-2",
  secondary: "border border-ink/20 bg-transparent text-ink hover:bg-ink/5",
  ghost: "text-ink underline decoration-gold decoration-2 underline-offset-4 hover:text-ink-2",
  "outline-light": "border border-cream/50 text-cream hover:bg-cream/10",
  gold: "bg-gold-light text-ink hover:brightness-95",
};

const sizes: Record<Size, string> = {
  md: "py-2.5",
  lg: "py-3.5 text-base",
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  eventName,
  eventPayload,
}: CtaLinkProps) {
  const handleClick = () => {
    if (eventName) trackEvent(eventName, eventPayload);
  };

  const isExternalAction =
    href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");

  if (isExternalAction) {
    return (
      <a
        href={href}
        onClick={handleClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
