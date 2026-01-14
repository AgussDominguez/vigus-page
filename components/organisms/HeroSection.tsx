"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heading, Text } from "@/components/atoms/Typography";
import Button from "@/components/atoms/Button";
import { BRAND } from "@/lib/constants";
import { handleNavClick } from "@/lib/utils/smooth-scroll";

const HeroSection: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Hero background"
                    fill
                    priority
                    className="object-cover brightness-75"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Text variant="lead" className="text-white/90 mb-2 max-w-2xl mx-auto drop-shadow-lg">
                        {BRAND.tagline}
                    </Text>
                    <Text variant="body" className="text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-lg">
                        {BRAND.subtitle}
                    </Text>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={(e) => handleNavClick(e as any, "#contacto")}
                        >
                            Hacer mi pedido
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
                >
                    <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
