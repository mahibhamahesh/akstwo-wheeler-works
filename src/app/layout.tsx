import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "AKS Two Wheeler Works | Expert Bike Service – Mukkadu",
  description:
    "AKS Two Wheeler Works — Mukkadu's premium two-wheeler service centre. Engine repair, brake service, oil change, tyre replacement and more. Call 9384133530.",
  keywords:
    "two wheeler service mukkadu, bike repair mukkadu, AKS two wheeler, motorcycle service, two wheeler workshop",

  icons: {
    icon: "/logo/2.png",
    shortcut: "/logo/2.png",
    apple: "/logo/2.png",
  },

  openGraph: {
    title: "AKS Two Wheeler Works | Mukkadu",
    description: "Expert two-wheeler repairs & service in Mukkadu.",
    type: "website",
    images: [
      {
        url: "/logo/2.png",
        width: 512,
        height: 512,
        alt: "AKS Two Wheeler Works",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-body antialiased">
        <Navbar />

        <main className="relative">
          {children}
        </main>

        <Footer />

        {/* Floating Buttons */}
        <FloatingButtons />
      </body>
    </html>
  );
}