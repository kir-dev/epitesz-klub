import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
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
        <div>{fetchNavItems()}</div>
        <div className="space-y-4 my-8 uniform-margin min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
