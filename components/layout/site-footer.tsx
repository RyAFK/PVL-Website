import Link from "next/link";
import { Container } from "@/components/ui/container";
import { footerNav } from "@/content/nav";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/layout/logo";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/ui/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink pb-16 text-cream xl:pb-0">
      <Container className="grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <Logo inverted />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            Consultant-led vision correction on Harley Street, London, covering laser eye
            surgery, ICL, lens replacement and cataract treatment.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm text-cream/85">
            <a href={`tel:${siteConfig.telephone}`} className="flex items-center gap-2 hover:text-gold-light">
              <PhoneIcon className="h-4 w-4 text-gold" /> {siteConfig.telephoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-gold-light">
              <MailIcon className="h-4 w-4 text-gold" /> {siteConfig.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 text-gold" /> {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}
            </span>
          </div>
        </div>

        <FooterColumn title="Treatments" items={footerNav.treatments} />
        <FooterColumn title="Clinic" items={footerNav.clinic} />
        <FooterColumn title="Resources" items={footerNav.resources} />
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-4 py-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Registered
            in England and Wales.
          </p>
          <nav aria-label="Legal" className="flex gap-4">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gold-light">
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-cream/50">{title}</h2>
      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-cream/85 hover:text-gold-light">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
