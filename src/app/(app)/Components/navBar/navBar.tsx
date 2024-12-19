'use client'

import * as React from "react"
import {useEffect, useState} from "react"
import Link from "next/link"
import {usePathname} from "next/navigation"

export interface NavItem {
    title: string
    href: string
    children?: NavItem[]
    dropdownColor?: string
}

const navItems: NavItem[] = [
    {
        title: "rólunk",
        href: "#",
        children: [
            {title: "történetünk", href: "#"},
            {title: "tagok", href: "#"},
            {title: "taggá válás", href: "#"},
            {title: "SZMSZ", href: "#"},
        ],
        dropdownColor: "#3F6080",
    },
    {
        title: "projektek",
        href: "/projektek",
        dropdownColor: "#F1CA47",
    },
    {
        title: "15 év",
        href: "#",
        children: [
            {title: "15 év", href: "#"},
            {title: "16 év", href: "#"},
            {title: "17 év", href: "#"},
        ],
        dropdownColor: "#E8804C",
    },
    {
        title: "kapcsolat",
        href: "/contact",
    },
]

interface NavBarProps {
    categories: NavItem[]
}

export default function NavBar(props: NavBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
    const pathname = usePathname();

    navItems[1].children = props.categories;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header className="relative w-full z-[1000]">
            <div
                className="absolute inset-0 bg-black"
                style={{
                    backgroundImage: 'url(/NavBarBg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                }}
            />

            <div className="relative mx-auto max-w-7xl px-4 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo/Title */}
                    <Link
                        href="/"
                        className="px-6 py-2 text-2xl font-bold text-white"
                    >
                        Építész Klub Szakkollégium
                    </Link>

                    <button
                        className="text-white lg:hidden p-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <nav className="hidden lg:flex space-x-1">
                        {navItems.map((item) => (
                            <div key={item.title} className="relative group">
                                <Link href={item.href}>
                                    <button
                                        onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
                                        className="px-4 py-2 text-white hover:bg-white/10 transition-colors"
                                    >
                                        {item.title}
                                    </button>
                                </Link>

                                {item.children && (
                                    <div
                                        className="absolute left-0 hidden group-hover:block w-48 shadow-lg z-50"
                                        style={{backgroundColor: item.dropdownColor}}>
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.title}
                                                href={child.href}
                                                className="block px-4 py-2 text-black hover:bg-white/10 hover:text-white transition-colors"
                                            >
                                                {child.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                {isOpen && (
                    <div className="lg:hidden bg-black text-white absolute top-full left-0 w-full z-50">
                        {navItems.map((item) => (
                            <div key={item.title} className="border-b border-gray-700">
                                <Link href={item.href}>
                                    <button
                                        onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
                                        className="flex justify-between items-center w-full px-4 py-2 transition-colors"
                                    >
                                        {item.title}
                                        {item.children && (
                                            <svg className={`w-4 h-4 transition-transform ${openSubmenu === item.title ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </button>
                                </Link>
                                {item.children && openSubmenu === item.title && (
                                    <div style={{backgroundColor: item.dropdownColor}}>
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.title}
                                                href={child.href}
                                                className="block px-6 py-2 text-black hover:bg-white/10 transition-colors"
                                            >
                                                {child.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </header>
    )
}

