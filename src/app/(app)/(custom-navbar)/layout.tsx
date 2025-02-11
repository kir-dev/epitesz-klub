import type {Metadata} from "next";
import localFont from "next/font/local";
import "../globals.css";
import fetchNavItems from "../Components/navBar/fetchCategory";
import React from "react";
import Footer from "@/app/(app)/Components/Footer";

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
        <div>
            {fetchNavItems(true)}
        </div>
        <div className='space-y-4 py-8 2xl:mx-32 xl:mx-16 max-xl:mx-8 max-md:mx-4 min-h-screen'>
            {children}
        </div>
        <Footer />
        </body>
        </html>
    );
}
