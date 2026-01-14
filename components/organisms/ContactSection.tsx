"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading } from "@/components/atoms/Typography";
import ContactInfo from "@/components/molecules/ContactInfo";
import { CONTACT } from "@/lib/constants";

const ContactSection: React.FC = () => {
    return (
        <section id="contacto" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <Heading as="h2" variant="title" className="mb-12">
                        Contacto
                    </Heading>

                    <div className="space-y-6">
                        {CONTACT.phones.map((phone) => (
                            <motion.div
                                key={phone}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <ContactInfo type="phone" value={phone} />
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <ContactInfo type="email" value={CONTACT.email} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
