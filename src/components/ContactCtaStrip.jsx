import { Link } from "react-router-dom";
import { site } from "../data/siteContent";

export default function ContactCtaStrip() {
  return (
    <section className="bg-navy-dark py-14 lg:py-16 border-t border-white/10" aria-labelledby="contact-cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.3fr_auto] gap-6 items-center">
          <div>
            <p className="text-arc-orange text-xs font-bold uppercase tracking-[0.2em] mb-2">Final CTA</p>
            <h2 id="contact-cta-heading" className="text-3xl sm:text-4xl font-black text-white mb-2">
              Need Scaffold Support Fast?
            </h2>
            <p className="text-gray-300">
              Talk directly to Dan or Keith for immediate availability, quick advice, and quote guidance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${site.phoneTel}`} className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white/60 text-white font-bold px-6 py-3 rounded">
              Call Dan
            </a>
            <a href={`tel:${site.phoneTelSecondary}`} className="inline-flex items-center justify-center border-2 border-arc-orange/60 hover:border-arc-orange text-white font-bold px-6 py-3 rounded">
              Call Keith
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center bg-arc-orange hover:bg-arc-orange-dark text-white font-bold px-6 py-3 rounded shadow-orange">
              Request A Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
