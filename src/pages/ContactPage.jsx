import PageMeta from "../components/PageMeta";
import { site } from "../data/siteContent";
import { pageImages } from "../data/imageAssets";

export default function ContactPage() {
  return (
    <section className="bg-arc-grey pt-28 pb-20 lg:pb-28">
      <PageMeta
        title="Contact ARC Scaffold Services"
        description="Call Dan or Keith for residential scaffolding, specialist scaffold services, and scaffold access support across Laois, the Midlands, and Ireland."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-black text-navy mb-4">Contact ARC</h1>
        <p className="text-arc-steel max-w-3xl mb-10">
          Fast direct contact for scaffold jobs in Laois, the Midlands, and across Ireland. Call Dan or Keith for immediate support.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div className="space-y-5">
            <img src={pageImages.contactHero.src} alt={pageImages.contactHero.alt} className="w-full h-[320px] object-cover rounded-xl" />
            <div className="bg-navy text-white rounded-xl p-6">
              <h2 className="text-2xl font-black mb-4">Direct Contact</h2>
              <p className="text-gray-300 mb-2">Dan: <a href={`tel:${site.phoneTel}`} className="text-white font-bold">{site.phone}</a></p>
              <p className="text-gray-300 mb-2">Keith: <a href={`tel:${site.phoneTelSecondary}`} className="text-white font-bold">{site.phoneSecondary}</a></p>
              <p className="text-gray-300">Coverage: {site.serviceArea}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-7 sm:p-8 shadow-card space-y-5">
            <h2 className="text-2xl font-black text-navy">Call Now</h2>
            <p className="text-arc-steel text-sm">
              For fastest response, call directly. We can confirm service availability, discuss access requirements, and price your project on the call.
            </p>

            <a
              href={`tel:${site.phoneTel}`}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-arc-orange hover:bg-arc-orange-dark text-white font-bold text-base px-6 py-4 rounded-lg transition-colors shadow-orange min-h-[56px]"
            >
              Call Dan
            </a>
            <a
              href={`tel:${site.phoneTelSecondary}`}
              className="w-full inline-flex items-center justify-center gap-2.5 border-2 border-navy/20 hover:border-navy text-navy font-bold text-base px-6 py-4 rounded-lg transition-colors min-h-[56px]"
            >
              Call Keith
            </a>

            <div className="rounded-lg bg-arc-grey p-4">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy mb-2">Service Areas</p>
              <p className="text-sm text-arc-steel">{site.serviceArea}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
