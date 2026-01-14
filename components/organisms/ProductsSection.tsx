"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/molecules/ProductCard";
import { PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

const CATEGORIES = [
    { id: "remeras", label: "Remeras" },
    { id: "buzos", label: "Buzos" },
    { id: "pantalones", label: "Pantalones" },
    { id: "gorras", label: "Gorras" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

const ProductsSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<CategoryId>("remeras");

    const filteredProducts = PRODUCTS.filter(
        (product) => product.category === activeCategory
    );

    return (
        <section id="productos" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={cn(
                                "px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 border",
                                activeCategory === category.id
                                    ? "bg-[#2f3c3b] text-white border-[#2f3c3b]"
                                    : "bg-transparent text-gray-500 border-gray-200 hover:border-[#2f3c3b] hover:text-[#2f3c3b]"
                            )}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsSection;
