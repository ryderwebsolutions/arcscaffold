import PageMeta from "../components/PageMeta";
import { safetySections } from "../data/siteContent";
import { pageImages } from "../data/imageAssets";

export default function SafetyPage() {
  return (
    <section className="bg-arc-grey pt-28 pb-20 lg:pb-28">
      <PageMeta
        title="Scaffold Safety & Compliance | ARC Scaffold Services"
        description="Learn about ARC scaffold inspections, tagging systems, compliance procedures, and risk management workflow."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-black text-navy mb-4">Safety & Compliance</h1>
        <p className="text-arc-steel max-w-3xl mb-10">
          ARC applies professional scaffold safety procedures on every project through documented inspections, clear tagging systems, and proactive risk management.
        </p>

        <img src={pageImages.safetyHero.src} alt={pageImages.safetyHero.alt} className="w-full h-[42vw] max-h-[440px] min-h-[240px] object-cover rounded-xl mb-10" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {safetySections.map((section, idx) => (
            <article key={section.title} className="bg-white rounded-lg border border-gray-200 shadow-card overflow-hidden">
              <img src={pageImages.safetyDetails[idx].src} alt={pageImages.safetyDetails[idx].alt} className="w-full h-40 object-cover" loading="lazy" />
              <div className="p-5">
                <h2 className="text-xl font-black text-navy mb-2">{section.title}</h2>
                <p className="text-sm text-arc-steel">{section.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
