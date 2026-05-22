import PageMeta from "../components/PageMeta";
import { processSteps } from "../data/siteContent";
import { pageImages } from "../data/imageAssets";

export default function ProcessPage() {
  return (
    <section className="bg-white pt-28 pb-20 lg:pb-28">
      <PageMeta
        title="Our Scaffold Process | ARC Scaffold Services"
        description="See ARC's scaffold workflow from site survey and design through erection, inspection, support, and dismantling."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-black text-navy mb-4">ARC Delivery Process</h1>
        <p className="text-arc-steel max-w-3xl mb-10">
          Each project follows a disciplined workflow designed to protect site safety, timeline certainty, and trade access quality.
        </p>

        <img src={pageImages.processHero.src} alt={pageImages.processHero.alt} className="w-full h-[42vw] max-h-[440px] min-h-[240px] object-cover rounded-xl mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => (
            <article key={step.step} className="border border-gray-200 rounded-xl overflow-hidden shadow-card">
              <img src={pageImages.processSteps[idx].src} alt={pageImages.processSteps[idx].alt} className="w-full h-44 object-cover" loading="lazy" />
              <div className="p-5">
                <p className="text-arc-orange font-black text-lg mb-1">{step.step}</p>
                <h2 className="text-xl font-black text-navy mb-2">{step.title}</h2>
                <p className="text-sm text-arc-steel">{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
