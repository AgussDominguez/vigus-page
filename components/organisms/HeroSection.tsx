"use client";

import Button from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Typography";
import { BRAND } from "@/lib/constants";
import { handleNavClick } from "@/lib/utils/smooth-scroll";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden"
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
        </section>
    );
};

export default HeroSection;
