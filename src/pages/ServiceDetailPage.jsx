import { Link, Navigate, useParams } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { servicePageContent } from "../data/siteContent";
import { pageImages } from "../data/imageAssets";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const content = servicePageContent[slug];

  if (!content) {
    return <Navigate to="/services" replace />;
  }

  const gallery = pageImages.serviceDetail[slug] || [];

  return (
    <section className="bg-white pt-28 pb-20 lg:pb-28">
      <PageMeta
        title={`${content.title} | ARC Scaffold Services`}
        description={`${content.title} by ARC Scaffold Services across Ireland.`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-arc-orange mb-2">Service Page</p>
        <h1 className="text-4xl lg:text-5xl font-black text-navy mb-4">{content.title}</h1>
        <p className="text-arc-steel max-w-3xl mb-10">{content.intro}</p>

        {gallery.length > 0 && (
          <div className={`${gallery.length === 1 ? "mb-10" : "grid md:grid-cols-3 gap-5 mb-10"}`}>
            {gallery.map((item, idx) => (
              <img
                key={`${slug}-${idx}`}
                src={item.src}
                alt={item.alt}
                className={gallery.length === 1 ? "w-full h-[420px] object-cover rounded-xl" : "w-full h-64 object-cover rounded-xl"}
                loading="lazy"
              />
            ))}
          </div>
        )}

        <div className="bg-arc-grey rounded-xl p-6 lg:p-8 mb-8">
          <h2 className="text-2xl font-black text-navy mb-4">What Is Included</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {content.points.map((point) => (
              <li key={point} className="text-sm text-arc-steel">
                <span className="inline-block w-2 h-2 rounded-full bg-arc-orange mr-2" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center bg-arc-orange hover:bg-arc-orange-dark text-white font-bold px-6 py-3 rounded">
            Request A Quote
          </Link>
          <Link to="/projects" className="inline-flex items-center border-2 border-navy/20 hover:border-navy text-navy font-bold px-6 py-3 rounded">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
