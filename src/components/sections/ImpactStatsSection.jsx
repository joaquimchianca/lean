import React from 'react';

const Card = ({ percentage, headline, description }) => {
  return (
    <div className="bg-brand-light-yellow p-8 text-black rounded-md">
      <h3 className="mb-8 text-xl font-bold leading-[1.4] md:mb-10 md:text-2xl lg:mb-12">
        {headline}
      </h3>
      <p className="text-right text-6xl font-bold leading-none md:text-8xl lg:text-9xl">
        {percentage}
      </p>
      <div className="my-4 h-px w-full bg-gray-500" />
      <p className="text-right text-lg">{description}</p>
    </div>
  );
};

export const ImpactStatsSectionDefaults = {
  heading: "Nosso impacto: números que revelam esperança",
  stats: [
    {
      percentage: "40",
      headline: "Residentes Acolhidos",
      description: "Idosos que encontraram um lar seguro e digno no LEAN.",
    },
    {
      percentage: "600+",
      headline: "Jovens Impactados",
      description:
        "Crianças e adolescentes transformando futuros em nossos programas sociais.",
    },
    {
      percentage: "200+",
      headline: "Apoio Emocional Mensal",
      description:
        "Pessoas recebendo amparo espiritual e conforto para a alma.",
    },
  ],
};

export const ImpactStatsSection = (props) => {
  const { heading, stats } = {
    ...ImpactStatsSectionDefaults,
    ...props,
  };
  return (
    <section className="bg-brand-dark-yellow px-[5%] py-16 text-black md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="text-center text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};