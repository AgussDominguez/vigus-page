"use client";

import CategoryTab from "@/components/molecules/CategoryTab";
import ProductCard from "@/components/molecules/ProductCard";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { useProducts } from "@/hooks/useProducts";
import { COLORS } from "@/lib/constants";

const ProductsSection: React.FC = () => {
    const { products, isLoading } = useProducts();
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
                        <CategoryTab
                            key={category.id}
                            id={category.id}
                            label={category.label}
                            isActive={activeCategory === category.id}
                            onClick={() => setActiveCategory(category.id)}
                        />
                    ))}
                </div>

                <div className="relative">
                    {isLoading ? (
                        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 overflow-hidden">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="min-w-[85vw] md:min-w-0 aspect-[4/5] bg-gray-100 animate-pulse rounded-lg" />
                            ))}
                        </div>
                    ) : (
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
                    )}
                </div>

                {filteredProducts.length > 4 && (
                    <div className="mt-16 flex justify-center">
                        <motion.a
                            href={`/productos?category=${activeCategory}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="px-10 py-4 border-2 rounded-full font-semibold transition-all duration-300"
                            style={{
                                borderColor: COLORS.primary,
                                color: COLORS.primary
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = COLORS.primary;
                                e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = COLORS.primary;
                            }}
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
