import React from "react";
import { cn } from "@/lib/utils/cn";

interface SkeletonLoaderProps {
    className?: string;
    variant?: "text" | "image" | "card";
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
    className,
    variant = "image",
}) => {
    const variants = {
        text: "h-4 w-full rounded",
        image: "w-full aspect-[4/5] rounded-lg",
        card: "w-full h-96 rounded-lg",
    };

    return (
        <div
            className={cn(
                "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]",
                variants[variant],
                className
            )}
            style={{
                animation: "shimmer 2s infinite",
            }}
        />
    );
};

export default SkeletonLoader;
