"use client"

import { motion } from "framer-motion";
import {AnimatedText} from "@/components/ui/animated-text";
import {FadeInSection} from "@/components/ui/fade-in-section";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {SectionHeading} from "@/components/ui/section-heading";
import { projects, services, testimonials } from "@/lib/data";
import {ProjectCard} from "@/components/ui/project-card";
import { ArrowRight } from "lucide-react";
import {ServiceCard} from "@/components/ui/service-card";



const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/*hero section*/}
            <section className="relative min-h-screen flex items-center">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 hero-gradient-1"></div>
                    {/*<div className="absolute inset-0 hero-gradient-2"></div>*/}
                </div>

                <div className="bg-ricontainer mx-auto px-4 pt-20 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                        >
                            <span className="text-moss-gray uppercase tracking-wider text-sm font-medium">
                                Full-Stack Developer
                            </span>
                        </motion.div>

                        <div className="mb-8">
                            <AnimatedText
                                text="Hello there, its Thimira Navodana"
                                className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight text-clean-white"
                            />
                        </div>

                        <FadeInSection
                            delay={0.5}
                            className="mb-10"
                        >
                            <p className="text-lg md:text-xl text-muted-smoke max-w-5xl mx-auto">
                                Elevating digital presence through sophisticated design and
                                cutting-edge development for discerning clients and luxury brands.
                            </p>
                        </FadeInSection>

                        <FadeInSection
                            delay={0.7}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Button size="lg">
                                <Link href="/portfolio">
                                    View Portfolio
                                </Link>
                            </Button>

                            <Button variant="outline" size="lg" className="hover:bg-muted-sage hover:text-deep-olive">
                                <Link href="/contact">
                                    {`Let's Work Together`}
                                </Link>
                            </Button>
                        </FadeInSection>
                    </div>
                </div>

                {/*scroll indicator*/}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                    <motion.div
                    animate={{ y: [0, 10,0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="sm:w-6 sm:h-10 sm:rounded-full sm:border-2 sm:border-white/40 sm:flex sm:justify-center sm:pt-2"
                    >
                        <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="sm:w-1 sm:h-1 sm:rounded-full sm:bg-white"
                        />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10,0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="block sm:hidden text-warm-gray text-sm"
                    >
                        <p>scroll-up</p>
                    </motion.div>
                </div>
            </section>

            {/*featured projects section*/}
            <section className="py-20 bg-gradient-to-b from-midnight-green to-everblack">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Featured Projects"
                        subtitle="A showcase of selected works spanning various industries and creative challenges."
                        align="center" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button variant="outline" size="lg" className="hover:bg-muted-sage hover:text-deep-olive">
                            <Link
                                href="/portfolio"
                                className="flex items-center"
                            >
                                <span>View All Projects</span>
                                <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/*services section*/}
            <section className="py-20 bg-everblack">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Services"
                        subtitle="Comprehensive creative and technical solutions tailored to your unique needs."
                        align="center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.slice(0, 3).map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                icon={<service.icon size={24} />}
                                title={service.title}
                                description={service.description}
                                index={index}
                            />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button variant="outline" size="lg" className="hover:bg-muted-sage hover:text-deep-olive">
                            <Link
                                href="/services"
                                className="flex items-center"
                            >
                                <span>All Services</span>
                                <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/*testimonials section*/}
            <section className="py-20 bg-midnight-green-d">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Client Testimonials"
                        subtitle="Feedback from partners who trusted us with their vision"
                        align="center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <FadeInSection
                                key={testimonial.id}
                                delay={index * 0.1}
                                className="bg-everblack p-8 rounded-lg border border-midnight-green"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <img
                                            src={testimonial.imageUrl}
                                            alt={testimonial.name}
                                            className="absolute inset-0 w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-clean-white font-medium">{testimonial.name}</h4>
                                        <p className="text-muted-sage text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-muted-smoke italic">"{testimonial.content}"</p>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/*CTA*/}
            <section className="py-20 bg-midnight-green-d/30 relative overflow-hidden">
                <div className="absolute inset-0 hero-gradient-2" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <FadeInSection>
                            <h2 className="text-3xl md:text-4xl font-serif text-clean-white mb-6">
                                Ready to Elevate Your Digital Presence?
                            </h2>
                            <p className="text-muted-smoke text-lg mb-10 max-w-2xl mx-auto">
                                Let's collaborate to create something extraordinary that captures your vision and exceeds expectations.
                            </p>
                            <Button size="lg" className="hover:bg-muted-sage hover:text-deep-olive">
                                <Link href="/contact">
                                    Start a Conversation
                                </Link>
                            </Button>
                        </FadeInSection>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home
