"use client";

import { useState, useEffect } from "react";

export function useProducts() {
    const [products, setProducts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/products')
            .then(async (res) => {
                if (!res.ok) {
                    const errorData = await res.json().catch(() => ({}));
                    throw new Error(errorData.error || `Server error: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setProducts(data);
                }
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Error fetching products:", err.message);
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    return { products, isLoading, error };
}
