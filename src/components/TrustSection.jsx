import { trustPoints } from "../data/siteContent";
import { pageImages } from "../data/imageAssets";

export default function TrustSection() {
  return (
    <section className="bg-navy-dark py-16 lg:py-20" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-center">
          <div>
            <h2 id="trust-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
              Trusted Scaffold Support Built on Safety
            </h2>
            <p className="text-gray-300 max-w-2xl mb-7">
              ARC Scaffold Services combines practical site experience with strict safety control so clients get reliable access, clear communication, and dependable delivery.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3" aria-label="ARC trust points">
              {trustPoints.map((point) => (
                <li key={point} className="bg-white/5 border border-white/10 rounded px-3.5 py-3 text-sm text-gray-200 font-semibold">
                  <span className="inline-block w-2 h-2 rounded-full bg-arc-orange mr-2" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <img
              src={pageImages.trust.src}
              alt={pageImages.trust.alt}
              className="w-full h-[300px] lg:h-[360px] object-cover rounded-xl border border-white/10 shadow-card"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
