import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import ServicesPreview from "../components/ServicesPreview";
import FeaturedProjectsPreview from "../components/FeaturedProjectsPreview";
import ProcessPreview from "../components/ProcessPreview";
import ContactCtaStrip from "../components/ContactCtaStrip";
import PageMeta from "../components/PageMeta";

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="ARC Scaffold Services | Commercial & Residential Scaffolding Ireland"
        description="ARC Scaffold Services delivers premium commercial, residential, industrial, and specialist access scaffolding across Ireland."
      />
      <Hero />
      <TrustSection />
      <ServicesPreview />
      <FeaturedProjectsPreview />
      <ProcessPreview />
      <ContactCtaStrip />
    </>
  );
}
