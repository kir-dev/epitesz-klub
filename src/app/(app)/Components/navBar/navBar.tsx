'use client'

import * as React from "react"
import Link from "next/link"

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
        href: "#",
    },
]

interface NavBarProps {
    categories: NavItem[]
}

export default function NavBar(props: NavBarProps) {
    console.log(props.categories);
    navItems[1].children = props.categories;
    console.log(navItems[1].children);

    return (
        <header className="relative w-full">
            <div
                className="absolute inset-0 bg-black"
                style={{
                    backgroundImage: 'url(/NavBarBg.png)',
                    backgroundSize: 'contain'
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

                    {/* Navigation */}
                    <nav className="flex space-x-1">
                        {navItems.map((item) => (
                            <div key={item.title} className="relative group">
                                <Link
                                    href={item.href}
                                    className="px-4 py-2 block text-white bg-black hover:bg-white/10 transition-colors"
                                >
                                    {item.title}
                                </Link>

                                {item.children && (
                                    <div
                                        className="absolute left-0 hidden group-hover:block w-48 shadow-lg"
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
            </div>
        </header>
    )
}

