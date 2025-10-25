'use client'

import { useModal } from "@/app/contexts/ModalContext";
import { Button } from "@relume_io/relume-ui";

export const DonationBtn = ({title = 'Colabore', size = 'sm', className = '', mode = 'light' }) => {

  const lightModeShadow = "[box-shadow:5px_5px_#737373]";
  const lightModeActiveShadow = "active:[box-shadow:0px_0px_#A68600]";
  
  const darkModeShadow = "[box-shadow:5px_5px_#860764]";
  const darkModeActiveShadow = "active:[box-shadow:0px_0px_#860764]";

  const { openModal } = useModal()

  const baseClasses = `
    rounded-md border-2 border-neutral-700 bg-brand-accent
    font-semibold text-white text-lg
    transition-all duration-100 active:translate-x-[5px] 
    active:translate-y-[5px]
    px-6 py-2 md:px-8 md:py-3
    ${mode === 'dark' ? darkModeShadow : lightModeShadow}
    ${mode === 'dark' ? darkModeActiveShadow : lightModeActiveShadow}
    `

  return (
    <Button 
      size={size}
      variant="secondary"
      className={`${baseClasses} ${className}`}
      onClick={openModal}
    >
      {title}
    </Button>
  )
}
