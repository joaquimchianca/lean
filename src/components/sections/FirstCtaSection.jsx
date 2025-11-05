import Image from "next/image";
import { DonationBtn } from "@/components/ui/DonationBtn";
import { SecondaryBtn } from "@/components/ui/SecondaryBtn";

export const CtaSectionDefaults = {
  heading: "Seu Gesto é Transformador",
  description:
    "Seja com uma doação ou um momento do seu tempo, cada gesto de carinho nos fortalece na nossa missão de amor e cuidado.",
  image: {
    src: "/homepage/primeiro-cta.png",
    alt: "Mãos de um voluntário segurando gentilmente as mãos de uma pessoa idosa",
  },
};

export const FirstCtaSection = (props) => {
  const { heading, description, image } = {
    ...CtaSectionDefaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative mx-auto overflow-hidden rounded-md">
        <div className="relative z-10 flex flex-col items-center p-8 md:p-12 lg:p-16">
          <div className="max-w-xl text-center">
            <h2 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="text-white md:text-lg">{description}</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 md:mt-8">
            <DonationBtn title="Quero Doar Agora" size="lg" mode="dark" />
            <SecondaryBtn title="Seja Voluntário" size="lg" />
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </div>
    </section>
  );
};