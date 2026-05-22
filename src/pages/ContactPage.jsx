import ContactFormCard from "../components/ContactFormCard";
import PageMeta from "../components/PageMeta";
import { site } from "../data/siteContent";
import { pageImages } from "../data/imageAssets";

export default function ContactPage() {
  return (
    <section className="bg-arc-grey pt-28 pb-20 lg:pb-28">
      <PageMeta
        title="Contact ARC Scaffold Services"
        description="Request a scaffolding quote from ARC Scaffold Services. Call Dan or Keith or send project details online."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-black text-navy mb-4">Contact ARC</h1>
        <p className="text-arc-steel max-w-3xl mb-10">
          Speak with our team about your project timeline, access constraints, and service requirements.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div className="space-y-5">
            <img src={pageImages.contactHero.src} alt={pageImages.contactHero.alt} className="w-full h-[320px] object-cover rounded-xl" />
            <div className="bg-navy text-white rounded-xl p-6">
              <h2 className="text-2xl font-black mb-4">Direct Contact</h2>
              <p className="text-gray-300 mb-2">Dan: <a href={`tel:${site.phoneTel}`} className="text-white font-bold">{site.phone}</a></p>
              <p className="text-gray-300 mb-2">Keith: <a href={`tel:${site.phoneTelSecondary}`} className="text-white font-bold">{site.phoneSecondary}</a></p>
              <p className="text-gray-300 mb-2">Email: <a href={`mailto:${site.email}`} className="text-white font-bold">{site.email}</a></p>
              <p className="text-gray-300">Coverage: {site.serviceArea}</p>
            </div>
          </div>

          <ContactFormCard />
        </div>
      </div>
    </section>
  );
}
