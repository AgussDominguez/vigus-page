"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import Button from "@/components/atoms/Button";
import SkeletonLoader from "@/components/atoms/SkeletonLoader";
import Link from "next/link";

interface ProductCardProps {
    product: any; // Using any as the interface is evolving from sheets
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="group"
        >
            <Link href={`/productos/${product.id}`} className="block">
                <div
                    className="relative overflow-hidden rounded-lg bg-gray-100"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Image Container */}
                    <div className="relative aspect-[4/5] w-full">
                        {isLoading && (
                            <div className="absolute inset-0">
                                <SkeletonLoader variant="image" />
                            </div>
                        )}

                        {/* Primary Image */}
                        <Image
                            src={product.images.primary}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className={cn(
                                "object-cover transition-opacity duration-500",
                                isLoading ? "opacity-0" : "opacity-100",
                                isHovered ? "opacity-0" : "opacity-100"
                            )}
                            onLoad={() => setIsLoading(false)}
                        />

                        {/* Hover Image */}
                        <Image
                            src={product.images.hover}
                            alt={`${product.name} - hover`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className={cn(
                                "object-cover transition-opacity duration-500",
                                isHovered ? "opacity-100" : "opacity-0"
                            )}
                        />
                    </div>

                    {/* Overlay Button (visual only) */}
                    <div
                        className={cn(
                            "absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300",
                            isHovered ? "opacity-100" : "opacity-0"
                        )}
                    >
                        <div className="px-6 py-2 bg-white text-black rounded-md font-medium text-sm">
                            Ver Detalles
                        </div>
                    </div>
                </div>

                {/* Product Info */}
                <div className="mt-4 space-y-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-black">{product.name}</h3>
                        {product.price && product.price > 0 && (
                            <p className="text-lg font-bold text-[#2f3c3b]">
                                ${new Intl.NumberFormat('es-AR').format(product.price)}
                            </p>
                        )}
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-1">{product.description}</p>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;
