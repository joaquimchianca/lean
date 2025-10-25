import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

export const ContactSectionDefaults = {
  tagline: "Contato",
  heading: "Fale Conosco",
  description:
    "Estamos sempre abertos para novas parcerias e voluntários. Entre em contato e faça parte da nossa história.",
  contacts: [
    {
      icon: <BiEnvelope className="size-8" />,
      title: "Email",
      description: "Envie suas dúvidas ou propostas de parceria.",
      link: {
        label: "leanlarespirita@gmail.com",
        url: "mailto:leanlarespirita@gmail.com",
      },
    },
    {
      icon: <BiPhone className="size-8" />,
      title: "Telefone",
      description: "Ligue para nós durante o horário comercial.",
      link: (
        <div className="flex flex-col space-y-1 underline">
          <a href="tel:+5584999837773">(84) 3645-0796</a>
          <a href="tel:+558432722368">(84) 99983-7773</a>
        </div>
      ),
    },
    {
      icon: <BiMap className="size-8" />,
      title: "Endereço",
      description:
        "Estrada Cajupiranga, 1498, Liberdade, Parnamirim - RN, 59155-740",
      button: {
        title: "Ver no mapa",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
  map: {
    url: "https://www.google.com/maps",
    image: {
      src: "/mapa-placeholder.png",
      alt: "Mapa mostrando a localização do LEAN",
    },
  },
};

export const ContactSection = (props) => {
  const { tagline, heading, description, contacts, map } = {
    ...ContactSectionDefaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 w-fit rounded-full bg-[#5E5905] px-6 py-1.5 font-semibold text-white md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-lg">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
          <div className="grid grid-cols-1 gap-x-4 gap-y-10">
            {contacts.map((contact, index) => (
              <div key={index} className="text-lg">
                <div className="mb-3 md:mb-4">{contact.icon}</div>
                <h3 className="mb-2 font-bold leading-[1.4] text-2xl">
                  {contact.title}
                </h3>
                <p className="mb-2">{contact.description}</p>
                {contact.button ? (
                  <div className="mt-5 md:mt-6">
                    <a href={map.url} target="_blank" rel="noopener noreferrer">
                      <Button {...contact.button}>
                        {contact.button.title}
                      </Button>
                    </a>
                  </div>
                ) : (
                  contact.link &&
                  (contact.link.url ? (
                    <a
                      className="underline font-medium"
                      href={contact.link.url}
                    >
                      {contact.link.label}
                    </a>
                  ) : (
                    contact.link
                  ))
                )}
              </div>
            ))}
          </div>
          <div className="h-[400px] w-full justify-self-end md:h-[516px] md:w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.4623998650613!2d-35.248564824853666!3d-5.930811558340345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b25799c91ea5e3%3A0x1712adaef4276694!2sLean%20-%20Lar%20Esp%C3%ADrita%20Alvorada%20Nova!5e0!3m2!1spt-BR!2sbr!4v1760644577558!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização do LEAN."
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
