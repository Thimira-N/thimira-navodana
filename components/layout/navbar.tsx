"use client"

import React, {useEffect, useState} from 'react'
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {Button} from "@/components/ui/button";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <header className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300",
            scrolled
                ? "bg-midnight-green/50 backdrop-blur-md py-3"
                : "bg-transparent py-5"
        )}
        >
            <div className="container px-4 mx-auto flex justify-between items-center">
                <Link
                    href="/"
                    className="relative z-10"
                >
                    <h1 className="text-xl md:text-2xl font-serif font-semibold text-muted-sage hover:text-moss-gray transition-colors">
                        Thimira | <span className="text-moss-gray">N</span>
                    </h1>
                </Link>

                {/*desktop navigation bar*/}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "relative font-medium text-sm uppercase tracking-wider transition-colors hover:text-muted-sage",
                                pathname === item.path
                                    ? "text-muted-sage"
                                    : "text-soft-mint"
                            )}
                        >
                            {item.name}
                            {pathname === item.path && (
                                <motion.span
                                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-moss-gray"
                                    layoutId="underline"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                <Button size="lg" className="max-md:hidden hover:bg-muted-sage hover:text-deep-olive">
                    <a href="mailto:thimiranavodana2002@gmail.com">
                        Email Me!
                    </a>
                </Button>

                {/*mobile navigation toggle*/}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-10 text-soft-mint hover:text-muted-sage transition-colors"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/*mobile menu*/}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-midnight-green/60 backdrop-blur-md flex flex-col items-center justify-center md:hidden"
                        >
                            <nav className="flex flex-col items-center space-y-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-xl font-medium uppercase tracking-wider transition-colors hover:text-muted-sage",
                                            pathname === item.path
                                                ? "text-moss-gray"
                                                : "text-soft-mint"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}
export default Navbar
