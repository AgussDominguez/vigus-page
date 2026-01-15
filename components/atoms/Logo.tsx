import React from "react";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
    size?: "sm" | "md" | "lg";
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = "md", className }) => {
    const sizes = {
        sm: "text-xl",
        md: "text-2xl",
        lg: "text-3xl",
    };

    return (
        <div className={cn("font-bold tracking-tighter text-white", sizes[size], className)}>
            <span>SEMA</span>
        </div>
    );
};

export default Logo;
