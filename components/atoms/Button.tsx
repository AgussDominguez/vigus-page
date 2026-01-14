import React from "react";
import { cn } from "@/lib/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    href?: string;
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, href, ...props }, ref) => {
        const baseStyles =
            "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary:
                "bg-white text-black hover:bg-[#1c2423] hover:text-white hover:scale-105 shadow-lg hover:shadow-xl",
            secondary:
                "bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:scale-105",
            outline:
                "border-2 border-black/20 text-black hover:border-black hover:bg-black/5",
            ghost: "text-black hover:bg-black/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        if (href) {
            return (
                <a
                    href={href}
                    className={cn(baseStyles, variants[variant], sizes[size], className)}
                    {...(props as any)}
                >
                    {children}
                </a>
            );
        }

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
