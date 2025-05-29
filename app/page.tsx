"use client"

import { motion } from "framer-motion";
import {AnimatedText} from "@/components/ui/animated-text";
import {FadeInSection} from "@/components/ui/fade-in-section";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
    return (
        <div>
            {/*hero section*/}
            <section>
                <div></div>

                <div className="container mx-auto px-4 pt-20 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                        >
                            <span className="text-yellow-600 uppercase tracking-wider text-sm font-medium">
                                Full-Stack Developer
                            </span>
                        </motion.div>

                        <div className="mb-8">
                            <AnimatedText
                                text="Hello there, its Thimira Navodana"
                                className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight text-white/80"
                            />
                        </div>

                        <FadeInSection
                            delay={0.5}
                            className="mb-10"
                        >
                            <p className="text-lg md:text-xl text-gray-400 max-w-5xl mx-auto">
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

                            <Button variant="outline" size="lg">
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
                        className="block sm:hidden text-white text-sm"
                    >
                        <p className="">scroll-up</p>
                    </motion.div>
                </div>
            </section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
        </div>
    )
}
export default Home
