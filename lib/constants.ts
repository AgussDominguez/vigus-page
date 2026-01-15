/**
 * Constants and configuration for the Dani Celulares landing page
 */

// Brand Information
export const BRAND = {
    name: "Dani Celulares",
    tagline: "Tu celular en las mejores manos",
    subtitle: "Venta y reparación de celulares y accesorios",
    description:
        "Somos una tienda de celulares ubicada en Rodeo del Medio, Mendoza. Ofrecemos venta de equipos, accesorios y servicio técnico especializado, con atención personalizada y confianza.",
    fullDescription:
        "Dani Celulares es un emprendimiento local de Rodeo del Medio, Mendoza, dedicado a la venta de celulares, accesorios y reparaciones. Trabajamos con equipos de calidad, repuestos confiables y un servicio técnico responsable. Nuestro objetivo es que tengas tu celular funcionando como nuevo, con precios justos y atención directa.",
    heroImage: "https://i.ibb.co/ZzKwkS3M/Captura-de-pantalla-2026-01-15-a-la-s-3-09-33-p-m.png",
    logo: "https://i.ibb.co/2Yk5VmfR/Captura-de-pantalla-2026-01-15-a-la-s-3-10-59-p-m-removebg-preview.png",
    placeholderImage: "/placeholder-brand.png",
} as const;

// Theme Colors
export const COLORS = {
    primary: "#b24e00",
    secondary: "#ff8c61",
    textOnPrimary: "#fff7f0",
    background: "#8f3d00",
} as const;

// Navigation Links
export const NAV_LINKS = [
    { href: "/#productos", label: "Productos" },
    { href: "/#servicios", label: "Servicios" },
    { href: "/#contacto", label: "Contacto" },
] as const;

// Products Data
export interface Product {
    id: string;
    name: string;
    price?: number; // opcional, muchos locales no publican precio
    description: string;
    category: "celulares" | "accesorios" | "reparaciones";
    images: {
        primary: string;
        hover?: string;
    };
}

// Contact Information
export const CONTACT = {
    phones: ["+54 9 2613 60-7266"],
    email: "danicelulares@gmail.com",
    whatsapp: {
        number: "5492613607266",
        defaultMessage: "Hola Dani Celulares! Quería hacer una consulta.",
        productTemplate:
            "Hola Dani Celulares! Te escribo por el producto {product}{price}.",
    },
    address: "Rodeo del Medio, Mendoza, Argentina",
} as const;

// Social Media Links
export const SOCIAL_LINKS = [
    {
        name: "Instagram",
        url: "https://www.instagram.com/danii_celulares_rdm/?hl=es-la",
        icon: "instagram",
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/clinica.del.celular.468136/",
        icon: "facebook",
    },
    {
        name: "TikTok",
        url: "https://www.tiktok.com/@danii_celulares_rdm",
        icon: "video",
    },

] as const;

// SEO Metadata
export const SITE_URL = "https://dani-celulares.vercel.app"; // cambiar si usás dominio propio

export const SEO = {
    title: "Dani Celulares | Venta y Reparación de Celulares en Rodeo del Medio",
    description:
        "Dani Celulares en Rodeo del Medio, Mendoza. Venta de celulares, accesorios y servicio técnico. Atención personalizada y contacto directo por WhatsApp.",
    keywords: [
        "Dani Celulares",
        "celulares Rodeo del Medio",
        "reparación de celulares Mendoza",
        "venta de celulares Mendoza",
        "servicio técnico celulares",
        "accesorios celulares Mendoza",
    ],
    openGraph: {
        type: "website" as const,
        locale: "es_AR",
        siteName: "Dani Celulares",
        images: [
            {
                url: `${SITE_URL}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Dani Celulares - Rodeo del Medio",
            },
        ],
    },
};
