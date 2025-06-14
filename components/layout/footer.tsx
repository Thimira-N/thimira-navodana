import React from 'react';
import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label?: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-deep-olive flex items-center justify-center text-clean-white hover:bg-muted-sage hover:text-deep-olive transition-all duration-300 group relative"
            aria-label={label}
        >
            {icon}
            {label && (
                <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs text-muted-smoke opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {label}
                </span>
            )}
        </a>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <Link
                href={href}
                className="text-muted-smoke hover:text-moss-gray transition-colors duration-300 flex items-center group"
            >
                <span className="w-1 h-1 bg-muted-sage rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {label}
            </Link>
        </li>
    );
}

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-midnight-green-d/30 py-12 mt-20 border-t border-forest-base/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

                    {/* Brand Column */}
                    <div className="md:col-span-5 lg:col-span-4">
                        <div className="flex items-center mb-4">
                            <h2 className="text-2xl font-serif font-semibold text-muted-sage">
                                Thimira | <span className="text-moss-gray">N</span>
                            </h2>
                            <span className="ml-2 px-2 py-1 bg-deep-olive/20 text-xs text-muted-sage rounded-md">
                                Available for work
                            </span>
                        </div>
                        <p className="text-muted-smoke mb-6 max-w-md leading-relaxed">
                            Creating exceptional digital experiences that blend
                            luxury aesthetics with cutting-edge technology.
                        </p>
                        <div className="flex space-x-3">
                            <SocialLink
                                href="https://github.com/"
                                icon={<Github size={18} />}
                                label="GitHub"
                            />
                            <SocialLink
                                href="https://wa.me/94716337787"
                                icon={<FaWhatsapp size={18} />}
                                label="WhatsApp"
                            />
                            <SocialLink
                                href="https://linkedin.com/"
                                icon={<Linkedin size={18} />}
                                label="LinkedIn"
                            />
                            <SocialLink
                                href="https://instagram.com/"
                                icon={<Instagram size={18} />}
                                label="Instagram"
                            />
                            <SocialLink
                                href="https://x.com/"
                                icon={<FaXTwitter size={16} />}
                                label="Twitter/X"
                            />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-3 md:col-start-7 lg:col-start-7">
                        <h3 className="text-sm uppercase tracking-wider text-muted-smoke font-medium mb-4 flex items-center">
                            <span className="w-3 h-0.5 bg-sage-hover mr-2"></span>
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="/about" label="About" />
                            <FooterLink href="/portfolio" label="Portfolio" />
                            <FooterLink href="/services" label="Services" />
                            {/*<FooterLink href="/blog" label="Blog" />*/}
                            <FooterLink href="/contact" label="Contact" />
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4 lg:col-span-3 md:col-start-10">
                        <h3 className="text-sm uppercase tracking-wider text-muted-smoke font-medium mb-4 flex items-center">
                            <span className="w-3 h-0.5 bg-sage-hover mr-2"></span>
                            Get in Touch
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start group">
                                <div className="bg-deep-olive/10 p-2 rounded-full mr-3 group-hover:bg-deep-olive/20 transition-colors">
                                    <Mail size={16} className="text-sage-hover" />
                                </div>
                                <a
                                    href="mailto:thimiranavodana2002@gmail.com"
                                    className="text-muted-sage hover:text-muted-sage/90 transition-colors"
                                >
                                    thimiranavodana2002@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start group">
                                <div className="bg-deep-olive/10 p-2 rounded-full mr-3 group-hover:bg-deep-olive/20 transition-colors">
                                    <Phone size={16} className="text-sage-hover" />
                                </div>
                                <div className="text-muted-sage">
                                    <a href="tel:+94716337787" className="block hover:text-muted-sage/90 transition-colors">
                                        +94 71 633 7787 <span className="text-xs text-moss-gray">(WhatsApp)</span>
                                    </a>
                                    <a href="tel:+94751512246" className="block hover:text-muted-sage/90 transition-colors mt-1">
                                        +94 75 151 2246 <span className="text-xs text-moss-gray">(Mobile)</span>
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start group">
                                <div className="bg-deep-olive/10 p-2 rounded-full mr-3 group-hover:bg-deep-olive/20 transition-colors">
                                    <MapPin size={16} className="text-sage-hover" />
                                </div>
                                <address className="not-italic text-muted-sage hover:text-muted-sage/90 transition-colors">
                                    123 Greenway,<br />
                                    Colombo 05,<br />
                                    Sri Lanka
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*bottom bar*/}
                <div className="border-t border-forest-base/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-moss-gray text-sm">
                        © {currentYear} Thimira Navodana. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link
                            href="#"
                            className="text-moss-gray text-sm hover:text-muted-sage transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-moss-gray text-sm hover:text-muted-sage transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="#"
                            className="text-moss-gray text-sm hover:text-muted-sage transition-colors"
                        >
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;