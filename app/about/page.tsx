"use client";

import ME from "@/public/me.jpg";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { AnimatedText } from "@/components/ui/animated-text";
import { skills, workExperience } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start start", "end center"]
    });

    // Transform scroll progress to height percentage
    const timelineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

    return (
        <div className="pt-20">
            {/*hero section*/}
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
                            About
                          </span>
                        </motion.div>
                        <AnimatedText
                            text="The Creative Mind Behind the Experience"
                            className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-clean-white mb-10"
                        />
                    </div>
                </div>
            </section>

            {/*about me section*/}
            <section className="py-20 bg-gradient-to-b from-everblack to-midnight-green-d">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        <FadeInSection className="order-2 md:order-1">
                            <h2 className="text-3xl font-serif text-clean-white mb-6">
                                Passionate about <span className="text-muted-sage">creating exceptional</span> digital experiences
                            </h2>
                            <div className="space-y-4 text-muted-smoke">
                                <p>
                                    With over a decade of experience in design and development, I specialize in creating sophisticated
                                    digital solutions for luxury brands and discerning clients who demand excellence.
                                </p>
                                <p>
                                    My approach combines strategic thinking with meticulous attention to detail, ensuring every project not only meets
                                    but exceeds expectations. I believe that truly exceptional work emerges from the perfect balance of aesthetics and functionality.
                                </p>
                                <p>
                                    Throughout my career, I've collaborated with innovative startups, established luxury brands, and forward-thinking agencies
                                    to create digital experiences that leave lasting impressions.
                                </p>
                            </div>
                        </FadeInSection>

                        <FadeInSection direction="right" className="order-1 md:order-2">
                            <div className="relative aspect-square overflow-hidden rounded-lg">
                                <Image
                                    // src="https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    src={ME}
                                    alt="Professional portrait"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-everblack/60 via-transparent to-transparent" />
                            </div>
                        </FadeInSection>

                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="py-20 bg-everblack" ref={timelineRef}>
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Professional Journey"
                        subtitle="A timeline of key experiences that have shaped my career and expertise."
                        align="center"
                    />

                    <div className="py-10 relative ml-4 md:ml-8 pl-8 space-y-12">
                        {/* Static background line */}
                        <div className="absolute left-0 top-0 w-0.5 h-full bg-forest-base"></div>

                        {/* Animated progress line */}
                        <motion.div
                            className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-muted-sage/20 via-muted-sage/40 to-muted-sage/80 origin-top"
                            style={{ height: timelineHeight }}
                        />

                        {workExperience.map((experience, index) => {
                            const itemRef = useRef(null);
                            const { scrollYProgress: itemProgress } = useScroll({
                                target: itemRef,
                                offset: ["start center", "center center"]
                            });

                            const dotScale = useTransform(itemProgress, [0, 1], [0.8, 1.2]);
                            const dotOpacity = useTransform(itemProgress, [0, 0.5, 1], [0.5, 1, 1]);

                            return (
                                <FadeInSection key={experience.id} delay={index * 0.1}>
                                    <div className="relative" ref={itemRef}>
                                        {/* Animated dot */}
                                        <motion.div
                                            className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-muted-sage shadow-lg shadow-muted-sage/50"
                                            style={{
                                                scale: dotScale,
                                                opacity: dotOpacity
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />

                                        {/* Pulse effect for active dot */}
                                        <motion.div
                                            className="absolute -left-12 -top-2 w-8 h-8 rounded-full bg-muted-sage/20 border border-muted-sage/40"
                                            style={{ opacity: useTransform(itemProgress, [0.3, 0.7], [0, 1]) }}
                                            animate={{
                                                scale: [1, 1.2, 1],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />

                                        <div>
                                            <span className="text-muted-sage text-sm font-medium">
                                                {experience.period}
                                            </span>
                                            <h3 className="text-clean-white text-xl font-serif mt-1 mb-2">
                                                {experience.role}
                                            </h3>
                                            <h4 className="text-sage-hover mb-4">{experience.company}</h4>
                                            <p className="text-muted-smoke mb-4">{experience.description}</p>
                                            <ul className="space-y-2">
                                                {experience.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-muted-sage flex items-start">
                                                        <span className="text-sage-hover mr-2">•</span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </FadeInSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/*skills section*/}
            <section className="py-20 bg-gradient-to-b from-midnight-green-d to-everblack">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Skills & Expertise"
                        subtitle="Specialized capabilities refined through years of professional practice."
                        align="center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {skills.map((skillGroup, index) => (
                            <FadeInSection
                                key={skillGroup.category}
                                delay={index * 0.1}
                                className="bg-everblack p-8 rounded-lg border border-deep-fern"
                            >
                                <h3 className="text-xl font-serif text-clean-white mb-6">{skillGroup.category}</h3>
                                <ul className="space-y-3">
                                    {skillGroup.items.map((skill, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="w-2 h-2 bg-moss-gray rounded-full mr-3"></span>
                                            <span className="text-muted-smoke">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Personal Philosophy */}
            <section className="py-20 bgeverblack relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-deep-fern/20 via-transparent to-transparent blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <FadeInSection>
                            <h2 className="text-3xl font-serif text-clean-white mb-8">My Philosophy</h2>
                            <blockquote className="text-xl text-muted-smoke italic mb-6">
                                "Design is not just what it looks like and feels like. Design is how it works."
                            </blockquote>
                            <p className="text-moss-gray">
                                I believe that exceptional digital experiences emerge from the perfect balance of aesthetics, functionality, and performance. Every pixel matters, every interaction counts, and every second of load time is crucial. This holistic approach ensures that the final product not only looks beautiful but also delivers results.
                            </p>
                        </FadeInSection>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About