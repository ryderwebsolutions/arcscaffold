import { Link } from "react-router-dom";
import { coreServices } from "../data/siteContent";
import { pageImages } from "../data/imageAssets";

export default function ServicesPreview() {
  return (
    <section className="bg-arc-grey py-16 lg:py-24" aria-labelledby="services-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-5 mb-8 lg:mb-12">
          <div>
            <p className="text-arc-orange text-xs font-bold uppercase tracking-[0.2em] mb-2">Services</p>
            <h2 id="services-preview-heading" className="text-3xl sm:text-4xl font-black text-navy">
              Core Scaffold Services
            </h2>
          </div>
          <Link to="/services" className="hidden sm:inline-flex text-sm font-bold text-navy hover:text-arc-orange transition-colors">
            View all services
          </Link>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {coreServices.map((service, idx) => (
            <article key={service.slug} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
              <img
                src={pageImages.services[idx].src}
                alt={pageImages.services[idx].alt}
                className="w-full h-44 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-black text-navy mb-2">{service.title}</h3>
                <p className="text-sm text-arc-steel mb-4 min-h-[64px]">{service.short}</p>
                <Link
                  to={`/${service.slug}`}
                  className="inline-flex items-center text-sm font-bold text-arc-orange hover:text-arc-orange-dark"
                >
                  Explore service
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
