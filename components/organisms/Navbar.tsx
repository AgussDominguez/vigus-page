"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/atoms/Logo";
import NavLink from "@/components/molecules/NavLink";
import MobileMenuToggle from "@/components/molecules/MobileMenuToggle";
import { NAV_LINKS, COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";
import { hexToRgba } from "@/lib/utils/colors";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isScrolledSmall, setIsScrolledSmall] = useState(false);
    const [isPastHero, setIsPastHero] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolledSmall(scrollY > 20);

            // Primary color text only when past hero (~100vh)
            setIsPastHero(scrollY > window.innerHeight * 0.85);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const showBackground = !isHome || isScrolledSmall;
    const usePrimaryText = isPastHero || !isHome;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                showBackground ? "backdrop-blur-md shadow-sm" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="hover:opacity-80 transition-opacity">
                        <Logo size="md" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                variant={usePrimaryText ? "dark" : "light"}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <MobileMenuToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            variant={usePrimaryText ? "dark" : "light"}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                            "md:hidden transition-all duration-300",
                            showBackground && "backdrop-blur-md"
                        )}
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {NAV_LINKS.map((link) => (
                                <NavLink
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className="text-lg"
                                    variant={usePrimaryText ? "dark" : "light"}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
