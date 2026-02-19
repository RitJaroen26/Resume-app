import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import { MaintenancePage } from "@/components/Maintenance";

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
  const isMaintenance = true; // เปิด-ปิด ตรงนี้

  if (isMaintenance) {
    return (
      <html>
        <body>
          <MaintenancePage />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
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
