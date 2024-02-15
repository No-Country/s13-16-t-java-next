import React from "react";
import "./globals.css";
import { Lato } from "next/font/google";
import { Header } from "@/components/Header";
import { Providers } from "./Providers";

const lato = Lato({ subsets: ["latin"], weight: ["400", "900"] });

export const metadata = {
  title: "App Reciclame",
  description:
    "App para reciclaje, Red social de Reciclaje, concientizacion ambiental",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={lato.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
