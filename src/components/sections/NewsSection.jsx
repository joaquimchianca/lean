import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import { RxChevronRight } from "react-icons/rx";

const Card = ({ url, image, readTime, title, description, button }) => {
  return (
    <div className="flex size-full flex-col items-center justify-start border border-border-primary bg-gray-300/50">
      <a href={url} target="_blank" rel="noopener noreferrer" className="relative w-full">
        <Image
          src={image.src}
          alt={image.alt}
          width={600}
          height={400}
          className="aspect-[3/2] size-full object-cover"
        />
      </a>
      <div className="flex flex-1 flex-col justify-between px-5 py-6 md:p-6">
        <div className="flex w-full flex-col items-start justify-start">
          <p className="inline text-sm font-semibold mb-4">{readTime}</p>
          <a className="mb-2" href={url} target="_blank" rel="noopener noreferrer">
            <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
          </a>
          <p className="text-lg">{description}</p>
        </div>
        <Button
          {...button}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-x-2"
        >
          {button.title}
        </Button>
      </div>
    </div>
  );
};

export const NewsSectionDefaults = {
  tagline: "Histórias",
  heading: "Momentos que inspiram esperança",
  description: "Narrativas reais de transformação e cuidado",
  blogPosts: [
    {
      url: "https://www.youtube.com/watch?v=GNVXIgUthuY",
      image: {
        src: "/homepage/card-1-noticia.jpg",
        alt: "Reportagem sobre o LEAN no RNTV",
      },
      readTime: "5 minutos",
      title: "Reportagem sobre o LEAN no RNTV",
      description:
        "Reportagem foi ao ar em setembro de 2015 e retrata cotidiano do lar",
      button: {
        title: "Veja",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "https://lais.huol.ufrn.br/abrigos-de-idosos-recebem-fraldas-arrecadadas-na-3a-conferencia-internacional-de-inovacao-em-saude/",
      image: {
        src: "/homepage/card-noticias.png",
        alt: "Voluntários do LEAN recebendo doação de fraldas",
      },
      readTime: "3 minutos",
      title: "LEAN recebe doação em Conferência Internacional de Inovação em Saúde",
      description:
        "Ação foi realizada em 2022 com apoio de pesquisadores",
      button: {
        title: "Leia",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "https://tribunadonorte.com.br/natal/criadora-de-lar-para-idosos-sera-retratada-em-livro/",
      image: {
        src: "/homepage/dagmar.png",
        alt: "Foto de Dagmar, fundadora do LEAN",
      },
      readTime: "7 minutos",
      title: "Fundadora do LEAN será retratada em livro",
      description:
        "Livro conta história de Dagmar e suas bondades realizadas enquanto viva",
      button: {
        title: "Saiba Mais",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};

export const NewsSection = (props) => {
  const { tagline, heading, description, blogPosts } = {
    ...NewsSectionDefaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 rounded-full px-6 py-1.5 w-fit bg-brand-olive text-white font-semibold md:mb-4 mx-auto">
              {tagline}
            </p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-lg">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};
