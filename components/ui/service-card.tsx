"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
    index?: number;
}

export function ServiceCard({
                                icon,
                                title,
                                description,
                                className,
                                index = 0,
                            }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={cn(
                "group bg-gradient-to-br from-midnight-green to-everblack p-8 rounded-lg border border-deep-fern hover:border-moss-gray/90 transition-all duration-300",
                className
            )}
        >
            <div className="mb-6 w-12 h-12 rounded-full bg-muted-sage/10 flex items-center justify-center text-muted-sage">
                {icon}
            </div>
            <h3 className="text-xl font-serif text-clean-white mb-4 group-hover:text-muted-sage transition-colors">
                {title}
            </h3>
            <p className="text-muted-smoke/80 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}