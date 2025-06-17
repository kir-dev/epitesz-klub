import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import React from "react";
import Footer from "@/app/(app)/Components/Footer";
import fetchNavItems from "@/app/(app)/Components/navBar/fetchCategory";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Építész Klub",
  description: "Építész Klub Szakkollégium hivatalos honlapja",
};

export const revalidate = 60;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={`fixed top-0 left-0 w-full z-50 bg-transparent`}>
          {fetchNavItems(true)}
        </div>
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
