"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { primaryNav } from "@/content/nav";
import { CtaLink } from "@/components/ui/cta-link";
import { CTA } from "@/content/ctas";
import { siteConfig } from "@/lib/site";
import { PhoneIcon, MenuIcon, CloseIcon, ChevronDownIcon } from "@/components/ui/icons";
import { useEscapeClose, useLockBodyScroll } from "@/lib/use-escape-close";
import { trackEvent } from "@/lib/analytics";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEscapeClose(mobileOpen, () => setMobileOpen(false));
  useLockBodyScroll(mobileOpen);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-5 py-3 sm:px-8 xl:px-6">
        <Logo />

        <nav aria-label="Primary" className="hidden xl:flex xl:items-center">
          {primaryNav.map((item) => {
            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-md px-2 py-2 text-sm font-medium text-ink hover:bg-ink/5"
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = openDropdown === item.label;
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                  className="flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-sm font-medium text-ink hover:bg-ink/5"
                >
                  {item.label}
                  <ChevronDownIcon className="h-3.5 w-3.5" />
                </button>
                {isOpen ? (
                  <div className="absolute left-0 top-full w-80 rounded-xl border border-line bg-paper p-3 shadow-card">
                    <ul role="menu" className="grid gap-1">
                      {item.children.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            role="menuitem"
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block rounded-lg px-3 py-2 hover:bg-cream-2"
                          >
                            <span className="block text-sm font-medium text-ink">
                              {child.label}
                            </span>
                            {child.description ? (
                              <span className="block text-xs text-slate-light">
                                {child.description}
                              </span>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={`tel:${siteConfig.telephone}`}
            onClick={() => trackEvent("telephone_click", { location: "header" })}
            className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-ink hover:text-ink-2"
          >
            <PhoneIcon className="h-4 w-4 flex-shrink-0 text-gold" />
            {siteConfig.telephoneDisplay}
          </a>
          <CtaLink
            href="/contact#book"
            className="whitespace-nowrap px-5"
            eventName="book_consultation_click"
            eventPayload={{ location: "header" }}
          >
            {CTA.primary}
          </CtaLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink xl:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-x-0 top-[60px] z-40 h-[calc(100vh-60px)] overflow-y-auto bg-cream px-5 py-6 xl:hidden"
        >
          <nav aria-label="Mobile primary">
            <ul className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <li key={item.href} className="border-b border-line py-1">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-base font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <ul className="mb-2 ml-3 flex flex-col gap-1">
                      {item.children.slice(1).map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm text-slate"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={`tel:${siteConfig.telephone}`}
              className="flex items-center justify-center gap-2 rounded-full border border-ink/20 py-3 text-sm font-medium text-ink"
            >
              <PhoneIcon className="h-4 w-4 text-gold" />
              {siteConfig.telephoneDisplay}
            </a>
            <CtaLink href="/contact#book" size="lg" eventName="book_consultation_click" eventPayload={{ location: "mobile_menu" }}>
              {CTA.primary}
            </CtaLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
