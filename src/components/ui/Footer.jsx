import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";
import Image from "next/image";

export const FooterDefaults = {
  logo: {
    url: "/",
    src: "/LEAN-logo.png",
    alt: "Logo do LEAN",
  },
  columnLinks: [
    {
      links: [
        { title: "Início", url: "/" },
        { title: "Sobre nós", url: "/nossa-historia" }, 
        { title: "Programas", url: "/nosso-trabalho" },
        { title: "Contato", url: "/contato" },
        { title: "Doar", url: "/contato" },
      ],
    },
  ],
  socialMediaLinks: [
    { url: "https://www.facebook.com/lean.rn/", icon: <BiLogoFacebookCircle className="size-6" /> },
    { url: "https://www.instagram.com/lean.rn/", icon: <BiLogoInstagram className="size-6" /> },
    { url: "https://www.youtube.com/@larespfritaalvoradanova-le8539", icon: <BiLogoYoutube className="size-6" /> },
  ],
  footerText: "© 2025 LEAN. Todos os direitos reservados.",
  footerLinks: [],
};

export const Footer = (props) => {
  const { logo, footerText, columnLinks, footerLinks, socialMediaLinks } = {
    ...FooterDefaults,
    ...props,
  };

  return (
    <footer className="bg-[#D6CB6F] px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <a href={logo.url} className="lg:justify-self-start">
            <Image 
              src={logo.src} 
              alt={logo.alt} 
              width={120}
              height={80}
              className="h-auto w-32"
            />
          </a>
          {columnLinks.map((column, index) => (
            <ul
              key={index}
              className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-8 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
            >
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="font-semibold text-lg">
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          ))}
          <div className="flex items-start justify-start justify-items-center gap-x-4 lg:justify-self-end">
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-black/20" />
        <div className="flex flex-col items-center justify-center pb-4 pt-6 text-sm md:pt-8">
          <p className="mt-8 md:mt-0">{footerText}</p>
        </div>
      </div>
    </footer>
  );
};