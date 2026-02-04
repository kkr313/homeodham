'use client';

import React from 'react';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Testimonials } from '@/components/landing/Testimonials';
import { DoctorSection } from '@/components/landing/Doctor';
import { SERVICES, DOCTOR_INFO, SITE_EMAIL, SITE_URL } from '@/lib/constants';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Hero />
      <DoctorSection />
      <Features />

      {/* Pricing Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-heading mb-4">
              Simple, Transparent <span className="text-gradient-primary">Pricing</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              One consultation fee, no hidden charges. Get expert homeopathic consultation at an affordable price.
            </p>
          </motion.div>

          {/* Single Pricing Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 relative overflow-hidden shadow-lg border border-gray-100">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cta/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMENDED
                </span>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                  <span className="text-4xl">💬</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
                  WhatsApp Consultation
                </h3>
                <p className="text-gray-500 text-center mb-6">
                  Direct consultation with {DOCTOR_INFO.name} via WhatsApp
                </p>

                {/* Price */}
                <div className="text-center mb-8">
                  <span className="text-6xl font-bold text-heading">{SERVICES[0].price}</span>
                  <p className="text-gray-500 mt-2">One-time payment • No hidden fees</p>
                </div>

                {/* What's Included */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h4 className="text-gray-800 font-semibold mb-4 text-center">What's Included</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      '15-30 min WhatsApp chat',
                      'Detailed health assessment',
                      'Personalized treatment plan',
                      'Follow-up guidance',
                      'Prescription if needed',
                      '24/7 support access'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link href="/login">
                  <button className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30">
                    Book Consultation Now
                    <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                  </button>
                </Link>

                <p className="text-center text-gray-500 text-sm mt-4">
                  🔒 Secure payment • 100% satisfaction guaranteed
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />

      {/* Visit Our Clinic Section - Compact Design */}
      <section id="contact" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-2">
              Visit Our <span className="text-gradient-primary">Clinic</span>
            </h2>
          </motion.div>

          {/* Compact Info Grid */}
          <div className="grid sm:grid-cols-4 gap-4 mb-6">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">📍</span>
                <h3 className="font-semibold text-gray-800">Address</h3>
              </div>
              <p className="text-sm text-gray-600">
                Arogya  Homeodham, At Hariwanspur, PO Warishpur, Dist. Vaishali, Bihar
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">📞</span>
                <h3 className="font-semibold text-gray-800">Phone</h3>
              </div>
              <p className="text-sm text-gray-600">
                +91 {DOCTOR_INFO.whatsappNumber.slice(2)}
              </p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">✉️</span>
                <h3 className="font-semibold text-gray-800">Email</h3>
              </div>
              <p className="text-sm text-gray-600">
                {SITE_EMAIL}
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">🕐</span>
                <h3 className="font-semibold text-gray-800">Hours</h3>
              </div>
              <p className="text-sm text-gray-600">
                24/7 Available
              </p>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.5560834124176!2d85.27667087410778!3d25.884084003539687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed6b0044608593%3A0x4af20feb4cb5907d!2z4KSG4KSw4KWL4KSX4KWN4KSvIOCkueCli-CkruCljeCkr-CkriDgpLngpLDgpL_gpLXgpILgpLbgpKrgpYHgpLA!5e0!3m2!1sen!2sin!4v1770147221286!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-slate-200 py-6 border-t border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2026 Arogya  Homeodham. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2 sm:mt-0">
              Developed by <a href="https://sdet-karan.netlify.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Karan</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
