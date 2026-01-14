import React from "react";
import { Instagram, Facebook, Video } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

interface SocialLinksProps {
    links: readonly SocialLink[];
    className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, className }) => {
    const getIcon = (iconName: string) => {
        const icons = {
            instagram: Instagram,
            facebook: Facebook,
            video: Video,
        };
        return icons[iconName as keyof typeof icons] || Instagram;
    };

    return (
        <div className={cn("flex items-center gap-4", className)}>
            {links.map((link) => {
                const Icon = getIcon(link.icon);
                return (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:scale-110 hover:bg-gray-800"
                        aria-label={link.name}
                    >
                        <Icon className="h-5 w-5" />
                    </a>
                );
            })}
        </div>
    );
};

export default SocialLinks;
