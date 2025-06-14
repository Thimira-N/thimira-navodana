"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {
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
                Services
              </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-clean-white mb-6"
                        >
                            Elevate Your Digital Presence
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-muted-smoke max-w-2xl mx-auto"
                        >
                            Comprehensive creative and technical solutions tailored to help your brand stand out in the digital landscape.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/*services overview*/}
            <section className="py-20 bg-gradient-to-b from-everblack to-midnight-green-d">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                icon={<service.icon size={24} />}
                                title={service.title}
                                description={service.description}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/*process*/}
            <section className="py-20 bg-everblack">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="My Process"
                        subtitle="A methodical approach to ensure every project succeeds from concept to completion."
                        align="center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        <FadeInSection className="relative pl-12">
                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-muted-sage flex items-center justify-center text-deep-olive font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-serif text-clean-white mb-4">Discovery</h3>
                            <p className="text-muted-smoke">
                                The journey begins with a comprehensive understanding of your goals, audience, and challenges. Through in-depth consultations and research, I establish the foundation for a successful project.
                            </p>
                        </FadeInSection>

                        <FadeInSection className="relative pl-12" delay={0.1}>
                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-muted-sage flex items-center justify-center text-deep-olive font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-serif text-clean-white mb-4">Strategy</h3>
                            <p className="text-muted-smoke">
                                Based on insights gathered, I develop a tailored strategy that aligns with your business objectives. This includes defining key metrics, user journeys, and technical requirements.
                            </p>
                        </FadeInSection>

                        <FadeInSection className="relative pl-12" delay={0.2}>
                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-muted-sage flex items-center justify-center text-deep-olive font-bold">
                                3
                            </div>
                            <h3 className="text-xl font-serif text-clean-white mb-4">Design</h3>
                            <p className="text-muted-smoke">
                                The creative phase transforms strategy into visual concepts. I create wireframes, mockups, and prototypes that capture your brand essence while ensuring exceptional user experience.
                            </p>
                        </FadeInSection>

                        <FadeInSection className="relative pl-12" delay={0.3}>
                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-muted-sage flex items-center justify-center text-deep-olive font-bold">
                                4
                            </div>
                            <h3 className="text-xl font-serif text-clean-white mb-4">Development</h3>
                            <p className="text-muted-smoke">
                                Bringing designs to life with clean, efficient code that ensures performance, security, and scalability. I employ modern technologies and best practices to create robust solutions.
                            </p>
                        </FadeInSection>

                        <FadeInSection className="relative pl-12" delay={0.4}>
                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-muted-sage flex items-center justify-center text-deep-olive font-bold">
                                5
                            </div>
                            <h3 className="text-xl font-serif text-clean-white mb-4">Testing</h3>
                            <p className="text-muted-smoke">
                                Rigorous quality assurance ensures every aspect functions flawlessly across devices and browsers. I conduct comprehensive testing to identify and resolve any issues before launch.
                            </p>
                        </FadeInSection>

                        <FadeInSection className="relative pl-12" delay={0.5}>
                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-muted-sage flex items-center justify-center text-deep-olive font-bold">
                                6
                            </div>
                            <h3 className="text-xl font-serif text-clean-white mb-4">Launch & Support</h3>
                            <p className="text-muted-smoke">
                                A smooth deployment followed by ongoing support to ensure your digital product continues to evolve and perform optimally. I provide training, documentation, and maintenance as needed.
                            </p>
                        </FadeInSection>
                    </div>
                </div>
            </section>

            {/*service details*/}
            <section className="py-20 bg-gradient-to-b from-midnight-green-d to-everblack">
                <div className="container mx-auto px-4">
                    {services.map((service, index) => (
                        <FadeInSection
                            key={service.id}
                            className="mb-20 last:mb-0"
                            delay={index * 0.1}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                                <div className="md:col-span-4">
                                    <div className="mb-6 w-12 h-12 rounded-full bg-muted-sage/10 flex items-center justify-center text-muted-sage">
                                        <service.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-serif text-clean-white mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-smoke/80 mb-6">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="md:col-span-8">
                                    <div className="bg-gradient-to-r from-midnight-green-d via-midnight-green-d to-everblack/80 p-8 rounded-lg border border-deep-fern">
                                        <h4 className="text-lg font-medium text-muted-sage mb-6">Key Features</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-sage-hover mr-2 mt-1">•</span>
                                                    <span className="text-muted-smoke">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </section>

            {/*CTA*/}
            <section className="py-20 bg-everblack relative overflow-hidden">
                <div className="absolute inset-0 hero-gradient-3" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <FadeInSection>
                            <h2 className="text-3xl md:text-4xl font-serif text-clean-white mb-6">
                                Ready to Discuss Your Project?
                            </h2>
                            <p className="text-muted-smoke text-lg mb-10 max-w-2xl mx-auto">
                                Let's schedule a consultation to explore how I can help bring your vision to life with tailored solutions that meet your specific needs.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Schedule a Consultation
                                </Link>
                            </Button>
                        </FadeInSection>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Services
