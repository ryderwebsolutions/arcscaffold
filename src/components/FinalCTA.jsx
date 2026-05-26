import { site } from "../data/siteContent";

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-navy py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <span className="inline-block text-arc-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Direct Contact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Call ARC Scaffold Now
            </h2>
            <div className="w-14 h-1 bg-arc-orange mb-7" aria-hidden="true" />
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              No forms and no delays. Call Dan or Keith directly for fast scaffolding support and quote guidance.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center gap-4 group"
                aria-label={`Call Dan on ${site.phone}`}
              >
                <div className="w-12 h-12 bg-arc-orange/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-arc-orange transition-colors duration-200">
                  <svg className="w-5 h-5 text-arc-orange group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">Primary Contact</p>
                  <p className="text-white font-bold text-lg">Call Dan: {site.phone}</p>
                </div>
              </a>

              <a
                href={`tel:${site.phoneTelSecondary}`}
                className="flex items-center gap-4 group"
                aria-label={`Call Keith on ${site.phoneSecondary}`}
              >
                <div className="w-12 h-12 bg-arc-orange/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-arc-orange transition-colors duration-200">
                  <svg className="w-5 h-5 text-arc-orange group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">Secondary Contact</p>
                  <p className="text-white font-bold text-lg">Call Keith: {site.phoneSecondary}</p>
                </div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex items-center justify-center gap-2.5 bg-arc-orange hover:bg-arc-orange-dark text-white font-bold text-sm px-7 py-3.5 rounded transition-colors duration-200 min-h-[56px]"
              >
                Call Dan
              </a>
              <a
                href={`tel:${site.phoneTelSecondary}`}
                className="inline-flex items-center justify-center gap-2.5 border-2 border-white/30 hover:border-white/60 hover:bg-white/8 text-white font-bold text-sm px-7 py-3.5 rounded transition-all duration-200 min-h-[56px]"
              >
                Call Keith
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-7 sm:p-8 shadow-card-hover">
            <h3 className="text-navy font-black text-xl mb-2">Quick Contact</h3>
            <p className="text-arc-steel text-sm mb-6">
              Tap to call now for immediate scaffolding support and quote turnaround.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href={`tel:${site.phoneTel}`}
                className="w-full inline-flex items-center justify-center bg-arc-orange hover:bg-arc-orange-dark text-white font-bold text-base px-6 py-4 rounded-lg transition-colors shadow-orange min-h-[56px]"
              >
                Call Dan: {site.phone}
              </a>
              <a
                href={`tel:${site.phoneTelSecondary}`}
                className="w-full inline-flex items-center justify-center border-2 border-navy/20 hover:border-navy text-navy font-bold text-base px-6 py-4 rounded-lg transition-colors min-h-[56px]"
              >
                Call Keith: {site.phoneSecondary}
              </a>
            </div>

            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-arc-orange hover:text-arc-orange-dark font-semibold text-sm"
              aria-label="Follow ARC Scaffold Services on Instagram"
            >
              <InstagramIcon />
              Optional: Message us on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
