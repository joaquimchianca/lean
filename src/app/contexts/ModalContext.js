'use client'

import { createContext, useState, useContext } from "react"
import { DonationModal } from "@/components/ui/DonationModal"

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      <DonationModal isOpen={isModalOpen} onClose={closeModal}/>
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  return useContext(ModalContext)
}
