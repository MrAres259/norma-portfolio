import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Norma Santos Hernandez | Abogada en CDMX",
  description: "Despacho de abogados en la Ciudad de México especialista en Derecho Civil, Familiar, Corporativo, Mercantil y Laboral.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 80px - 300px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
