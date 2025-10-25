import { Radio_Canada, Mukta } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { ModalProvider } from "./contexts/ModalContext";
import { ContactSection } from "@/components/sections/ContactSection";

const radioCanada = Radio_Canada({
  variable: "--font-radio-canada",
  subsets: ["latin"],
});

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "LEAN",
  description: "Lar Espírita Alvorada Nova",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${mukta.variable} ${radioCanada.variable} font-sans antialiased`}
      >
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <ContactSection />
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
