"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import Image from "next/image";
import clsx from "clsx";

const TimelineItemDefaults = [
  {
    value: "1990",
    trigger: "1990",
    content: {
      date: "1990",
      heading: "O Sonho Toma Forma: A Fundação do LEAN",
      description:
        "Movida por um profundo chamado de servir, Maria Dagmar Falcão de Melo planta a semente do Lar Espírita Alvorada Nova, registrando oficialmente a instituição que se tornaria um farol de esperança em Parnamirim.",
      image: {
        src: "/nossa-historia/1o-slide-carrossel.png",
        alt: "Documento histórico ou símbolo da fundação do LEAN",
      },
    },
  },
  {
    value: "1991",
    trigger: "1991",
    content: {
      date: "1991",
      heading: "Um Ato de Amor: A Doação que Construiu o Futuro",
      description:
        "Aos 66 anos, Dona Dagmar transforma seu ideal em realidade concreta ao doar o vasto terreno de 10 hectares, a terra fértil onde o LEAN floresceria e acolheria centenas de vidas.",
      image: {
        src: "/nossa-historia/2o-slide-carrossel.png",
        alt: "Imagem simbólica da doação do terreno ou Dona Dagmar",
      },
    },
  },
  {
    value: "1998",
    trigger: "1998",
    content: {
      date: "1998",
      heading: "Reconhecimento Nacional: Uma Missão Validada",
      description:
        "O trabalho incansável do LEAN é oficialmente reconhecido em âmbito Federal como de utilidade pública, um selo que atesta a seriedade e o impacto de nossa dedicação ao próximo.",
      image: {
        src: "/nossa-historia/3o-slide-carrossel.png",
        alt: "Fachada do LEAN ou um evento de celebração do reconhecimento",
      },
    },
  },
  {
    value: "2010",
    trigger: "2010",
    content: {
      date: "Anos 2010",
      heading: "Braços Abertos: Expandindo o Cuidado para a Comunidade",
      description:
        "O LEAN transcende seus muros, abraçando a comunidade da Liberdade com programas vibrantes de esporte, cultura e apoio espiritual, transformando a vida de centenas de jovens.",
      image: {
        src: "/nossa-historia/4o-slide-carrossel.png",
        alt: "Jovens em atividade de karatê ou futebol no LEAN",
      },
    },
  },
  {
    value: "Hoje",
    trigger: "Hoje",
    content: {
      date: "Hoje",
      heading: "Um Legado Vivo de Amor e Serviço",
      description:
        "Com 40 residentes acolhidos com dignidade e mais de 600 jovens impactados, o LEAN honra a visão de Dona Dagmar, pulsando como um coração de esperança e cuidado em Parnamirim.",
      image: {
        src: "/nossa-historia/5o-slide-carrossel.png",
        alt: "Foto atual e inspiradora dos residentes e voluntários do LEAN",
      },
    },
  },
];

const TimelineItemDisplay = ({ item }) => {
  return (
    <>
      <div>
        <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
          {item.content.date}
        </h3>
        <h4 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
          {item.content.heading}
        </h4>
        <p className="text-lg">{item.content.description}</p>
      </div>
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={item.content.image.src}
          alt={item.content.image.alt}
          fill
          className="object-cover"
        />
      </div>
    </>
  );
};

export const HistoryTimeline = (props) => {
  const { tabs = TimelineItemDefaults } = props;

  const [activeTab, setActiveTab] = useState(tabs[0].value);

  return (
    <section className="bg-brand-olive px-[5%] py-16 text-white md:py-24 lg:py-28">
      <div className="container relative mx-auto overflow-hidden">
        <Tabs
          defaultValue={tabs[0].value}
          onValueChange={setActiveTab}
          className="relative flex flex-col"
        >
          <TabsList className="no-scrollbar relative mb-12 ml-[-5vw] flex w-screen items-center justify-start overflow-x-auto border-b border-b-transparent px-[5vw] md:mb-16 md:ml-0 md:w-auto md:justify-between md:overflow-x-visible md:px-0">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
                className={clsx(
                  "relative flex min-w-[120px] flex-1 flex-col items-center justify-center gap-2 border-0 bg-transparent px-0 pb-3 pt-0 transition-colors duration-300 data-[state=active]:bg-transparent data-[state=active]:text-white text-white/60",
                )}
              >
                <span className="text-xl font-bold md:text-2xl">{tab.trigger}</span>
                <div className="flex w-full items-center ">
                  <div className="h-[3px] w-full bg-white/20" />
                  <div
                    className={clsx(
                      "z-20 flex size-3 flex-none items-center justify-center rounded-full",
                      activeTab === tab.value ? "bg-white" : "bg-white/50",
                    )}
                  />
                  <div className="h-[3px] w-full bg-white/20" />
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab, index) => (
            <TabsContent
              key={index}
              value={tab.value}
              className={clsx(
                "grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20",
                "duration-1500 ease-in-out",
                "data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-right-8",
              )}
            >
              <TimelineItemDisplay item={tab} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};