import Image from "next/image";

export const InfoSectionWithImage = (props) => {
  const { 
    icon, 
    heading, 
    description, 
    image, 
    mode = 'light', 
    bgColor = 'bg-white' 
  } = {
    ...props,
  };

  const textColor = mode === 'dark' ? 'text-white' : 'text-black';
  const iconColor = mode === 'dark' ? 'text-white' : 'text-black';

  return (
    <section className={`${bgColor} ${textColor} px-[5%] py-16 md:py-24 lg:py-28`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className={`mb-5 md:mb-6 ${iconColor}`}>
              {/* Clone icon element to apply dynamic color */}
              {icon && typeof icon === 'object' && 'type' in icon ? 
                ({ ...icon, props: { ...icon.props, className: `${icon.props.className || ''} ${iconColor}` } }) 
                : icon}
            </div>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="text-lg">{description}</p>
          </div>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};