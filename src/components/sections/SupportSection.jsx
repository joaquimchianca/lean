import Image from "next/image";

const Card = ({ image, tagline, heading, description }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-md border border-neutral-300 bg-gray-300/50 text-black">
      <div className="relative w-full aspect-video">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div>
          <p className="mb-2 font-semibold">{tagline}</p>
          <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {heading}
          </h2>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const HowToHelpSectionDefaults = {
  tagline: "Apoie",
  heading: "Como Você Pode Fazer a Diferença",
  description:
    "Descubra as diversas maneiras de contribuir e fortalecer nossa missão de cuidado e amor.",
  cards: [
    {
      tagline: "Doação Financeira",
      image: {
        src: "/contato/card-1.png",
        alt: "Mãos segurando moedas, simbolizando doação financeira",
      },
      heading: "Sua Contribuição Direta Transforma Vidas",
      description:
        "Cada real doado se converte em cuidado, alimentação e dignidade para nossos residentes.",
    },
    {
      tagline: "Voluntariado",
      image: {
        src: "/contato/card-2.png",
        alt: "Voluntário sorrindo enquanto ajuda um idoso",
      },
      heading: "Compartilhe Seu Tempo e Carinho",
      description:
        "Seja parte ativa de nossas atividades, oferecendo seu talento e afeto à nossa comunidade.",
    },
    {
      tagline: "Parcerias",
      image: {
        src: "/contato/card-3.png",
        alt: "Aperto de mãos simbolizando parceria entre empresas e o LEAN",
      },
      heading: "Empresas que Abraçam a Causa",
      description:
        "Sua empresa pode ser uma força transformadora, apoiando nossos projetos sociais.",
    },
  ],
};

export const SupportSection = (props) => {
  const { tagline, heading, description, cards } = {
    ...HowToHelpSectionDefaults,
    ...props,
  };

  return (
    <section className="bg-white px-[5%] py-16 text-black md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 rounded-full px-6 py-1.5 w-fit bg-brand-olive text-white font-semibold md:mb-4 mx-auto">
            {tagline}
          </p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
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