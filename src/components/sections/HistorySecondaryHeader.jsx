import Image from "next/image";
import { HeartHandshake, Users, Home } from "lucide-react";

export const HistorySecondaryHeader = (props) => {
  const { heading, description, tagline, image, features } = {
    ...Layout105Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 w-fit rounded-full bg-[#5E5905] px-6 py-1.5 font-semibold text-white md:mb-4">
              {tagline}
            </p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              {heading}
            </h3>
          </div>
          <div>
            <p className="mb-5 text-lg md:mb-4">{description}</p>
            <div className="grid grid-cols-1 gap-4 py-0 md:gap-6 md:py-2">
              <ul className="grid grid-cols-1 gap-4 py-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex self-start">
                    <div className="mr-4 flex-none self-start text-brand-olive">
                      {feature.icon}
                    </div>
                    <p className="text-lg">{feature.paragraph}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="relative w-full aspect-video overflow-hidden rounded-md">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export const Layout105Defaults = {
  tagline: "Nossa Origem",
  heading: "Uma história de compaixão e dedicação",
  description:
    "Movido pela compaixão de Maria Dagmar Falcão de Melo e pela dedicação de voluntários, o LEAN nasceu em Parnamirim como um farol de esperança. Mais que um abrigo, somos uma comunidade fundada na necessidade de cuidar dos mais vulneráveis, transformando vidas através do amor, do respeito e da dignidade.",
  image: {
    src: "/nossa-historia/section-image.jpeg",
    alt: "Fundadora do LEAN, Maria Dagmar, e voluntários em um evento da instituição.",
  },
  features: [
    {
      icon: <HeartHandshake className="size-6" />,
      paragraph: "Cuidado integral e humanizado para idosos residentes.",
    },
    {
      icon: <Users className="size-6" />,
      paragraph: "Programas comunitários inclusivos para centenas de jovens.",
    },
    {
      icon: <Home className="size-6" />,
      paragraph: "Um ambiente acolhedor, seguro e que promove a vida.",
    },
  ],
};
