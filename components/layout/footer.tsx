import React from 'react';
import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-deep-olive flex items-center justify-center text-clean-white hover:bg-muted-sage hover:text-deep-olive transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <Link
                href={href}
                className="text-muted-smoke hover:text-moss-gray transition-colors duration-300"
            >
                {label}
            </Link>
        </li>
    );
}

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-midnight-green-d/30 py-12 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    {/* Brand Column */}
                    <div className="md:col-span-4">
                        <h2 className="text-xl font-serif font-semibold text-muted-sage mb-4">
                            Thimira | <span className="text-moss-gray">N</span>
                        </h2>
                        <p className="text-muted-smoke mb-6 max-w-md">
                            Creating exceptional digital experiences that blend
                            luxury aesthetics with cutting-edge technology.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="https://github.com" icon={<Github size={18} />} />
                            <SocialLink href="https://wa.me/94716337787" icon={<FaWhatsapp size={18} />} /> {/* ✅ WhatsApp */}
                            <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} />
                            <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-3 md:col-start-6">
                        <h3 className="text-sm uppercase tracking-wider text-muted-smoke font-medium mb-4">
                            Navigation
                        </h3>
                        <ul className="space-y-2">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="/about" label="About" />
                            <FooterLink href="/portfolio" label="Portfolio" />
                            <FooterLink href="/services" label="Services" />
                            <FooterLink href="/contact" label="Contact" />
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-3 md:col-start-10">
                        <h3 className="text-sm uppercase tracking-wider text-muted-smoke font-medium mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <Mail size={16} className="text-sage-hover mt-1 mr-3" />
                                <span className="text-muted-sage">thimiranavodana2002@gmail.com</span>
                            </li>
                            <li className="flex items-start">
                                <Phone size={16} className="text-sage-hover mt-1 mr-3" />
                                <div className="text-muted-sage">
                                    <div>+94 (71) 633-7787 <span className="text-xs">(WhatsApp)</span></div>
                                    <div>+94 (75) 151-2246 <span className="text-xs">(Normal)</span></div>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <MapPin size={16} className="text-sage-hover mt-1 mr-3" />
                                <address className="not-italic text-muted-sage">
                                    123 Greenway, Colombo, Sri Lanka
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-forest-base mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-moss-gray text-sm">
                        © {currentYear} Thimira Navodana. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span className="text-moss-gray text-sm hover:text-muted-sage transition-colors cursor-pointer">
                            Privacy Policy
                        </span>
                        <span className="text-moss-gray text-sm hover:text-muted-sage transition-colors cursor-pointer">
                            Terms of Service
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
