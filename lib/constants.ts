/**
 * Constants and configuration for the clothing brand landing page
 */

// Brand Information
export const BRAND = {
    name: "SEMA",
    tagline: "Creá tus prendas con quienes cuidan cada detalle",
    subtitle: "Un proceso cuidado de principio a fin",
    description:
        "Somos una marca de indumentaria de Mendoza, Argentina, que fusiona tendencias contemporáneas con la calidad artesanal. Cada prenda es diseñada pensando en vos, en tu estilo único y en tu comodidad.",
    fullDescription:
        "Fundada en Mendoza, SEMA nació de la pasión por crear prendas que no solo visten, sino que expresan personalidad. Trabajamos con materiales de primera calidad, diseños exclusivos y una producción consciente que respeta tanto a las personas como al medio ambiente. Nuestro compromiso es ofrecerte moda que trasciende temporadas, piezas versátiles que se adaptan a tu vida y estilo.",
} as const;

// Navigation Links
export const NAV_LINKS = [
    { href: "/#productos", label: "Productos" },
    { href: "/#nosotros", label: "Nosotros" },
    { href: "/#contacto", label: "Contacto" },
] as const;

// Products Data
export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    category: "remeras" | "buzos" | "pantalones" | "gorras";
    images: {
        primary: string;
        hover: string;
    };
}

export const PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Oversized Tee Essential",
        price: 12500,
        description: "Remera oversized de algodón premium con fit relajado",
        category: "remeras",
        images: {
            primary: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop",
            hover: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=1000&fit=crop",
        },
    },
    {
        id: "2",
        name: "Denim Jacket Vintage",
        price: 28900,
        description: "Campera de jean con detalles vintage y corte moderno",
        category: "buzos", // Categorizing as buzos/camperas for this example
        images: {
            primary: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop",
            hover: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&h=1000&fit=crop",
        },
    },
    {
        id: "3",
        name: "Cargo Pants Urban",
        price: 19800,
        description: "Pantalón cargo de gabardina con múltiples bolsillos",
        category: "pantalones",
        images: {
            primary: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=1000&fit=crop",
            hover: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop",
        },
    },
    {
        id: "4",
        name: "Hoodie Premium Black",
        price: 22500,
        description: "Buzo con capucha de algodón frizado premium",
        category: "buzos",
        images: {
            primary: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop",
            hover: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=1000&fit=crop",
        },
    },
    {
        id: "5",
        name: "Minimal White Shirt",
        price: 15900,
        description: "Camisa minimalista de lino ideal para cualquier ocasión",
        category: "remeras",
        images: {
            primary: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=1000&fit=crop",
            hover: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1000&fit=crop",
        },
    },
    {
        id: "6",
        name: "Bomber Jacket Street",
        price: 32900,
        description: "Campera bomber con diseño urbano y detalles exclusivos",
        category: "buzos",
        images: {
            primary: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&fit=crop",
            hover: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop",
        },
    },
    {
        id: "7",
        name: "Cap Street SEMA",
        price: 8500,
        description: "Gorra trucker con bordado frontal de alta calidad",
        category: "gorras",
        images: {
            primary: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=1000&fit=crop",
            hover: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=800&h=1000&fit=crop",
        },
    },
] as const;

// Contact Information
export const CONTACT = {
    phones: ["+54 11 2345-6789", "+54 11 8765-4321"],
    email: "hola@sema.com.ar",
    whatsapp: {
        number: "5491123456789",
        defaultMessage: "Hola SEMA Indumentaria! Me gustaría realizar una consulta.",
        productTemplate: "Hola SEMA Indumentaria! Te contacto por la compra de {product}{price}.",
    },
    address: "Mendoza, Argentina",
} as const;

// Social Media Links
export const SOCIAL_LINKS = [
    {
        name: "Instagram",
        url: "https://instagram.com/sema",
        icon: "instagram",
    },
    {
        name: "Facebook",
        url: "https://facebook.com/sema",
        icon: "facebook",
    },
    {
        name: "TikTok",
        url: "https://tiktok.com/@sema",
        icon: "video",
    },
] as const;

// SEO Metadata
export const SITE_URL = "https://sema-page.vercel.app"; // Update with actual domain if different

export const SEO = {
    title: "SEMA Indumentaria | Ropa de Hombre y Mujer en Mendoza",
    description:
        "SEMA Indumentaria: Descubrí las mejores remeras, buzos y pantalones en Mendoza. Moda urbana con calidad artesanal y envíos a toda Argentina.",
    keywords: [
        "SEMA Indumentaria",
        "ropa mendoza",
        "indumentaria mendoza",
        "remeras mendoza",
        "buzos mendoza",
        "streetwear argentina",
        "moda urbana mendoza",
        "SEMA ropa",
    ],
    openGraph: {
        type: "website" as const,
        locale: "es_AR",
        siteName: "SEMA Indumentaria",
        images: [
            {
                url: `${SITE_URL}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "SEMA Indumentaria Mendoza",
            },
        ],
    },
};
