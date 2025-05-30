"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
    text: string;
    className?: string;
    once?: boolean;
}

export function AnimatedText({
                                 text,
                                 className,
                                 once = true,
                             }: AnimatedTextProps) {
    const words = text.split(" ");

    // Variants for Container of words
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    // Variants for each word
    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className={cn("overflow-hidden flex flex-wrap justify-center", className)}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className="mr-2 mt-1"
                    variants={child}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}