import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/content/articles";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { Container } from "@/components/ui/container";
import { MedicalReviewPanel } from "@/components/sections/medical-review-panel";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { buildArticleSchema } from "@/lib/structured-data";
import { clinicalReview } from "@/content/clinical-review";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.dek,
    alternates: { canonical: `${siteConfig.url}/resources/${article.slug}` },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={buildArticleSchema({
          headline: article.title,
          description: article.dek,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          authorName: clinicalReview.writtenBy,
        })}
      />
      <Breadcrumbs items={[{ name: "Resources", href: "/resources" }, { name: article.title, href: `/resources/${article.slug}` }]} />

      <article className="border-b border-line bg-cream py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h1 className="text-balance font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-balance text-lg leading-relaxed text-slate">{article.dek}</p>
          <p className="mt-3 text-xs text-slate-light">
            {article.readingTime} · Last updated {article.dateModified}
          </p>

          <div className="mt-8 space-y-8">
            {article.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-serif text-2xl text-ink">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm leading-relaxed text-slate">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <MedicalReviewPanel references={article.references} />
          </div>
        </Container>
      </article>

      <FinalCtaSection />
    </>
  );
}
