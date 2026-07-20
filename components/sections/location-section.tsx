import { siteConfig } from "@/lib/site";
import { CtaLink } from "@/components/ui/cta-link";
import { CTA } from "@/content/ctas";
import { MapPinIcon, ClockIcon, PhoneIcon, MailIcon } from "@/components/ui/icons";

export function LocationSection() {
  const fullAddress = `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality} ${siteConfig.address.postalCode}`;
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  const mapBbox = `${siteConfig.geo.longitude - 0.004}%2C${siteConfig.geo.latitude - 0.003}%2C${
    siteConfig.geo.longitude + 0.004
  }%2C${siteConfig.geo.latitude + 0.003}`;
  const mapEmbedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${mapBbox}&layer=mapnik&marker=${siteConfig.geo.latitude}%2C${siteConfig.geo.longitude}`;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
      <div className="overflow-hidden rounded-2xl border border-line shadow-soft">
        <iframe
          title={`Map showing ${siteConfig.name} on Harley Street, London`}
          src={mapEmbedSrc}
          loading="lazy"
          className="h-72 w-full lg:h-full"
        />
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
        <h3 className="font-serif text-xl text-ink">Harley Street clinic</h3>

        <dl className="mt-5 space-y-4 text-sm">
          <div className="flex min-w-0 items-start gap-3">
            <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
            <div className="min-w-0">
              <dt className="font-medium text-ink">Address</dt>
              <dd className="text-slate">{fullAddress}</dd>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-3">
            <ClockIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
            <div className="min-w-0">
              <dt className="font-medium text-ink">Opening hours</dt>
              <dd className="text-slate">
                {siteConfig.openingHours.map((entry) => (
                  <span key={entry.days} className="block">
                    {entry.days}: {entry.hours}
                  </span>
                ))}
              </dd>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-3">
            <PhoneIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
            <div className="min-w-0">
              <dt className="font-medium text-ink">Telephone</dt>
              <dd className="text-slate">
                <a href={`tel:${siteConfig.telephone}`} className="hover:text-ink">
                  {siteConfig.telephoneDisplay}
                </a>
              </dd>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-3">
            <MailIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
            <div className="min-w-0">
              <dt className="font-medium text-ink">Email</dt>
              <dd className="break-words text-slate">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
                  {siteConfig.email}
                </a>
              </dd>
            </div>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <CtaLink href={directionsHref} variant="secondary" eventName="directions_click">
            Get directions
          </CtaLink>
          <CtaLink href="/contact" eventName="contact_click" eventPayload={{ location: "location_section" }}>
            {CTA.supporting}
          </CtaLink>
        </div>
      </div>
    </div>
  );
}
