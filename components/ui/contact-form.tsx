"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    useEffect(() => {
        // Validate form when fields are touched
        const newErrors: Record<string, string> = {};

        if (touched.name && !formState.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (touched.email) {
            if (!formState.email.trim()) {
                newErrors.email = "Email is required";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
                newErrors.email = "Please enter a valid email";
            }
        }

        if (touched.subject && !formState.subject) {
            newErrors.subject = "Please select a subject";
        }

        if (touched.message && !formState.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
    }, [formState, touched]);

    const handleBlur = (field: string) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Mark all fields as touched to show errors
        setTouched({
            name: true,
            email: true,
            subject: true,
            message: true,
        });

        // Check for errors
        if (Object.keys(errors).length > 0) return;

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setIsSubmitted(true);
            setFormState({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
            setTouched({});
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <FadeInSection className="w-full max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-muted-sage">
                            Name *
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formState.name}
                            onChange={handleChange}
                            onBlur={() => handleBlur("name")}
                            className={`w-full px-4 py-3 bg-midnight-green border ${errors.name ? "border-rose-600" : "border-deep-fern"} rounded-md focus:outline-none focus:ring-2 focus:ring-sage-hover focus:border-transparent text-soft-mint transition-colors`}
                            placeholder="Your name"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                            <motion.p
                                id="name-error"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm text-rose-500"
                            >
                                {errors.name}
                            </motion.p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-muted-sage">
                            Email *
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            onBlur={() => handleBlur("email")}
                            className={`w-full px-4 py-3 bg-midnight-green border ${errors.email ? "border-rose-600" : "border-deep-fern"} rounded-md focus:outline-none focus:ring-2 focus:ring-sage-hover focus:border-transparent text-soft-mint transition-colors`}
                            placeholder="your.email@example.com"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                            <motion.p
                                id="email-error"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm text-rose-500"
                            >
                                {errors.email}
                            </motion.p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-muted-sage">
                        Subject *
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        onBlur={() => handleBlur("subject")}
                        className={`w-full px-4 py-3 bg-midnight-green border ${errors.subject ? "border-rose-600" : "border-deep-fern"} rounded-md focus:outline-none focus:ring-2 focus:ring-sage-hover focus:border-transparent text-soft-mint appearance-none transition-colors`}
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? "subject-error" : undefined}
                    >
                        <option value="" disabled className="text-soft-mint/50">Select a subject</option>
                        <option value="Project Inquiry">Project Inquiry</option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="Job Opportunity">Job Opportunity</option>
                        <option value="General Question">General Question</option>
                    </select>
                    {errors.subject && (
                        <motion.p
                            id="subject-error"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-rose-500"
                        >
                            {errors.subject}
                        </motion.p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-muted-sage">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onBlur={() => handleBlur("message")}
                        rows={6}
                        className={`w-full px-4 py-3 bg-midnight-green border ${errors.message ? "border-rose-600" : "border-deep-fern"} rounded-md focus:outline-none focus:ring-2 focus:ring-sage-hover focus:border-transparent text-soft-mint resize-none transition-colors`}
                        placeholder="Tell me about your project..."
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                        <motion.p
                            id="message-error"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-rose-500"
                        >
                            {errors.message}
                        </motion.p>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-smoke">
                        * Required fields
                    </p>
                    <Button
                        type="submit"
                        disabled={isSubmitting || isSubmitted}
                        className="flex items-center gap-2 min-w-[180px]"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <span>Sending...</span>
                            </>
                        ) : isSubmitted ? (
                            <>
                                <CheckCircle className="h-4 w-4" />
                                <span>Sent!</span>
                            </>
                        ) : (
                            <>
                                <span>Send Message</span>
                                <Send size={16} />
                            </>
                        )}
                    </Button>
                </div>

                {isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-muted-smoke/10 border border-sage-hover rounded-md text-sage-hover flex items-center gap-2"
                    >
                        <CheckCircle className="h-5 w-5 text-sage-hover" />
                        <p>Thank you! Your message has been sent successfully. I'll get back to you soon.</p>
                    </motion.div>
                )}
            </form>
        </FadeInSection>
    );
}