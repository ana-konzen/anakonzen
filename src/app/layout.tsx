import type { Metadata } from "next";

import "@/app/globals.css";

import { sans, display, serif } from "@/app/ui/fonts";

import NavMenu from "@/app/navMenu";

export const metadata: Metadata = {
  title: "Ana Konzen | Design",
  description: "Ana Konzen's design portfolio showcasing UI/UX projects and design work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} ${serif.variable} antialiased`}>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
