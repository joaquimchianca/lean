import Image from "next/image";
import { DonationBtn } from "@/components/ui/DonationBtn";

export const StatsSectionDefaults = {
  tagline: "Impacto",
  heading: "Nosso compromisso em números",
  stats: [
    {
      title: "40",
      description: "Residentes recebendo atenção diária no nosso lar",
    },
    {
      title: "100%",
      description: "Das doações financeiras são destinadas à manutenção do lar e cuidado para residentes",
    },
    {
      title: "12",
      description: "Reuniões culturais realizadas anualmente",
    },
    {
      title: "600+",
      description:
        "De jovens já participaram de nossos programas de esporte e conhecimento",
    },
  ],
  image: {
    src: "/homepage/estatisticas.png",
    alt: "Voluntários e idosos do LEAN celebrando juntos em um evento",
  },
};

export const StatsSection = (props) => {
  const { tagline, heading, stats, image } = {
    ...StatsSectionDefaults,
    ...props,
  };
  return (
    <section className="bg-[#F2E855] px-[5%] py-16 text-black md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 rounded-full px-6 py-1.5 w-fit bg-[#5E5905] text-white font-semibold md:mb-4">
              {tagline}
            </p>
            <h2 className="mb-8 text-5xl font-bold md:mb-10 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <div className="grid grid-cols-1 gap-8 py-2 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                    {stat.title}
                  </h3>
                  <p className="text-lg">{stat.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
              <DonationBtn
                title="Apoie Nossos Números"
                size="lg"
                mode="light"
              />
            </div>
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={800}
            className="h-auto w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};