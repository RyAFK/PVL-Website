"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { PhoneIcon, ArrowUpRightIcon } from "@/components/ui/icons";
import { trackEvent } from "@/lib/analytics";

export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 grid h-16 grid-cols-3 border-t border-line bg-paper shadow-[0_-6px_18px_-8px_rgba(15,34,51,0.18)] xl:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <a
        href={`tel:${siteConfig.telephone}`}
        onClick={() => trackEvent("mobile_bar_action", { action: "call" })}
        className="flex flex-col items-center justify-center gap-0.5 text-xs font-medium text-ink"
      >
        <PhoneIcon className="h-5 w-5 text-gold" />
        Call
      </a>
      <Link
        href="/suitability"
        onClick={() => trackEvent("mobile_bar_action", { action: "suitability" })}
        className="flex flex-col items-center justify-center gap-0.5 border-x border-line text-xs font-medium text-ink"
      >
        <ArrowUpRightIcon className="h-5 w-5 text-gold" />
        Suitability
      </Link>
      <Link
        href="/contact#book"
        onClick={() => trackEvent("mobile_bar_action", { action: "book" })}
        className="flex flex-col items-center justify-center gap-0.5 bg-ink text-xs font-semibold text-cream"
      >
        Book
      </Link>
    </div>
  );
}
