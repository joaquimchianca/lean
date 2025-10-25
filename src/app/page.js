import { FeaturesSection } from "@/components/sections/FeatureSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FirstCtaSection } from "@/components/sections/FirstCtaSection";
import { HomepageHeader } from "@/components/sections/HomepageHeader";
import { NewsSection } from "@/components/sections/NewsSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { StatsSection } from "@/components/sections/StatsSection";

export default function Home() {
  return(
    <>
      <HomepageHeader />
      <FeaturesSection bgColor="bg-brand-olive" mode="dark"/>
      <FirstCtaSection />
      <ProgramsSection />
      <StatsSection />
      <NewsSection />
      <FinalCtaSection />
    </>
  )
}
