import React from "react";
import Image from "next/image";
import { BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
    size?: "sm" | "md" | "lg";
    className?: string;
    style?: React.CSSProperties;
}

const Logo: React.FC<LogoProps> = ({ size = "md", className, style }) => {
    const dimensions = {
        sm: { width: 40, height: 40 },
        md: { width: 56, height: 56 },
        lg: { width: 80, height: 80 },
    };

    return (
        <div
            className={cn("relative flex items-center justify-center", className)}
            style={style}
        >
            <Image
                src={BRAND.logo}
                alt={BRAND.name}
                width={dimensions[size].width}
                height={dimensions[size].height}
                className="object-contain"
                priority
            />
        </div>
    );
};

export default Logo;
