"use client";

import ProductCard from "@/components/molecules/ProductCard";
import { cn } from "@/lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { useProducts } from "@/hooks/useProducts";

const ProductsSection: React.FC = () => {
    const { products } = useProducts();
    const [activeCategory, setActiveCategory] = useState<string>("");

    useEffect(() => {
        if (products.length > 0 && !activeCategory) {
            setActiveCategory(products[0].category);
        }
    }, [products, activeCategory]);

    // Derive unique categories from products
    const dynamicCategories = Array.from(new Set(products.map(p => p.category)))
        .filter(Boolean)
        .map(cat => ({
            id: cat,
            label: cat.charAt(0).toUpperCase() + cat.slice(1)
        }));

    const filteredProducts = products.filter(
        (product) => product.category === activeCategory
    );

    return (
        <section id="productos" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {dynamicCategories.map((category) => (
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

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 overflow-x-auto md:overflow-x-visible pb-8 snap-x snap-mandatory scrollbar-hide"
                        >
                            {filteredProducts.slice(0, 4).map((product) => (
                                <div
                                    key={product.id}
                                    className="min-w-[85vw] md:min-w-0 snap-center"
                                >
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {filteredProducts.length > 4 && (
                    <div className="mt-16 flex justify-center">
                        <motion.a
                            href={`/productos?category=${activeCategory}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="px-10 py-4 border-2 border-[#2f3c3b] text-[#2f3c3b] rounded-full font-semibold hover:bg-[#2f3c3b] hover:text-white transition-all duration-300"
                        >
                            Ver más {activeCategory}
                        </motion.a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductsSection;
