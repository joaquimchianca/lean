import { Button } from "@relume_io/relume-ui";
import Image from "next/image";

export const WhatsappCtaSectionDefaults = {
  heading: "Conecte-se Conosco Pelo WhatsApp",
  description:
    "Tem dúvidas ou quer saber mais sobre voluntariado e parcerias? Nossa equipe está pronta para conversar.",
  whatsappNumber: "558481732368", //+55 84 8173-2368
};

export const WhatsappCtaSection = (props) => {
  const { heading, description, whatsappNumber } = {
    ...WhatsappCtaSectionDefaults,
    ...props,
  };

  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="bg-whatsapp-dark-green px-[5%] py-16 text-white md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <Image src={"/whatsapp-white-icon.png"} width={50} height={50} className="mb-5 md:mb-6"/>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-lg">{description}</p>
          <div className="mt-6 md:mt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp-accent text-black hover:bg-[#dcf8c6] font-semibold px-6 py-2 rounded-full
              md:px-8 md:py-3 text-lg"
            >
              Iniciar Conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
