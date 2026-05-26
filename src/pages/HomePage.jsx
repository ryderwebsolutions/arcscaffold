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
        title="ARC Scaffold Services | Residential & Specialist Scaffolding Contractor Laois"
        description="ARC Scaffold Services provides residential scaffolding, specialist builds, access solutions, and industrial scaffold services across Laois, the Midlands, and Ireland."
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
