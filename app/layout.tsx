import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import Sidebar from "@/components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pawarit Jaroenphatthanasiri",
  description: "Portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans`}
      >
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  );
}
