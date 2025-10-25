import Image from "next/image";
import { DonationBtn } from "@/components/ui/DonationBtn";
import { SecondaryBtn } from "@/components/ui/SecondaryBtn";

export const FinalCtaSectionDefaults = {
  heading: "Transforme vidas hoje mesmo",
  description:
    "Cada gesto de solidariedade é uma ponte para dignidade e esperança em nossa comunidade.",
  image: {
    src: "/homepage/cta-fim-da-pagina.png",
    alt: "Mãos de um voluntário e de um idoso se segurando",
  },
};

export const FinalCtaSection = (props) => {
  const { heading, description, image } = {
    ...FinalCtaSectionDefaults,
    ...props,
  };
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 mx-auto max-w-xl text-center">
        <h2 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
          {heading}
        </h2>
        <p className="text-white md:text-lg">{description}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <DonationBtn title="Apoie Agora" size="lg" mode="dark" />
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
    </section>
  );
};