"use client";

import PageLoader from "@/components/atoms/PageLoader";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import { useProducts } from "@/hooks/useProducts";
import { BRAND, COLORS, CONTACT } from "@/lib/constants";
import { motion } from "framer-motion";
import { ChevronLeft, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const { products, isLoading } = useProducts();

    const product = products.find(p => p.id === id);
    const [mainImgSrc, setMainImgSrc] = useState<string>("");

    useEffect(() => {
        if (product) {
            setMainImgSrc(product.images?.primary || BRAND.placeholderImage);
        }
    }, [product]);

    if (isLoading) return <PageLoader />;
    if (!product) return <div className="min-h-screen flex items-center justify-center">Producto no encontrado</div>;

    const formattedPrice = product.price > 0
        ? `$${new Intl.NumberFormat('es-AR').format(product.price)}`
        : null;

    const handleBuy = () => {
        const priceFragment = product.price > 0
            ? ` de ${new Intl.NumberFormat('es-AR').format(product.price)}$`
            : "";

        const message = CONTACT.whatsapp.productTemplate
            .replace("{product}", product.name)
            .replace("{price}", priceFragment);

        const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-24 container mx-auto px-4 max-w-6xl">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center hover:opacity-70 mb-12 transition-colors group"
                    style={{ color: COLORS.primary }}
                >
                    <ChevronLeft
                        className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform"
                        style={{ color: COLORS.primary }}
                    />
                    Volver
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50 shadow-sm"
                    >
                        <Image
                            src={mainImgSrc || BRAND.placeholderImage}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                            onError={() => setMainImgSrc(BRAND.placeholderImage)}
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col justify-center"
                    >
                        <span
                            className="text-sm font-bold uppercase tracking-widest mb-4 block"
                            style={{ color: COLORS.primary, opacity: 0.6 }}
                        >
                            {product.category}
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                            {product.name}
                        </h1>

                        {formattedPrice && (
                            <p
                                className="text-3xl font-bold mb-8"
                                style={{ color: COLORS.primary }}
                            >
                                {formattedPrice}
                            </p>
                        )}

                        <div className="prose prose-lg text-gray-600 mb-10">
                            <p>{product.description}</p>
                        </div>

                        <div className="space-y-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleBuy}
                                className="w-full md:w-auto px-12 py-5 text-lg font-bold rounded-full flex items-center justify-center gap-3 transition-shadow hover:shadow-xl"
                                style={{
                                    backgroundColor: COLORS.primary,
                                    color: COLORS.textOnPrimary
                                }}
                            >
                                <ShoppingBag className="w-6 h-6" />
                                Comprar Ahora
                            </motion.button>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-12 pt-12 border-t border-gray-100 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-sm font-bold text-black uppercase mb-2">Envío</h4>
                                <p className="text-sm text-gray-500">Envíos a todo Mendoza y el país.</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-black uppercase mb-2">Cambios</h4>
                                <p className="text-sm text-gray-500">30 días para cambios sin cargo.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
