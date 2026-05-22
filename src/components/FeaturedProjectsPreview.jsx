import { Link } from "react-router-dom";
import { featuredProjectNarratives } from "../data/siteContent";
import { pageImages } from "../data/imageAssets";

export default function FeaturedProjectsPreview() {
  const featured = featuredProjectNarratives.slice(0, 3);

  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="featured-projects-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-12">
          <p className="text-arc-orange text-xs font-bold uppercase tracking-[0.2em] mb-2">Featured Projects</p>
          <h2 id="featured-projects-heading" className="text-3xl sm:text-4xl font-black text-navy">
            Curated Project Highlights
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-7">
          {featured.map((project, idx) => (
            <article key={project.title} className="border border-gray-200 bg-white rounded-xl overflow-hidden shadow-card">
              <img
                src={pageImages.featuredProjects[idx].src}
                alt={pageImages.featuredProjects[idx].alt}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-arc-orange font-bold mb-2">{project.category}</p>
                <h3 className="text-xl font-black text-navy mb-2">{project.title}</h3>
                <p className="text-sm text-arc-steel">{project.scope}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/projects" className="inline-flex items-center justify-center bg-arc-orange hover:bg-arc-orange-dark text-white font-bold px-6 py-3 rounded shadow-orange transition-colors">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
