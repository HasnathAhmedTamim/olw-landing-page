// src/app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
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
    <html lang="en" className="h-full antialiased">
      <body className={`${dmSans.className} min-h-full flex flex-col`}>
        <Navbar />
        <div className="w-full">
          <main className="w-full">{children}</main>
        </div>
    
        {/* <Footer /> */}
      </body>
    </html>
  );
}