import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uma nova forma de se conectar com as pessoas - Lofy",
  description: "Mude completamente a forma de se comunicar com quem você ama!",
  openGraph: {
    title: "Uma nova forma de se conectar com as pessoas - Lofy",
    description: "Mude completamente a forma de se comunicar com quem você ama!",
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Imagem de capa da Lofy',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
