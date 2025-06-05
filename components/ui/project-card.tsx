"use client";

import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
    id: string;
    title: string;
    category: string;
    description: string;
    imageUrl: string | StaticImageData;
    slug: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg bg-everblack"
        >
            <Link href={`/portfolio/${project.slug}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-deep-fern/30 via-midnight-green/70 to-everblack/80" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-muted-sage text-sm font-medium mb-2">
                                {project.category}
                            </p>
                            <h3 className="text-xl font-serif text-clean-white mb-1 group-hover:text-muted-sage transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-muted-smoke text-sm max-w-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                {project.description}
                            </p>
                        </div>
                        <span className="w-10 h-9 rounded-full bg-muted-sage text-everblack flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowUpRight size={18} />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}