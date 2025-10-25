import Image from "next/image";
import { DonationBtn } from "@/components/ui/DonationBtn";
import { SecondaryBtn } from "@/components/ui/SecondaryBtn";

export const HeroSectionDefaults = {
  heading: "Onde cada história é honrada com cuidado e esperança",
  description:
    "No coração de Parnamirim, somos um lar que constrói dignidade e comunidade para 40 idosos. Aqui, cada residente encontra o amor e o respeito que merecem.",
  image: {
    src: "/homepage/hero-section.png",
    alt: "Idosos sorrindo em um ambiente acolhedor no lar LEAN",
  },
};

export const HomepageHeader = (props) => {
  const { heading, description, image } = {
    ...HeroSectionDefaults,
    ...props,
  };
  return (
    <section className="relative px-[5%]">
      <div className="container mx-auto flex max-h-[60rem] min-h-svh">
        <div className="py-16 md:py-24 lg:py-28">
          <div className="relative z-10 grid h-full auto-cols-fr grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            <div className="flex flex-col justify-start md:justify-center">
              <h1 className="text-6xl font-bold text-white md:text-9xl lg:text-10xl">
                {heading}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-6 md:mt-8">
                <DonationBtn title="Quero Apoiar" size="lg" mode="dark" />
                <SecondaryBtn title="Saiba Mais" size="lg" />
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-white text-lg">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </section>
  );
};