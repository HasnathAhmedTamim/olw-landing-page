// src/app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OLW Landing Page",
  description:
    "Optimized Airbnb Assistant Landing Page - Built with Next.js & Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${dmSans.className} min-h-screen flex flex-col`}>
        <Navbar />

        <main className="flex-1 w-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}