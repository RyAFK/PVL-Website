import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const capabilities = [
  {
    title: "Corneal mapping",
    description:
      "Topography and tomography scans measure corneal shape and thickness across thousands of points, informing which techniques are safe to consider.",
  },
  {
    title: "Wavefront measurement",
    description:
      "Detailed measurement of how light travels through your eye helps refine treatment planning beyond a standard prescription.",
  },
  {
    title: "Laser platforms",
    description:
      "Femtosecond and excimer lasers are used for corneal procedures, with settings personalised to your diagnostic results.",
  },
  {
    title: "Biometry for lens procedures",
    description:
      "Precise eye-length and curvature measurements determine intraocular lens power for ICL, lens replacement and cataract surgery.",
  },
];

export function TechnologySection() {
  return (
    <section aria-labelledby="technology-heading" className="border-b border-line bg-paper py-16 sm:py-20">
      <Container>
        <SectionHeading
          id="technology-heading"
          eyebrow="How treatment is planned"
          title="Diagnostics that inform every recommendation"
          description="Technology supports the clinical decision — it doesn't replace the conversation with your consultant about what it means for you."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line p-6">
              <h3 className="font-serif text-lg text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
