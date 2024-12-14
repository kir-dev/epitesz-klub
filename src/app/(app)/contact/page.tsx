"use client"

import Link from "next/link";
import {Facebook, Instagram, Linkedin, Mail} from "lucide-react";
import React, {useState} from "react";
import {LuCopyCheck} from "react-icons/lu";
import Form from "../Components/Form"

export default function Page() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText('epiteszklub@uni.bme.hu');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Hide the message after 2 seconds
    };

    return (
        <div className="min-h-screen text-zinc-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-zinc-800 to-transparent opacity-20 blur-3xl"></div>
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-4">
                            <h1 className="text-4xl font-bold tracking-tight text-zinc-100">
                                Elérhetőség
                            </h1>
                            <div className="flex-grow h-1 bg-gradient-to-r from-zinc-700 to-zinc-900"></div>
                        </div>
                        <div className="w-20 h-1 bg-zinc-600"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 h-full items-stretch">
                        <div className="space-y-8 h-full">
                            <div className="prose prose-invert">
                                <div className="items-start mb-4">
                                    <div className="flex items-center mb-2">
                                        <Mail className="h-5 w-5 mr-2 text-zinc-300"/>
                                        <button
                                            onClick={copyToClipboard}
                                            className="text-zinc-300 hover:text-gray-600 flex items-center"
                                        >
                                            <span className="flex items-center">
                                                epiteszklub@uni.bme.hu
                                                {copied && (
                                                    <LuCopyCheck
                                                        className="h-5 w-5 ml-1"
                                                        style={{color: 'rgb(21 128 61)'}}
                                                    />
                                                )}
                                            </span>
                                        </button>
                                    </div>
                                    <div className="flex space-x-4">
                                        <Link href="https://www.instagram.com/epitesz_klub_szakkollegium/" target="_blank"
                                              rel="noopener noreferrer" className="text-zinc-300 hover:text-gray-600">
                                            <Instagram className="h-6 w-6"/>
                                            <span className="sr-only">Instagram</span>
                                        </Link>
                                        <Link href="https://www.facebook.com/EpiteszKlubBME" target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-zinc-300 hover:text-gray-600">
                                            <Facebook className="h-6 w-6"/>
                                            <span className="sr-only">Facebook</span>
                                        </Link>
                                        <Link href="https://hu.linkedin.com/company/%C3%A9p%C3%ADt%C3%A9sz-klub"
                                              target="_blank"
                                              rel="noopener noreferrer" className="text-zinc-300 hover:text-gray-600">
                                            <Linkedin className="h-6 w-6"/>
                                            <span className="sr-only">LinkedIn</span>
                                        </Link>
                                    </div>
                                </div>

                                <p className="text-lg text-zinc-300">
                                    Ha bármilyen ötlettel, hozzászólással, kéréssel fordulna hozzánk, keressen minket
                                    bátran!
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Műterem</h2>
                            <div className="space-y-2 text-zinc-300">
                                <p>Bercsényi Kollégium 5.em.</p>
                                <p>Budapest, 1117</p>
                                <p>Bercsényi utca 28-30</p>
                            </div>
                        </div>

                        <Form/>

                        <div className="space-y-8 h-full">

                        <div className="relative h-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.9015870927266!2d19.057!3d47.477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dda3f096c761%3A0x7f8be5816ab76f58!2zQnVkYXBlc3QsIEJlcmNzw6lueWkgdS4gMjgsIDExMTc!5e0!3m2!1sen!2shu!4v1710284151776!5m2!1sen!2shu"
                                    width="100%"
                                    height="100%"
                                    style={{border: 0}}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}