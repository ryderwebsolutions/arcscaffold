import { site } from "../data/siteContent";
import { pageImages } from "../data/imageAssets";

export default function Hero() {
  const heroBackground = pageImages.homeHero.src;

  return (
    <section
      className="relative min-h-[88vh] bg-navy flex flex-col justify-center overflow-hidden pt-14 lg:pt-16 bg-cover bg-center"
      style={{
        backgroundImage: `url('${heroBackground}')`,
        backgroundSize: "cover",
      }}
      aria-label="ARC Scaffold Services hero"
    >
      <div className="absolute inset-0 bg-navy/75 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-dark/80 via-navy/68 to-navy-light/50 pointer-events-none"
        aria-hidden="true"
      />

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-arc-orange" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-arc-orange" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2.5 bg-arc-orange/15 border border-arc-orange/35 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-arc-orange rounded-full flex-shrink-0" />
            <span className="text-arc-orange font-semibold text-xs uppercase tracking-[0.15em]">
              Premium Scaffolding Systems Across Ireland
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black text-white leading-[1.02] mb-6 tracking-tight">
            Advanced
            <br />
            <span className="text-arc-orange">Scaffolding</span>
            <br />
            Delivery
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mb-4 leading-relaxed font-medium">
            Commercial, residential, industrial, and access scaffolding engineered for real-world site performance.
          </p>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Planned, erected, inspected, and managed with a safety-first workflow by a trusted Irish scaffolding team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-10 max-w-4xl">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center gap-2.5 bg-arc-orange hover:bg-arc-orange-dark text-white font-bold text-sm sm:text-base px-6 py-4 rounded transition-all duration-200 hover:translate-y-[-1px] shadow-orange min-h-[56px] text-center"
              aria-label={`Call Dan on ${site.phone}`}
            >
              Call Dan Now
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/8 text-white font-bold text-sm sm:text-base px-6 py-4 rounded border-2 border-white/30 hover:border-white/60 transition-all duration-200 min-h-[56px] text-center"
            >
              <svg className="w-5 h-5 text-arc-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Dan: {site.phone}
            </a>
            <a
              href={`tel:${site.phoneTelSecondary}`}
              className="inline-flex items-center justify-center gap-2.5 bg-arc-orange/10 hover:bg-arc-orange/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded border-2 border-arc-orange/55 hover:border-arc-orange transition-all duration-200 min-h-[56px] text-center"
            >
              <svg className="w-5 h-5 text-arc-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Keith: {site.phoneSecondary}
            </a>
          </div>

          <div className="text-sm text-gray-300">
            <a href={`tel:${site.phoneTel}`} className="hover:text-white transition-colors">Dan: {site.phone}</a>
            <span className="mx-3 text-gray-500">|</span>
            <a href={`tel:${site.phoneTelSecondary}`} className="hover:text-white transition-colors">Keith: {site.phoneSecondary}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
