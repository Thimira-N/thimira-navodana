import { projects } from "@/lib/data";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { Button } from "@/components/ui/button";
import {ArrowLeft, Calendar, User, Tag, Clock, ExternalLink, Github, Figma} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { notFound } from "next/navigation";
import {ProjectCard} from "@/components/ui/project-card";
import type { PageProps } from 'next'


interface Props extends PageProps {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export const dynamicParams = false;

const Project = ({ params }: Props) => {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    // Related projects - excluding current project, limiting to 3
    const relatedProjects = useMemo(() => {
        return projects
            .filter((p) => p.id !== project.id)
            .slice(0, 3);
    }, [project]);


    return (
        <div className="pt-20">
            {/*hero*/}
            <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="100vw"
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-everblack/70 via-everblack/60 to-everblack" />
                </div>

                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                    <div className="max-w-3xl">
                        <Link href="/portfolio" className="inline-flex items-center text-muted-sage hover:text-soft-mint mb-6 transition-colors">
                            <ArrowLeft size={16} className="mr-2" />
                            <span>Back to Portfolio</span>
                        </Link>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-clean-white mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl font-medium text-muted-sage mb-8 max-w-2xl">
                            {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-6 text-sm">
                            <div className="flex items-center bg-muted-sage px-2.5 p-1.5 rounded-2xl text-deep-olive font-bold">
                                <Calendar size={16} className="mr-2 text-deep-olive" />
                                <span>{project.year}</span>
                            </div>
                            <div className="flex items-center bg-muted-sage px-2.5 p-1.5 rounded-2xl text-deep-olive font-bold">
                                <User size={16} className="mr-2 text-accent-gold" />
                                <span>{project.client}</span>
                            </div>
                            <div className="flex items-center bg-muted-sage px-2.5 p-1.5 rounded-2xl text-deep-olive font-bold">
                                <Tag size={16} className="mr-2 text-accent-gold" />
                                <span>{project.category}</span>
                            </div>
                            <div className="flex items-center bg-muted-sage px-2.5 p-1.5 rounded-2xl text-deep-olive font-bold">
                                <Clock size={16} className="mr-2 text-accent-gold" />
                                <span>{project.duration}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*project details*/}
            <section className="py-20 bg-everblack">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/*project overview and challenge (left side)*/}
                        <FadeInSection className="md:col-span-2">
                            <h2 className="text-2xl font-serif text-clean-white mb-6">Project Overview</h2>
                            <div className="space-y-6 text-muted-smoke">
                                {project.overview?.map((sentence: string, index: number) => (
                                    <p key={`overview-${index}`}>{sentence}</p>
                                ))}
                            </div>

                            <div className="mt-12">
                                <h2 className="text-2xl font-serif text-clean-white mb-6">The Challenge</h2>
                                <div className="space-y-6 text-muted-smoke">
                                    {project.challenge?.map((sentence: string, index: number) => (
                                        <p key={`challenge-${index}`}>{sentence}</p>
                                    ))}
                                </div>
                            </div>
                        </FadeInSection>

                        {/*provided services, technologies used and feedback (right side)*/}
                        <FadeInSection direction="right" className="space-y-8">
                            <div>
                                <h3 className="text-lg font-medium text-clean-white mb-4">Services Provided</h3>
                                <ul className="space-y-2">
                                    {project.services?.map((service: string, index: number) => (
                                        <li key={`service-${index}`} className="flex items-start text-muted-smoke">
                                            <span className="text-moss-gray mr-2">•</span>
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-clean-white mb-4">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech: string, index: number) => (
                                        <span
                                            key={`tech-${index}`}
                                            className="px-3 py-1 bg-deep-fern text-muted-sage text-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-clean-white mb-4">Client Feedback</h3>
                                <blockquote className="border-l-2 border-moss-gray/60 pl-4 italic text-muted-sage">
                                    {project.testimonial}
                                </blockquote>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </section>

            {/*project images section*/}
            <section className="py-20 bg-gradient-to-b from-everblack to-midnight-green-d">
                <div className="container mx-auto px-4">
                    {/*first row - two column grid*/}
                    <FadeInSection className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.images?.slice(0, 2).map((image, index) => (
                            <div key={`image-${index}`} className="aspect-[4/3] relative rounded-lg overflow-hidden">
                                <Image
                                    src={image.startsWith('http') ? image : `/${image}`}
                                    alt={`Project detail ${index + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </FadeInSection>

                    {/*second row - full width image*/}
                    {project.images && project.images.length > 2 && (
                        <FadeInSection delay={0.2} className="mt-8">
                            <div className="aspect-[21/9] relative rounded-lg overflow-hidden">
                                <Image
                                    src={project.images[2].startsWith('http') ? project.images[2] : `/${project.images[2]}`}
                                    alt="Project full width"
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                />
                            </div>
                        </FadeInSection>
                    )}
                </div>
            </section>

            {/*results*/}
            <section className="py-20 bg-everblack">
                <div className="container mx-auto px-4">
                    <FadeInSection>
                        <h2 className="text-2xl font-serif text-clean-white mb-6">Results & Impact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {project.results?.map((result, index) => (
                                <div key={`result-${index}`} className="bg-gradient-to-b from-midnight-green-d via-midnight-green to-midnight-green-d border border-midnight-green p-8 rounded-lg">
                                    <p className="text-4xl font-serif text-muted-sage mb-2">{result.value}</p>
                                    <p className="text-muted-sage/80">{result.description}</p>
                                </div>
                            ))}
                        </div>

                        {/*conclusion*/}
                        <div className="space-y-6 text-muted-smoke max-w-3xl">
                            <p>
                                The redesigned platform successfully addressed the client's key challenges, resulting in significant improvements in user engagement and business metrics. The intuitive interface and streamlined user journey led to higher conversion rates and reduced bounce rates across all devices.
                            </p>
                            <p>
                                By implementing a comprehensive design system and modular architecture, we also enabled the client team to maintain and expand the platform with minimal external support, ensuring long-term sustainability and scalability.
                            </p>
                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* Project Links Section */}
            {(project.liveUrl || project.githubUrl || project.figmaUrl) && (
                <section className="py-12 bg-everblack">
                    <div className="container mx-auto px-4">
                        <FadeInSection>
                            <h2 className="text-2xl font-serif text-white mb-8">Project Links</h2>
                            <div className="flex flex-wrap gap-4">
                                {project.liveUrl && (
                                    <Button asChild variant="outline" className="hover:bg-muted-sage hover:text-deep-olive">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                    </Button>
                                )}
                                {project.githubUrl && (
                                    <Button asChild variant="outline" className="hover:bg-muted-sage hover:text-deep-olive">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2"
                                        >
                                            <Github size={16} />
                                            View Code
                                        </a>
                                    </Button>
                                )}
                                {project.figmaUrl && (
                                    <Button asChild variant="outline" className="hover:bg-muted-sage hover:text-deep-olive">
                                        <a
                                            href={project.figmaUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2"
                                        >
                                            <Figma size={16} />
                                            View Design
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </FadeInSection>
                    </div>
                </section>
            )}

            {/* Related Projects */}
            <section className="py-20 bg-gradient-to-b from-midnight-green-d to-everblack">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-serif text-clean-white mb-12">Related Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button asChild className="hover:bg-muted-sage hover:text-deep-olive">
                            <Link href="/contact">
                                Start Your Project
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Project
