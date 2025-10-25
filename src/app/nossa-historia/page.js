import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FirstCtaSection } from "@/components/sections/FirstCtaSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HistorySecondaryHeader } from "@/components/sections/HistorySecondaryHeader";
import { HistoryTimeline } from "@/components/sections/HistoryTimeline";
import { PageHeader } from "@/components/sections/PageHeader";
import { TestimonialSection } from "@/components/sections/TestimonialSection";

export default function NossaHistoriaPage() {
  const nossaHistoriaHeaderData = {
    heading: "Histórias de Dignidade e Esperança",
    description:
      "No LEAN, transformamos o cuidado em amor, criando um lar onde idosos encontram respeito, comunidade e um novo significado para seus dias.",
    image: {
      src: "/nossa-historia/banner-principal.png",
      alt: "Casal de idosos sorrindo e se abraçando no jardim do LEAN",
    },
  };

  const ctaSectionDefaults = {
    heading: "Construa um futuro com esperança",
    description:
      "Cada gesto de solidariedade transforma vidas e constrói dignidade para nossos idosos.",
    image: {
      src: "/homepage/primeiro-cta.png",
      alt: "Mãos de um voluntário segurando gentilmente as mãos de uma pessoa idosa",
    },
  };

  const finalCtaSectionDefaults = {
    heading: "Sua ação transforma vidas",
    description:
      "Cada contribuição é luz de esperança que sustenta nossa missão de cuidado e dignidado para idosos.",
    image: {
      src: "/homepage/cta-fim-da-pagina.png",
      alt: "Mãos de um voluntário e de um idoso se segurando",
    },
  };

  return (
    <>
      <PageHeader {...nossaHistoriaHeaderData} />
      <HistoryTimeline />
      <HistorySecondaryHeader />
      <FirstCtaSection {...ctaSectionDefaults} />
      <TestimonialSection />
      <GallerySection />
      <FinalCtaSection />
    </>
  );
}
