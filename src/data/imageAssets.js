const arcmediaImports = import.meta.glob("../../arcmedia/*.jpeg", {
  eager: true,
  import: "default",
});

import industrialScaffoldingReference from "../../industrialscaffolding.jpeg";
import schoolScaffoldingReference from "../../schoolscaffolding.jpeg";

const arcmediaNames = Object.keys(arcmediaImports).sort((a, b) =>
  a.localeCompare(b)
);

export const arcmediaLibrary = arcmediaNames.map((path, index) => ({
  src: arcmediaImports[path],
  path,
  title: `ARC project image ${index + 1}`,
  alt: `ARC scaffolding installation and worksite detail image ${index + 1}`,
}));

const fromArcmedia = (index, alt) => ({
  src: arcmediaLibrary[index]?.src,
  alt,
});

export const pageImages = {
  homeHero: fromArcmedia(
    32,
    "Scaffold structure supporting a live build with practical staged access"
  ),
  trust: fromArcmedia(
    24,
    "Close detail of compliant scaffold structure and safe platform access"
  ),
  services: [
    fromArcmedia(7, "Residential scaffolding around a live housing development"),
    {
      src: schoolScaffoldingReference,
      alt: "Specialist school scaffolding setup on a larger non-industrial build",
    },
    fromArcmedia(18, "Custom scaffold access around awkward site geometry"),
    {
      src: industrialScaffoldingReference,
      alt: "Industrial scaffolding in a confined utility environment with process pipe infrastructure",
    },
  ],
  featuredProjects: [
    fromArcmedia(14, "Residential scaffold package with phased roofline access"),
    {
      src: schoolScaffoldingReference,
      alt: "School scaffolding layout for specialist multi-elevation access",
    },
    fromArcmedia(24, "Access-solution scaffold arrangement in a constrained work zone"),
    {
      src: industrialScaffoldingReference,
      alt: "Industrial scaffold access system beside utility process infrastructure",
    },
  ],
  projectsPageLead: fromArcmedia(
    30,
    "ARC scaffold structure across a multi-elevation specialist build"
  ),
  projectsGallery: [0, 3, 5, 8, 10, 12, 16, 19, 21, 23, 27, 33, 36, 38, 41].map(
    (index, idx) =>
      fromArcmedia(
        index,
        `ARC project sequence image ${idx + 1} showing scaffold progress and completion`
      )
  ),
  safetyHero: fromArcmedia(
    9,
    "ARC scaffold crew operating under safety-controlled work conditions"
  ),
  safetyDetails: [4, 6, 13, 17, 20, 22].map((index, idx) =>
    fromArcmedia(index, `Scaffold safety and inspection detail image ${idx + 1}`)
  ),
  processHero: fromArcmedia(
    34,
    "ARC scaffold installation process underway on a structured workfront"
  ),
  processSteps: [2, 15, 25, 28, 37, 39].map((index, idx) =>
    fromArcmedia(index, `ARC process stage image ${idx + 1}`)
  ),
  aboutHero: fromArcmedia(
    29,
    "ARC scaffold team delivering practical staged access on a live site"
  ),
  contactHero: fromArcmedia(
    1,
    "ARC scaffold site access route ready for client coordination"
  ),
  serviceDetail: {
    "residential-scaffolding": [7, 14, 20].map((index, idx) =>
      fromArcmedia(index, `Residential scaffolding image ${idx + 1}`)
    ),
    "specialist-builds": [31, 26, 33].map((index, idx) =>
      fromArcmedia(index, `Specialist builds scaffolding image ${idx + 1}`)
    ),
    "commercial-scaffolding": [31, 26, 33].map((index, idx) =>
      fromArcmedia(index, `Specialist builds scaffolding image ${idx + 1}`)
    ),
    "industrial-scaffolding": [
      {
        src: industrialScaffoldingReference,
        alt: "Industrial scaffold access system beside large process pipe with PPE operative in confined infrastructure environment",
      },
    ],
    "access-solutions": [18, 24, 34].map((index, idx) =>
      fromArcmedia(index, `Access solutions scaffolding image ${idx + 1}`)
    ),
    "access-scaffolding": [18, 24, 34].map((index, idx) =>
      fromArcmedia(index, `Access solutions scaffolding image ${idx + 1}`)
    ),
  },
};
