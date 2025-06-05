"use client";

import { useState } from "react";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Web Development" | "Web Application" | "Mobile App" | "Web Design" | "3D Design" | "Branding";

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>("All");

    const categories: Category[] = [
        "All",
        "Web Development",
        "Web Application",
        "Mobile App",
        "Web Design",
        "3D Design",
        "Branding"
    ];

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="pt-20">
            {/*hero section*/}
            <section className="py-20 bg-everblack relative overflow-hidden">
                <div className="absolute inset-0 hero-gradiant-3" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6"
                        >
                            <span className="text-moss-gray uppercase tracking-wider text-sm font-medium">
                                Portfolio
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-clean-white mb-6"
                        >
                            Selected Works
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-muted-smoke max-w-2xl mx-auto"
                        >
                            A curated collection of projects showcasing the intersection of design innovation and technical excellence.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* filters and grid*/}
            <section className="py-20 bg-gradient-to-b from-everblack to-midnight-green-d">
                <div className="container mx-auto px-4">
                    {/*filters*/}
                    <FadeInSection className="mb-12">
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        selectedCategory === category
                                            ? "bg-muted-sage text-deep-olive"
                                            : "bg-moss-gray/50 text-gray-300 hover:bg-moss-gray"
                                    }`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </FadeInSection>

                    {/*projects grid*/}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/*for empty filter*/}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted-smoke text-lg">
                                No projects found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
export default Portfolio
