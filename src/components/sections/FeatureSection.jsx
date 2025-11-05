import Image from "next/image";
import { Smile, PiggyBank, ThumbsUp } from "lucide-react";
import React from 'react'; // Import React

export const FeaturesSectionDefaults = {
  image: {
    src: "/homepage/o-que-fazemos.png",
    alt: "Voluntária conversando com uma idosa residente do lar LEAN",
  },
  featureSections: [
    {
      icon: <Smile className="size-8" />,
      heading: "Como Sua Doação Ajuda",
      description:
        "Cada doação se transforma em alimento, medicamentos e conforto para nossos os residentes.",
    },
    {
      icon: <PiggyBank className="size-8" />,
      heading: "Transparência Total",
      description:
        "100% das doações são revertidas aos custos do lar e bem-estar dos idosos.",
    },
    {
      icon: <ThumbsUp className="size-8" />,
      heading: "Impacto que Conecta",
      description:
        "Somos um ponto de encontro que fortalece a comunidade e cria laços que duram a vida inteira.",
    },
  ],
};

export const FeaturesSection = (props) => {
  const { 
    image, 
    featureSections, 
    mode = 'light', 
    bgColor = 'bg-white' 
  } = {
    ...FeaturesSectionDefaults,
    ...props,
  };

  const textColor = mode === 'dark' ? 'text-white' : 'text-black';
  const iconColor = mode === 'dark' ? 'text-white' : 'text-gray-700';
  const iconBgColor = mode === 'dark' ? 'bg-white/10' : 'bg-gray-100';

  return (
    <section className={`${bgColor} ${textColor} px-[5%] py-16 md:py-24 lg:py-28`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 py-2">
              {featureSections.map((section, index) => (
                <div key={index} className="flex self-start">
                  <div className="mr-6 flex-none self-start">
                    <div className={`flex size-16 items-center justify-center rounded-full ${iconBgColor}`}>
                      {section.icon && typeof section.icon === 'object' && 'type' in section.icon ? 
                        React.cloneElement(section.icon, { className: `${section.icon.props.className || ''} ${iconColor}` }) 
                        : section.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-4xl">
                      {section.heading}
                    </h3>
                    <p className="text-lg">{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};