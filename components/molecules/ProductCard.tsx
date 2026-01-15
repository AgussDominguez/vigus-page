"use client";

import SkeletonLoader from "@/components/atoms/SkeletonLoader";
import { COLORS, BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ProductCardProps {
    product: any; // Using any as the interface is evolving from sheets
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // State to handle image loading errors
    const [imgSrc, setImgSrc] = useState(product.images?.primary || BRAND.placeholderImage);
    const [hoverImgSrc, setHoverImgSrc] = useState(product.images?.hover || null);

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
                            src={imgSrc}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className={cn(
                                "object-cover transition-opacity duration-500",
                                isLoading ? "opacity-0" : "opacity-100",
                                (isHovered && hoverImgSrc) ? "opacity-0" : "opacity-100"
                            )}
                            onLoad={() => setIsLoading(false)}
                            onError={() => setImgSrc(BRAND.placeholderImage)}
                        />

                        {hoverImgSrc && (
                            <Image
                                src={hoverImgSrc}
                                alt={`${product.name} - hover`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={cn(
                                    "object-cover transition-opacity duration-500",
                                    isHovered ? "opacity-100" : "opacity-0"
                                )}
                                onError={() => setHoverImgSrc(null)} // If hover fails, just don't show it
                            />
                        )}
                    </div>

                    {/* Overlay Button (visual only) */}
                    <div
                        className={cn(
                            "absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px] transition-opacity duration-300",
                            isHovered ? "opacity-100" : "opacity-0"
                        )}
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 rounded-full font-bold text-sm shadow-xl"
                            style={{
                                backgroundColor: COLORS.textOnPrimary,
                                color: COLORS.secondary
                            }}
                        >
                            Ver Detalles
                        </motion.div>
                    </div>
                </div>

                {/* Product Info */}
                <div className="mt-4 space-y-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-black">{product.name}</h3>
                        {product.price && product.price > 0 && (
                            <p
                                className="text-lg font-bold"
                                style={{ color: COLORS.primary }}
                            >
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
