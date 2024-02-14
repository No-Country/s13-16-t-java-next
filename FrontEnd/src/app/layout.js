import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: "400", weight: "700", weight: "900" });

export const metadata = {
  title: "App Reciclame",
  description: "App para reciclaje, Red social de Reciclaje, concientizacion ambiental",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
