import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { articles } from "@/content/articles";
import { ChevronRightIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description: "Clinically reviewed articles about laser eye surgery, ICL, lens replacement and cataract surgery.",
  alternates: { canonical: `${siteConfig.url}/resources` },
};

export default function ResourcesIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Resources", href: "/resources" }]} />
      <PageHero
        eyebrow="Resources"
        title="Clinically reviewed reading"
        description="Articles written to help you ask better questions at your consultation, not to replace one."
      />
      <section className="border-b border-line bg-paper py-14 sm:py-16">
        <Container className="grid gap-5 sm:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="flex flex-col rounded-2xl border border-line bg-cream-2 p-6 shadow-soft hover:shadow-card"
            >
              <h2 className="font-serif text-xl text-ink">{article.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{article.dek}</p>
              <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-ink">
                Read the article
                <ChevronRightIcon className="h-4 w-4 text-gold" />
              </span>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
