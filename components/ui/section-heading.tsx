import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center" | "right";
}

export function SectionHeading({
                                   title,
                                   subtitle,
                                   className,
                                   align = "left",
                               }: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-12",
                {
                    "text-left": align === "left",
                    "text-center": align === "center",
                    "text-right": align === "right",
                },
                className
            )}
        >
            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-clean-white mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-muted-smoke max-w-3xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}