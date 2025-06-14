"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { Send } from "lucide-react";

export function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    return (
        <FadeInSection className="w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent text-white"
                            placeholder="Your name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent text-white"
                            placeholder="Your email"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                        Subject
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent text-white appearance-none"
                    >
                        <option value="" disabled>Select a subject</option>
                        <option value="Project Inquiry">Project Inquiry</option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="Job Opportunity">Job Opportunity</option>
                        <option value="General Question">General Question</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        value={formState.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent text-white resize-none"
                        placeholder="Tell me about your project..."
                    />
                </div>

                <div className="flex justify-end">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center"
                    >
                        {isSubmitting ? (
                            <span className="mr-2">Sending...</span>
                        ) : (
                            <>
                                <span className="mr-2">Send Message</span>
                                <Send size={16} />
                            </>
                        )}
                    </Button>
                </div>

                {isSubmitted && (
                    <div className="p-4 bg-accent-gold/10 border border-accent-gold rounded-md text-white">
                        Thank you! Your message has been sent successfully.
                    </div>
                )}
            </form>
        </FadeInSection>
    );
}