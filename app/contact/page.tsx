"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { ContactForm } from "@/components/ui/contact-form";
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import React from "react";

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

const Contact = () => {
    return (
        <div className="pt-20">
            {/*hero*/}
            <section className="py-20 bg-everblack relative overflow-hidden">
                <div className="absolute inset-0 hero-gradient-3" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6"
                        >
                          <span className="text-moss-gray uppercase tracking-wider text-sm font-medium">
                            Contact
                          </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-clean-white mb-6"
                        >
                            Let's Create Something Exceptional
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-muted-smoke max-w-2xl mx-auto"
                        >
                            Reach out to discuss your project, request a quote, or simply say hello. I'm looking forward to hearing from you.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/*contact form and contact info */}
            <section className="py-20 bg-gradient-to-b from-everblack to-midnight-green-d">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/*contact form*/}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="lg:col-span-7"
                        >
                            <SectionHeading
                                title="Get In Touch"
                                subtitle="Fill out the form below to start a conversation about your project."
                            />
                            <ContactForm />
                        </motion.div>

                        {/*contact info*/}
                        <div className="lg:col-span-5">
                            <FadeInSection direction="right" className="bg-gradient-to-r from-midnight-green to-midnight-green-d p-8 rounded-lg border border-deep-fern h-full">
                                <h2 className="text-2xl font-serif text-clean-white mb-8">Contact Information</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <Mail size={20} className="text-muted-sage/90 mt-1 mr-4" />
                                        <div>
                                            <h3 className="text-muted-sage font-medium mb-1">Email</h3>
                                            <a
                                                href="mailto:thimiranavodana2002@gmail.com"
                                                className="text-soft-mint/80 hover:text-muted-sage/90 transition-colors"
                                            >
                                                thimiranavodana2002@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Phone size={20} className="text-muted-sage/90 mt-1 mr-4" />
                                        <div>
                                            <h3 className="text-muted-sage font-medium mb-1">Phone</h3>
                                            <a href="tel:+94716337787" className="block text-soft-mint/80 hover:text-muted-sage/90 transition-colors">
                                                +94 71 633 7787 <span className="text-xs text-moss-gray">(WhatsApp)</span>
                                            </a>
                                            <a href="tel:+94751512246" className="block text-soft-mint/80 hover:text-muted-sage/90 transition-colors mt-1">
                                                +94 75 151 2246 <span className="text-xs text-moss-gray">(Mobile)</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <MapPin size={20} className="text-muted-sage/90 mt-1 mr-4" />
                                        <div>
                                            <h3 className="text-muted-sage font-medium mb-1">Location</h3>
                                            <address className="not-italic text-soft-mint/80  transition-colors">
                                                123 Greenway,<br />
                                                Colombo 05,<br />
                                                Sri Lanka
                                            </address>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Clock size={20} className="text-muted-sage/90 mt-1 mr-4" />
                                        <div>
                                            <h3 className="text-muted-sage font-medium mb-1">Availability</h3>
                                            <p className="text-soft-mint/80">Monday - Friday: 10am - 6pm EST</p>
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-deep-olive my-8" />

                                <h3 className="text-clean-white font-medium mb-4">Follow Me</h3>
                                <div className="flex space-x-4">
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
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </section>

            {/*FAQ section*/}
            <section className="py-20 bg-everblack">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Frequently Asked Questions"
                        subtitle="Answers to common questions about working together."
                        align="center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <FadeInSection className="bg-midnight-green p-8 rounded-lg">
                            <h3 className="text-xl font-serif text-soft-mint mb-4">What is your typical process?</h3>
                            <p className="text-muted-sage">
                                My process typically includes discovery, strategy, design, development, testing, and launch phases. Each project is unique, and I tailor the process to meet specific needs while ensuring a collaborative approach throughout.
                            </p>
                        </FadeInSection>

                        <FadeInSection delay={0.1} className="bg-midnight-green p-8 rounded-lg">
                            <h3 className="text-xl font-serif text-soft-mint mb-4">How long does a project take?</h3>
                            <p className="text-muted-sage">
                                Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while more complex applications can take 3-6 months. I provide detailed timelines during the proposal stage based on your specific requirements.
                            </p>
                        </FadeInSection>

                        <FadeInSection delay={0.2} className="bg-midnight-green p-8 rounded-lg">
                            <h3 className="text-xl font-serif text-soft-mint mb-4">What are your payment terms?</h3>
                            <p className="text-muted-sage">
                                I typically work with a 50% deposit to begin, with the remaining balance due upon project completion. For larger projects, I offer milestone-based payment schedules to align with project phases and deliverables.
                            </p>
                        </FadeInSection>

                        <FadeInSection delay={0.3} className="bg-midnight-green p-8 rounded-lg">
                            <h3 className="text-xl font-serif text-soft-mint mb-4">Do you offer maintenance services?</h3>
                            <p className="text-muted-sage">
                                Yes, I offer ongoing maintenance and support services to ensure your digital product remains secure, up-to-date, and optimized. Custom maintenance plans are available based on your specific needs and budget.
                            </p>
                        </FadeInSection>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact
