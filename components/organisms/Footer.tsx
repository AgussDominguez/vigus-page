import React from "react";
import { Text } from "@/components/atoms/Typography";
import SocialLinks from "@/components/molecules/SocialLinks";
import { BRAND, SOCIAL_LINKS } from "@/lib/constants";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-8">
                    {/* Brand Name */}
                    <div className="text-3xl font-bold tracking-tighter">
                        {BRAND.name}
                    </div>

                    {/* Social Links */}
                    <SocialLinks links={SOCIAL_LINKS} />

                    {/* Legal Info */}
                    <div className="text-center space-y-2">
                        <Text variant="small" className="text-gray-400">
                            © {currentYear} {BRAND.name}. Todos los derechos reservados.
                        </Text>
                        <Text variant="small" className="text-gray-400">
                            Mendoza, Argentina
                        </Text>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
