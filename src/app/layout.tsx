// src/app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OLW Landing Page",
  description: "Optimized Airbnb Assistant Landing Page - Built with Next.js & Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className={`${dmSans.className} min-h-full flex flex-col bg-white text-[#1E1E1E]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}