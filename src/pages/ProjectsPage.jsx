import { featuredProjectNarratives, projectCategories } from "../data/siteContent";
import { pageImages } from "../data/imageAssets";
import PageMeta from "../components/PageMeta";

export default function ProjectsPage() {
  return (
    <section className="bg-white pt-28 pb-20 lg:pb-28">
      <PageMeta
        title="Scaffolding Projects | ARC Scaffold Services"
        description="View ARC's commercial, residential, temporary roof, and access scaffolding projects across Ireland."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-black text-navy mb-4">Projects</h1>
        <p className="text-arc-steel max-w-3xl mb-8">
          A structured portfolio of ARC scaffolding projects, presented by category with clear scope, challenge, solution, and outcome.
        </p>

        <img
          src={pageImages.projectsPageLead.src}
          alt={pageImages.projectsPageLead.alt}
          className="w-full h-[42vw] max-h-[460px] min-h-[240px] rounded-xl object-cover mb-12"
        />

        <div className="flex flex-wrap gap-2 mb-12">
          {projectCategories.map((category) => (
            <span key={category} className="text-xs font-bold uppercase tracking-[0.14em] px-3 py-2 rounded bg-navy text-white">
              {category}
            </span>
          ))}
        </div>

        <div className="space-y-14">
          {featuredProjectNarratives.map((project, idx) => (
            <article key={project.title} className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={pageImages.projectsGallery[idx].src}
                  alt={pageImages.projectsGallery[idx].alt}
                  className="w-full h-[320px] object-cover rounded-xl"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
