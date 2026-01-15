"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

const WhatsAppButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling 300px
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        const encodedMessage = encodeURIComponent(CONTACT.whatsapp.defaultMessage);
        const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={handleClick}
                    className={cn(
                        "fixed bottom-6 right-6 z-50",
                        "flex h-14 w-14 items-center justify-center",
                        "rounded-full bg-green-500 text-white shadow-2xl",
                        "transition-all duration-300 hover:scale-110 hover:bg-green-600",
                        "focus:outline-none focus:ring-4 focus:ring-green-500/50"
                    )}
                    aria-label="Contactar por WhatsApp"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <MessageCircle className="h-7 w-7" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppButton;
