"use client";

import CategoryTab from "@/components/molecules/CategoryTab";
import ProductCard from "@/components/molecules/ProductCard";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import { useProducts } from "@/hooks/useProducts";
import { COLORS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function CatalogContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category") || "";
    const { products, isLoading } = useProducts();
    const [activeCategory, setActiveCategory] = useState(initialCategory);

    // Derive unique categories from products
    const dynamicCategories = Array.from(new Set(products.map(p => p.category)))
        .filter(Boolean)
        .map(cat => ({
            id: cat,
            label: cat.charAt(0).toUpperCase() + cat.slice(1)
        }));

    useEffect(() => {
        if (!activeCategory && dynamicCategories.length > 0) {
            setActiveCategory(dynamicCategories[0].id);
        }
    }, [dynamicCategories, activeCategory]);

    useEffect(() => {
        const cat = searchParams.get("category");
        if (cat) setActiveCategory(cat);
    }, [searchParams]);

    const filteredProducts = activeCategory
        ? products.filter(p => p.category === activeCategory)
        : products;

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-24 container mx-auto px-4">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center hover:opacity-70 mb-12 transition-colors group"
                    style={{ color: COLORS.primary }}
                >
                    <ChevronLeft
                        style={{ color: COLORS.primary }}
                        className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                    Volver
                </button>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Catálogo Completo</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explorá nuestra amplia gama de equipos, accesorios y servicios.
                    </p>
                </div>

                {/* Dynamic Filters */}
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

                {/* Grid */}
                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                            <div key={i} className="aspect-[4/5] bg-gray-100 animate-pulse rounded-lg" />
                        ))}
                    </div>
                ) : (
                    <div className="min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
                            >
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className="w-full">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
}

export default function CatalogPage() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <CatalogContent />
        </Suspense>
    );
}
