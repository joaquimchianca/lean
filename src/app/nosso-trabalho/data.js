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
  heading: "Um Lar Verdadeiro: Cuidado e Dignidade em Cada Dia",
  description:
    "Para nossos 40 residentes, o LEAN é mais que um abrigo; é um verdadeiro lar. Em mais de 2.500 m² de área acessível, oferecemos não apenas cuidados essenciais, mas o mais importante: um ambiente de amor, carinho e respeito profundo pela jornada de cada um.",
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
    alt: "Voluntária sorrindo e auxiliando uma idosa em atividade no LEAN",
  },
  featureSections: [
    {
      icon: <HouseHeart className="size-8" />,
      heading: "Infraestrutura de Acolhimento",
      description:
        "Nossa casa possui consultório odontológico, espaço de fisioterapia, lavanderia e câmara fria, garantindo que todas as necessidades sejam atendidas com profissionalismo e excelência.",
    },
    {
      icon: <Smile className="size-8" />,
      heading: "Atividade e Propósito",
      description:
        "Respeitamos o desejo de se manter ativo. Oferecemos áreas de cultivo, oficinas de artesanato e costura, permitindo que nossos residentes continuem a produzir com alegria e propósito.",
    },
    {
      icon: <Handshake className="size-8" />,
      heading: "Amor como Primeiro Objetivo",
      description:
        "Seguindo os preceitos do Evangelho, nossa equipe de profissionais e voluntários trabalha com um objetivo sublime: garantir que cada idoso se sinta amado, respeitado e em casa.",
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
