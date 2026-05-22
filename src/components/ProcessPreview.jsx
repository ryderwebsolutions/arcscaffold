import { Link } from "react-router-dom";
import { processSteps } from "../data/siteContent";

export default function ProcessPreview() {
  const previewSteps = processSteps.slice(0, 3);

  return (
    <section className="bg-navy py-16 lg:py-24" aria-labelledby="process-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-12">
          <p className="text-arc-orange text-xs font-bold uppercase tracking-[0.2em] mb-2">Workflow</p>
          <h2 id="process-preview-heading" className="text-3xl sm:text-4xl font-black text-white">
            Structured Site Delivery Process
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {previewSteps.map((step) => (
            <article key={step.step} className="bg-navy-light border border-white/10 rounded-lg p-5">
              <p className="text-arc-orange font-black text-lg mb-2">{step.step}</p>
              <h3 className="text-white font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/process" className="inline-flex items-center border-2 border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-bold px-6 py-3 rounded transition-all">
            Explore full process
          </Link>
        </div>
      </div>
    </section>
  );
}
