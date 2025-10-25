 Página: Contato
 
 ---

 Certo, aplique as modificações iniciais no código:


- Refatore de TS para JS

- Aplique a melhor performance possível do ponto de vista do NextJS

- Crie as copys com esses textos de inspiração. Torne-os melhores de um ponto de vista emocional, quero textos que se conectem com o usuário. Ou simplesmente deixe como está se for o suficiente.

- Use `text-lg` para tags `<p>` como tamanho padrão.

- Evite comentários no código.

- Deixe apenas um botão.

- Essa é a seção de cta para que o usuário fale conosco no Whatsapp. Use as cores do whatsapp. Adicione um ícone de whatsapp numa posição que case bem com esse CTA.

- remove o vídeo e qualquer coisa relacionada a ele. O background color é o verde do whatsapp

---

[TEXTO DE INSPIRAÇÃO]

- heading: Nosso Whatsapp
- description: Entre em contato conosco no nosso canal principal de mensagens
- button: Botão para iniciar conversa com o número +55 (84) 99983-7773

---

[CÓDIGO]

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  video: string;
  videoType: string;
};

export type Cta5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Cta5 = (props: Cta5Props) => {
  const { heading, description, buttons, video, videoType } = {
    ...Cta5Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-text-alternative md:text-md">{description}</p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <video className="absolute inset-0 aspect-video size-full object-cover" autoPlay loop muted>
          <source src={video} type={videoType} />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Cta5Defaults: Props = {
  heading: "Medium length heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary-alt" }],
  video: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4",
  videoType: "video/mp4",
};
