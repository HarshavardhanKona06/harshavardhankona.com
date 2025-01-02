import type { Metadata } from "next";
import { Montserrat, EB_Garamond, Fira_Code } from "next/font/google";
import "./globals.css";
import React from "react";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

const firaCode = Fira_Code({
    variable: "--font-fira-code",
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
    variable: "--font-ebGaramond",
    weight: ["400", "500", "600", "700", "800"],
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
    <html lang="en" className="antialiased">
      <body className={`${montserrat.variable} ${firaCode.variable} ${ebGaramond.variable}`}>
        {children}
      </body>
    </html>
  );
}
