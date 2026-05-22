import PageMeta from "../components/PageMeta";
import { aboutPillars, site } from "../data/siteContent";
import { pageImages } from "../data/imageAssets";

export default function AboutPage() {
  return (
    <section className="bg-navy pt-28 pb-20 lg:pb-28 text-white">
      <PageMeta
        title="About ARC Scaffold Services"
        description="Learn about ARC Scaffold Services and our safety-led, commercial-grade approach to scaffolding delivery across Ireland."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-black mb-4">About ARC Scaffold Services</h1>
        <p className="text-gray-300 max-w-3xl mb-10">
          ARC is built around disciplined scaffolding delivery, direct site communication, and long-term client trust across Ireland's commercial and residential sectors.
        </p>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
          <img src={pageImages.aboutHero.src} alt={pageImages.aboutHero.alt} className="w-full h-[420px] object-cover rounded-xl border border-white/10" />

          <div className="bg-navy-light border border-white/10 rounded-xl p-6">
            <h2 className="text-2xl font-black mb-4">What Defines ARC</h2>
            <ul className="space-y-3 mb-6">
              {aboutPillars.map((pillar) => (
                <li key={pillar} className="text-gray-300 text-sm">
                  <span className="inline-block w-2 h-2 rounded-full bg-arc-orange mr-2" aria-hidden="true" />
                  {pillar}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-300">Service Area: {site.serviceArea}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
