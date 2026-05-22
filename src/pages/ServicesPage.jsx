import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { coreServices } from "../data/siteContent";
import { pageImages } from "../data/imageAssets";

export default function ServicesPage() {
  return (
    <section className="bg-arc-grey pt-28 pb-20 lg:pb-28">
      <PageMeta
        title="Scaffolding Services | ARC Scaffold Services"
        description="Explore ARC's residential, commercial, and access scaffolding services across Ireland."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-black text-navy mb-4">Scaffolding Services</h1>
        <p className="text-arc-steel max-w-3xl mb-10">
          ARC delivers service-focused scaffold packages that combine practical site logistics, compliance, and responsive project support.
        </p>

        <div className="grid lg:grid-cols-2 gap-7">
          {coreServices.map((service, idx) => (
            <article key={service.slug} className="bg-white rounded-xl border border-gray-200 shadow-card overflow-hidden">
              <img src={pageImages.services[idx].src} alt={pageImages.services[idx].alt} className="w-full h-64 object-cover" loading="lazy" />
              <div className="p-6">
                <h2 className="text-2xl font-black text-navy mb-2">{service.title}</h2>
                <p className="text-arc-steel mb-4">{service.short}</p>
                <Link to={`/${service.slug}`} className="inline-flex text-sm font-bold text-arc-orange hover:text-arc-orange-dark">
                  View service page
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
