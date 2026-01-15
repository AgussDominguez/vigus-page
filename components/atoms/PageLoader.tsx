"use client";

import React from "react";
import { motion } from "framer-motion";
import Logo from "@/components/atoms/Logo";
import { COLORS } from "@/lib/constants";

const PageLoader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
            <div className="flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0.4, 1, 0.4],
                        scale: [0.95, 1, 0.95]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Logo size="lg" className="color-current" style={{ color: COLORS.primary }} />
                </motion.div>
                <motion.div
                    className="mt-8 h-1 w-48 bg-gray-100 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.div
                        className="h-full"
                        style={{ backgroundColor: COLORS.primary }}
                        animate={{
                            x: [-200, 200]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default PageLoader;
