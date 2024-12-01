"use client";

import React, {useState} from 'react';
import Link from 'next/link';
import {Facebook, Instagram, Linkedin, Mail} from 'lucide-react';

const Footer: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText('epiteszklub@uni.bme.hu');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Hide the message after 2 seconds
    };

    return (
        <footer className="w-full py-6 bg-gradient-to-r from-black via-white to-black">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <div className="flex items-center mb-4">
                    <Mail className="h-5 w-5 mr-2 text-gray-800"/>
                    <button onClick={copyToClipboard} className="text-gray-800 hover:text-gray-600 flex items-center">
                        <span className="relative">
                            epiteszklub@uni.bme.hu
                            <span className="absolute left-full ml-2" style={{whiteSpace: 'pre'}}>
                                {copied && <span className="text-green-500">{"\t"}Copied!</span>}
                            </span>
                        </span>
                    </button>
                </div>
                <div className="flex space-x-4">
                    <Link href="https://www.instagram.com/epitesz_klub_szakkollegium/" target="_blank"
                          rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                        <Instagram className="h-6 w-6"/>
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="https://www.facebook.com/EpiteszKlubBME" target="_blank" rel="noopener noreferrer"
                          className="text-gray-800 hover:text-gray-600">
                        <Facebook className="h-6 w-6"/>
                        <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="https://hu.linkedin.com/company/%C3%A9p%C3%ADt%C3%A9sz-klub" target="_blank"
                          rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                        <Linkedin className="h-6 w-6"/>
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;