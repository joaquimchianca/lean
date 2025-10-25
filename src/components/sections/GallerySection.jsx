"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";

export const GallerySection = (props) => {
  const { heading, description, images } = {
    ...Gallery25Defaults,
    ...props,
  };

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="relume" className="overflow-hidden py-16 md:py-24 lg:py-28">
      <div className="grid auto-cols-fr grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-0">
        <div className="flex lg:justify-self-end">
          <div className="mx-[5%] w-full max-w-md lg:mb-24 lg:ml-[5vw] lg:mr-20">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="text-lg">{description}</p>
          </div>
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
          className="overflow-hidden px-[5%] lg:px-0"
        >
          <CarouselContent className="ml-0">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-4/5"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-md">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-12 flex items-center justify-between">
            <div className="flex gap-2 md:gap-4">
              <CarouselPrevious className="static left-0 top-0 size-12 -translate-y-0" />
              <CarouselNext className="static left-0 top-0 size-12 -translate-y-0" />
            </div>
            <div className="absolute right-[5%] mt-5 flex items-center justify-end md:right-8 lg:right-16">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx("mx-[3px] inline-block size-2 rounded-full", {
                    "bg-black": current === index + 1,
                    "bg-neutral-light": current !== index + 1,
                  })}
                />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export const Gallery25Defaults = {
  heading: "Nossos Momentos",
  description: "Registros que contam nossa história e capturam a essência do nosso lar.",
  images: [
    {
      src: "/nossa-historia/galeria-1.png",
      alt: "Momento de atividade no LEAN",
    },
    {
      src: "/nossa-historia/galeria-2.png",
      alt: "Voluntários e residentes do LEAN",
    },
    {
      src: "/nossa-historia/galeria-3.png",
      alt: "Instalações do LEAN",
    },
  ],
};