"use client"

import { motion } from "framer-motion";

const Home = () => {
    return (
        <div>
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
                                Thimira Navodana
                            </span>
                        </motion.div>
                    </div>
                </div>

                <div></div>
            </section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
        </div>
    )
}
export default Home
