import React from "react";
import { Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface ContactInfoProps {
    type: "phone" | "email";
    value: string;
    className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ type, value, className }) => {
    const Icon = type === "phone" ? Phone : Mail;

    return (
        <div className={cn("flex items-center gap-3", className)}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5">
                <Icon className="h-5 w-5 text-black" />
            </div>
            <div>
                <p className="text-sm text-gray-600">
                    {type === "phone" ? "Teléfono" : "Email"}
                </p>
                <a
                    href={type === "phone" ? `tel:${value}` : `mailto:${value}`}
                    className="text-lg font-medium text-black hover:underline"
                >
                    {value}
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;
