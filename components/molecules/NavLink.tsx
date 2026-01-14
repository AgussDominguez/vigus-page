"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";
import { handleNavClick } from "@/lib/utils/smooth-scroll";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
    href,
    children,
    onClick,
    className,
}) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        handleNavClick(e, href);
        onClick?.();
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className={cn(
                "text-base font-medium text-white hover:text-gray-300 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white hover:after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full",
                className
            )}
        >
            {children}
        </a>
    );
};

export default NavLink;
