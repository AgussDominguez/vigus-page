'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading } from '@/components/atoms/Typography';
import ContactInfo from '@/components/molecules/ContactInfo';
import SocialLinks from '@/components/molecules/SocialLinks';
import { CONTACT, SOCIAL_LINKS } from '@/lib/constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Direct Contact Info */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs md:max-w-md">
                <Heading as="h3" className="text-xl font-semibold mb-8 text-center">
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
                    <ContactInfo type="whatsapp" value={CONTACT.whatsapp.number} />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <ContactInfo type="email" value={CONTACT.email} />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-8">
              <Heading as="h3" className="text-xl font-semibold mb-6 text-left md:text-center">
                Seguinos en redes
              </Heading>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <SocialLinks links={SOCIAL_LINKS} variant="prominent" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
