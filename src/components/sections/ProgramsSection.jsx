import Image from "next/image";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export const ProgramsSectionDefaults = {
  tagline: "Nossa Missão",
  heading: "Programas de Cuidado e Comunidade",
  description:
    "Transformando vidas através de serviços dedicados e compassivos que honram cada história.",
  cards: [
    {
      tagline: "Residentes",
      image: {
        src: "/homepage/card-1-servicos.png",
        alt: "Profissional de saúde cuidando de uma idosa residente do LEAN",
      },
      heading: "Cuidado integral para nossos residentes",
      description: "Apoio completo, humanizado e amoroso em cada detalhe.",
      button: {
        title: "Saiba Mais",
        href: "/nosso-trabalho",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Comunidade",
      image: {
        src: "/homepage/card-2-servicos.png",
        alt: "Crianças e idosos participando de atividades comunitárias",
      },
      heading: "Atividades que conectam e fortalecem",
      description: "Construímos pontes entre gerações com programas abertos.",
      button: {
        title: "Participe",
        href: "/contato",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Eventos",
      image: {
        src: "/homepage/card-3-servicos.png",
        alt: "Apresentação musical em um evento cultural no LEAN",
      },
      heading: "Momentos culturais que celebram a vida",
      description: "Música, teatro e acolhimento em cada encontro.",
      button: {
        title: "Venha Conhecer",
        href: "/contato",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};

const Card = ({ image, tagline, heading, description, button }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-md bg-gray-300/50 text-black">
      <div className="relative w-full aspect-video">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
        <div>
          <p className="mb-2 font-semibold">{tagline}</p>
          <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {heading}
          </h2>
          <p className="md:text-lg">{description}</p>
        </div>
        <div className="mt-5 md:mt-6">
          <Button {...button}>{button.title}</Button>
        </div>
      </div>
    </div>
  );
};

export const ProgramsSection = (props) => {
  const { 
    tagline, 
    heading, 
    description, 
    cards, 
    bgColor = "bg-white",
    textColor = "text-black"
  } = {
    ...ProgramsSectionDefaults,
    ...props,
  };
  
  return (
    <section className={`px-[5%] py-16 md:py-24 lg:py-28 ${bgColor} ${textColor}`}>
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4 rounded-full bg-[#5E5905] px-6 py-1.5 text-white w-fit mx-auto">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-lg">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};