"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
  dropdownColor?: string;
}
const currentYear = new Date().getFullYear();
export const navItems: NavItem[] = [
  {
    title: "aktuális",
    href: "/recent",
  },
  {
    title: "rólunk",
    href: "/about-us",
    children: [
      { title: "történetünk", href: "/about-us" },
      { title: "tagok", href: "/about-us/members" },
      { title: "taggá válás", href: "/about-us/becoming-a-member" },
      { title: "SZMSZ", href: "/about-us/szmsz" },
    ],
    dropdownColor: "#3F6080",
  },
  {
    title: "projektek",
    href: "/projektek",
    dropdownColor: "#F1CA47",
  },
  {
    title: `${currentYear - 2008} év`,
    href: "/15-ev",
    dropdownColor: "#E8804C",
  },
  {
    title: "kapcsolat",
    href: "/contact",
  },
];

interface NavBarProps {
  categories: NavItem[];
  homePage: boolean;
}

export default function NavBar(props: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  navItems[2].children = props.categories;

  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openDropdownArrow = (
    e: React.MouseEvent<HTMLButtonElement>,
    title: string,
  ) => {
    e.preventDefault();
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  useEffect(() => {
    const handleScroll = () => {
      const carousel = document.getElementById("carousel");
      if (carousel) {
        const carouselBottom = carousel.getBoundingClientRect().bottom;
        if (carouselBottom <= 0) {
          setNavbarBg("bg-black");
        } else {
          setNavbarBg("bg-transparent");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    setIsOpen(false);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={`${props.homePage ? "fixed top-0 left-0" : "relative"} w-full z-10`}
    >
      <div
        className={`${props.homePage ? "block" : "block"} absolute inset-0 lg:bg-contain bg-cover h-19 ${navbarBg}`}
        style={{
          backgroundImage: `url(${props.homePage ? undefined : "/NavBarBg.png"})`,
        }}
      />

      <div className="relative uniform-margin py-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <Link href="/" className="flex flex-row items-center">
              <img
                src="/logo.png"
                alt="Építész Klub Szakkollégium"
                width={50}
              />
              <p className="px-6 text-xl sm:text-3xl md:text-4xl font-bold text-white">
                Építész Klub Szakkollégium
              </p>
            </Link>
          </div>

          <button
            className="text-white lg:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative group whitespace-nowrap text-xl"
              >
                <Link href={item.href}>
                  <button
                    onClick={() =>
                      setOpenSubmenu(
                        openSubmenu === item.title ? null : item.title,
                      )
                    }
                    className="px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  >
                    {item.title}
                  </button>
                </Link>

                {item.children && (
                  <div
                    className="absolute left-0 hidden group-hover:block w-48 shadow-lg z-50"
                    style={{ backgroundColor: item.dropdownColor }}
                  >
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
                  <div className="flex justify-between items-center w-full transition-colors">
                    <div className="px-4 py-2">{item.title}</div>
                    {item.children && (
                      <button onClick={(e) => openDropdownArrow(e, item.title)}>
                        <svg
                          className={`w-8 transition-transform ${openSubmenu === item.title ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </Link>
                {item.children && openSubmenu === item.title && (
                  <div style={{ backgroundColor: item.dropdownColor }}>
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
      <hr className="border-2 border-white" />
    </header>
  );
}
