import type { Metadata } from "next";
import { Montserrat, Poppins, Fira_Code, Fira_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

const firaCode = Fira_Code({
    variable: "--font-fira-code",
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

const firaSans = Fira_Sans({
    variable: "--font-fira-sans",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshavardhan Kona",
  description: "Harshavardhan Kona's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable} ${firaCode.variable} ${firaSans.variable}`}>
      <body className="bg-bg-primary-dark antialiased">
        {children}
      </body>
    </html>
  );
}
