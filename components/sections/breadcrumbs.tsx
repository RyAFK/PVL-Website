import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site";
import { ChevronRightIcon } from "@/components/ui/icons";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const full = [{ name: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-cream">
      <JsonLd
        data={buildBreadcrumbSchema(full.map((item) => ({ name: item.name, url: `${siteConfig.url}${item.href}` })))}
      />
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-5 py-3 text-xs text-slate-light sm:px-8 lg:px-10">
        {full.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {index > 0 ? <ChevronRightIcon className="h-3 w-3" /> : null}
            {index === full.length - 1 ? (
              <span aria-current="page" className="font-medium text-ink">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-ink">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
