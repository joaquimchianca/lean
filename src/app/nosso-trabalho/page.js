import { InfoSectionWithImage } from "@/components/sections/InfoSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { FeaturesSection } from "@/components/sections/FeatureSection";
import { FirstCtaSection } from "@/components/sections/FirstCtaSection";

import {
  idososInfoSectionData,
  idososFeatureSectionData,
  jovensInfoSectionData,
  jovensFeatureSectionData,
  culturaInfoSectionData,
  culturaFeatureSectionData,
} from "./data";
import { ImpactStatsSection } from "@/components/sections/ImpactStatsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function NossoTrabalhoPage() {
  const nossoTrabalhoHeaderData = {
    heading: "Nosso trabalho transforma vidas",
    description:
      "Cuidado que acolhe, comunidade que inspira, fé que conforta. Servimos com amor, de geração em geração.",
    image: {
      src: "/nosso-trabalho/banner-principal.png",
      alt: "foto banner principal",
    },
  };

  return (
    <>
      <PageHeader {...nossoTrabalhoHeaderData} />
      <InfoSectionWithImage {...idososInfoSectionData} />
      <FeaturesSection {...idososFeatureSectionData} />
      <InfoSectionWithImage {...jovensInfoSectionData} />
      <FeaturesSection {...jovensFeatureSectionData} />
      <FirstCtaSection />
      <InfoSectionWithImage {...culturaInfoSectionData} />
      <FeaturesSection {...culturaFeatureSectionData} />
      <ImpactStatsSection />
      <FinalCtaSection />
    </>
  );
}
