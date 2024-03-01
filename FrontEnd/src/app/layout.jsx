import React from "react";
import "./globals.css";
import { Lato } from "next/font/google";
import { Header } from "../components/Header";
import { Providers } from "./Providers";
import Footer from "../components/footer/Footer";
import { Toaster } from "../components/ui/sonner/Sonner";

const lato = Lato({ subsets: ["latin"], weight: ["400", "900"] });

export const metadata = {
  title: "App Reciclame",
  description:
    "App para reciclaje, Red social de Reciclaje, concientizacion ambiental",
  icons: {
    icon: "/favicon.ico?v=4",
    apple: "/apple-touch-icon.png?v=4",
    shortcut: "/apple-touch-icon.png?v=4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={lato.className}>
        <Providers>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
