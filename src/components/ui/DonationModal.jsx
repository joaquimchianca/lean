"use client";

import { AnimatePresence, motion } from "framer-motion"; 
import { useEffect, useState } from "react";
import Image from "next/image";

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const DonationModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => { window.removeEventListener('keydown', handleEsc) };
  }, [onClose]);

  const pixKey = "24518334000110";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0}}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-8 text-center"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
              aria-label="Fechar modal"
            >
              <CloseIcon />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mt-4">Doe com PIX</h2>
            <p className="text-neutral-500 mt-2">Leia o QR Code</p>
            <div className="my-6">
              <Image 
                src={'/qrcode.png'}
                alt={'qr code para doação com pix'}
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <p className="text-sm text-neutral-500 mb-2"> ou copie a chave PIX</p>
            <div className="relative">
              <input 
                type="text"
                readOnly
                value={pixKey}
                className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-center text-sm text-gray-700 pr-12 focus:outline-none focus:ring-2 focus:ring-[#EDDF0D]"
              />
              <button onClick={handleCopy} className="absolute top-0 right-0 h-full px-3 text-gray-500 hover:text-gray-800 transition-colors">
                {isCopied ? <CheckIcon /> : <CopyIcon />}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};