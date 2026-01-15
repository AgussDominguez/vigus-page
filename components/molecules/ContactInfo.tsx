import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { CONTACT, COLORS } from "@/lib/constants";
import { hexToRgba } from "@/lib/utils/colors";

interface ContactInfoProps {
    type: "phone" | "email" | "whatsapp";
    value: string;
    className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ type, value, className }) => {
    const getIcon = () => {
        switch (type) {
            case "phone": return Phone;
            case "email": return Mail;
            case "whatsapp": return MessageCircle;
            default: return Phone;
        }
    };

    const Icon = getIcon();

    const getHref = () => {
        switch (type) {
            case "phone": return `tel:${value}`;
            case "email": return `mailto:${value}`;
            case "whatsapp": {
                const encodedMessage = encodeURIComponent(CONTACT.whatsapp.defaultMessage);
                return `https://wa.me/${CONTACT.whatsapp.number}?text=${encodedMessage}`;
            }
            default: return "#";
        }
    };

    return (
        <div className={cn("flex items-center gap-4 text-left", className)}>
            <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: hexToRgba(COLORS.primary, 0.2) }}
            >
                <Icon className="h-5 w-5" style={{ color: COLORS.primary }} />
            </div>
            <div>
                <p className="text-sm text-gray-600">
                    {type === "phone" ? "Teléfono" : type === "email" ? "Email" : "WhatsApp"}
                </p>
                <a
                    href={getHref()}
                    target={type === "whatsapp" ? "_blank" : undefined}
                    rel={type === "whatsapp" ? "noopener noreferrer" : undefined}
                    className="text-lg font-medium text-black hover:underline"
                >
                    {value}
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;
