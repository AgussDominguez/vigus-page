"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading, Text } from "@/components/atoms/Typography";
import { BRAND } from "@/lib/constants";

const AboutSection: React.FC = () => {
    return (
        <section id="nosotros" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <Heading as="h2" variant="title" className="mb-6">
                        Sobre nosotros
                    </Heading>
                    <Text variant="body" className="mb-8 text-gray-700">
                        {BRAND.description}
                    </Text>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Text variant="body" className="text-gray-600 leading-relaxed">
                            {BRAND.fullDescription}
                        </Text>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
