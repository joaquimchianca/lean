import Image from "next/image";
import { DonationBtn } from "@/components/ui/DonationBtn";

export const PageHeader = ({ heading, description, image }) => {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <h1 className="text-6xl font-bold text-white md:text-9xl lg:text-10xl">
              {heading}
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="text-white text-lg">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <DonationBtn title="Apoie Nossas Histórias" size="lg" mode="dark" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </section>
  );
};