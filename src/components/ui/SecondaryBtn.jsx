import { Button } from "@relume_io/relume-ui";

export const SecondaryBtn = ({ title, size = 'lg', className = '' }) => {
  
  const baseClasses = `
    rounded-md border-2 border-white/50 bg-transparent 
    text-white text-base font-base
    px-6 py-2 md:px-8 md:py-3 
    transition-colors duration-300 
    hover:bg-white hover:text-black
  `;

  return (
    <Button
      size={size}
      variant="secondary"
      className={`${baseClasses} ${className}`}
    >
      {title}
    </Button>
  );
};