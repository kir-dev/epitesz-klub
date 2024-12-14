'use client'

import Link from "next/link"
import {Facebook, Instagram, Linkedin, Mail} from "lucide-react"
import React, {useState} from "react"
import {LuCopyCheck} from "react-icons/lu"

export default function ContactInfo() {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText('epiteszklub@uni.bme.hu')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000) // Hide the message after 2 seconds
    }

    return (
        <div className="space-y-8 h-full">
            <div className="prose prose-invert">
                <div className="items-start mb-4">
                    <div className="flex items-center mb-2">
                        <Mail className="h-5 w-5 mr-2 text-zinc-300"/>
                        <button onClick={copyToClipboard} className="text-zinc-300 hover:text-gray-600 flex items-center">
                            <span className="flex items-center">
                                epiteszklub@uni.bme.hu
                                {copied && <LuCopyCheck className="h-5 w-5 ml-1" style={{color: 'rgb(21 128 61)'}} />}
                            </span>
                        </button>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="https://www.instagram.com/epitesz_klub_szakkollegium/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-gray-600">
                            <Instagram className="h-6 w-6"/>
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="https://www.facebook.com/EpiteszKlubBME" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-gray-600">
                            <Facebook className="h-6 w-6"/>
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="https://hu.linkedin.com/company/%C3%A9p%C3%ADt%C3%A9sz-klub" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-gray-600">
                            <Linkedin className="h-6 w-6"/>
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div>
                </div>

                <p className="text-lg text-zinc-300">
                    Ha bármilyen ötlettel, hozzászólással, kéréssel fordulna hozzánk, keressen minket bátran!
                </p>
            </div>
        </div>
    )
}