import type { Metadata } from "next";
import { Lexend_Deca, Great_Vibes } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
// @ts-ignore: Importing global CSS
import "./globals.css";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Phuc Huynh",
  description: "Phuc Huynh's personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexendDeca.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
