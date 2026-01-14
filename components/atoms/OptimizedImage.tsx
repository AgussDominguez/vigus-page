"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import SkeletonLoader from "./SkeletonLoader";

interface OptimizedImageProps {
    src: string;
    alt: string;
    priority?: boolean;
    className?: string;
    fill?: boolean;
    sizes?: string;
    width?: number;
    height?: number;
    objectFit?: "cover" | "contain";
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    priority = false,
    className,
    fill = false,
    sizes,
    width,
    height,
    objectFit = "cover",
}) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={cn("relative overflow-hidden", className)}>
            {isLoading && (
                <div className="absolute inset-0">
                    <SkeletonLoader variant="image" />
                </div>
            )}
            <Image
                src={src}
                alt={alt}
                fill={fill}
                width={width}
                height={height}
                sizes={sizes}
                priority={priority}
                className={cn(
                    "transition-opacity duration-300",
                    isLoading ? "opacity-0" : "opacity-100",
                    objectFit === "cover" ? "object-cover" : "object-contain"
                )}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    );
};

export default OptimizedImage;
