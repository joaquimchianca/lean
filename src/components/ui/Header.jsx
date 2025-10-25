"use client";

import { useState } from "react";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import Image from "next/image";
import { DonationBtn } from "./DonationBtn";

export const Navbar2Defaults = {
  logo: {
    url: "/",
    src: "/LEAN-logo.png",
    alt: "Logo image",
  },
  navLinks: [
    { title: "Nossa História", url: "/nossa-historia" },
    { title: "Nosso Trabalho", url: "/nosso-trabalho" },
    { title: "Contato", url: "/contato" },
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

export const Header = (props) => {
  const { logo, navLinks } = {
    ...Navbar2Defaults,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <header
      id="relume"
      className="z-[999] flex w-full items-center border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]"
    >
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href={logo.url}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={125}
              height={82}
              className="h-auto w-24 lg:w-32 py-2"
            />
          </a>
          <div className="flex items-center gap-4 lg:hidden">
            <DonationBtn className="px-4 py-1"/>

            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={topLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={middleLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={bottomLineVariants}
              />
            </button>
          </div>
        </div>
        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          animate={isMobileMenuOpen ? "open" : "close"}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          {navLinks.map((navLink, index) => (
            <a
              key={index}
              href={navLink.url}
              className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-lg first:lg:pt-2"
            >
              {navLink.title}
            </a>
          ))}
        </motion.div>
        <div className="hidden justify-self-end lg:block">
          <DonationBtn className="px-6"/>
        </div>
      </div>
    </header>
  );
};
