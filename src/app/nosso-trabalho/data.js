import {
  HandHeart,
  HouseHeart,
  Smile,
  Handshake,
  Trophy,
  Star,
  Sprout,
  Users,
  HeartPlus,
  Network,
  Share2
} from "lucide-react";

export const idososInfoSectionData = {
  icon: <HandHeart className="size-12" />,
  heading: "Cuidado que Acolhe: Nossa Dedicação aos Idosos",
  description:
    "No LEAN, cada residente é abraçado com respeito e atenção individualizada. Oferecemos um ambiente seguro, nutrição balanceada e acompanhamento constante, celebrando a beleza de cada história de vida.",
  image: {
    src: "/nosso-trabalho/cuidado-com-idosos-1.png",
    alt: "Cuidadora conversando carinhosamente com um idoso residente do LEAN",
  },
  bgColor: "bg-brand-olive",
  mode: "dark",
};

export const idososFeatureSectionData = {
  image: {
    src: "/nosso-trabalho/cuidado-com-idosos-2.png",
    alt: "Voluntária conversando com uma idosa residente do lar LEAN",
  },
  featureSections: [
    {
      icon: <HouseHeart className="size-8" />,
      heading: "Cuidado com dignidade",
      description:
        "Oferecemos um ambiente seguro e acolhedor que transforma a vida dos nossos idosos com respeito e carinho.",
    },
    {
      icon: <Smile className="size-8" />,
      heading: "Transparência Total",
      description:
        "Sua contribuição vai direto para o que importa: o bem-estar da nossa comunidade. Sem desvios, sem burocracia.",
    },
    {
      icon: <Handshake className="size-8" />,
      heading: "Impacto que Conecta",
      description:
        "Mais que um lar, somos um ponto de encontro que fortalece a comunidade e cria laços que duram a vida inteira.",
    },
  ],
};

export const jovensInfoSectionData = {
  icon: <Trophy className="size-12" />,
  heading: "Transformando vidas através do esporte e cultura",
  description:
    "No coração de Parnamirim, nossos programas comunitários oferecem mais do que atividades. Construímos pontes de esperança por meio do futebol, karatê e balé, transformando o potencial de cada jovem em realidade.",
  image: {
    src: "/nosso-trabalho/esporte-1.png",
    alt: "esporte-1",
  },
  bgColor: "bg-brand-yellow",
};

export const jovensFeatureSectionData = {
  image: {
    src: "/nosso-trabalho/esporte-2.png",
    alt: "Meninos praticando esporte",
  },
  featureSections: [
    {
      icon: <Star className="size-8" />,
      heading: "Zelo pela juventude",
      description:
        "Nossos programas esportivos oferecem alternativas positivas para jovens da comunidade, longe de riscos sociais.",
    },
    {
      icon: <Sprout className="size-8" />,
      heading: "Desenvolvimento cultural",
      description:
        "Criamos oportunidades de crescimento, educação e integração social através de atividades culturais.",
    },
    {
      icon: <Users className="size-8" />,
      heading: "Impacto comunitário",
      description:
        "Cada jovem que participa encontra novos caminhos de esperança, aprendizado e conexão.",
    },
  ],
};

export const culturaInfoSectionData = {
  icon: <HandHeart className="size-12" />,
  heading: "Momentos de conexão e aprendizado",
  description:
    "No LEAN, transformamos nosso espaço em um centro vivo de troca e conhecimento. Nossos eventos mensais de cultura e educação abrem portas para diálogos significativos, unindo gerações e compartilhando histórias.",
  image: {
    src: "/nosso-trabalho/espiritual-1.png",
    alt: "foto de seção",
  },
  bgColor: "bg-brand-light-olive",
};

export const culturaFeatureSectionData = {
  image: {
    src: "/nosso-trabalho/espiritual-2.png",
    alt: "Voluntária conversando com uma idosa residente do lar LEAN",
  },
  featureSections: [
    {
      icon: <HeartPlus className="size-8" />,
      heading: "Apoio emocional e espiritual",
      description:
        "Realizamos sessões semanais de passe magnético que promovem equilíbrio emocional e bem-estar para todos.",
    },
    {
      icon: <Network className="size-8" />,
      heading: "Conexão comunitária",
      description:
        "Criamos uma rede de apoio que ultrapassa os muros do lar, integrando diferentes gerações e histórias.",
    },
    {
      icon: <Share2 className="size-8" />,
      heading: "Momentos de partilha e cultura",
      description:
        "Nossos encontros mensais, o café cultural, são espaços de escuta, acolhimento e construção de laços profundos e significativos.",
    },
  ],
};
