import type { Metadata } from "next";

import "@/app/globals.css";

import { mono, sans } from "@/app/ui/fonts";

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
      <body className={`${mono.variable} ${sans.variable} antialiased`}>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
