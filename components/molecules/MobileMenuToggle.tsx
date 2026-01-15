"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface MobileMenuToggleProps {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({
    isOpen,
    onClick,
    className,
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md hover:bg-white/10 transition-colors",
                className
            )}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
        >
            <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="h-0.5 w-6 bg-white"
            />
            <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="h-0.5 w-6 bg-white"
            />
            <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="h-0.5 w-6 bg-white"
            />
        </button>
    );
};

export default MobileMenuToggle;
