import { FirstCtaSection } from "@/components/sections/FirstCtaSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { SupportSection } from "@/components/sections/SupportSection";
import { WhatsappCtaSection } from "@/components/sections/WhatsappCtaSection";

export default function ContatoPage() {

  const contatoHeaderData = {
    heading: "Construindo dignidade juntos",
    description:
      "No coração do RN, cada gesto de solidariedade transforma vidas. Aqui, nossos idosos encontram mais do que um lar - encontram família.",
    image: {
      src: "/contato/banner-principal.png",
      alt: "foto banner principal",
    },
  };
  
  return (
    <>
      <PageHeader {...contatoHeaderData}/>
      <SupportSection />
      <WhatsappCtaSection />
      <FirstCtaSection />
    </>
  );
}
