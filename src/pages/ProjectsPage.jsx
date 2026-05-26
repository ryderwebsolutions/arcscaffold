import { featuredProjectNarratives } from "../data/siteContent";
import { pageImages } from "../data/imageAssets";
import PageMeta from "../components/PageMeta";
import { Link } from "react-router-dom";
import { site } from "../data/siteContent";

export default function ProjectsPage() {
  return (
    <section className="bg-white pt-28 pb-20 lg:pb-28">
      <PageMeta
        title="Scaffolding Projects | ARC Scaffold Services"
        description="View ARC's commercial, residential, and access scaffolding projects across Ireland."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-black text-navy mb-4">Projects</h1>
        <p className="text-arc-steel max-w-3xl mb-10">
          A structured portfolio of ARC scaffolding projects, presented by category with clear scope, challenge, solution, and outcome.
        </p>

        <div className="space-y-14">
          {featuredProjectNarratives.map((project, idx) => (
            <article key={project.title} className="border border-gray-200 rounded-2xl p-5 sm:p-7 lg:p-8 shadow-card">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={pageImages.projectsGallery[idx].src}
                    alt={pageImages.projectsGallery[idx].alt}
                    className="w-full h-[360px] object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-arc-orange mb-2">{project.category}</p>
                  <h2 className="text-3xl font-black text-navy mb-4">{project.title}</h2>
                  <dl className="space-y-3">
                    <div>
                      <dt className="font-bold text-navy">Scope</dt>
                      <dd className="text-arc-steel">{project.scope}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-navy">Challenge</dt>
                      <dd className="text-arc-steel">{project.challenge}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-navy">Solution</dt>
                      <dd className="text-arc-steel">{project.solution}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-navy">Outcome</dt>
                      <dd className="text-arc-steel">{project.outcome}</dd>
                    </div>
                  </dl>
                </div>
              </div>

            </article>
          ))}
        </div>
        <div className="mt-14 rounded-2xl bg-navy text-white p-7 lg:p-10 border border-white/10">
          <h2 className="text-3xl font-black mb-2">Need a scaffolding partner for your next project?</h2>
          <p className="text-gray-300 max-w-2xl mb-6">
            ARC delivers structured access packages for commercial, residential, and specialist scaffolding requirements across Ireland.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center bg-arc-orange hover:bg-arc-orange-dark text-white font-bold px-6 py-3 rounded shadow-orange transition-colors"
              aria-label={`Call Dan on ${site.phone}`}
            >
              Call Dan For A Quote
            </a>
            <Link to="/services" className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-bold px-6 py-3 rounded transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
