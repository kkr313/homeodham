'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight, Star, Shield, MessageCircle
} from 'lucide-react';
import { Header } from '@/components/shared/Header';

export function Hero() {
  const features = [
    'Electro Homeopathy',
    'WhatsApp Consultation',
    '25+ Years Experience',
    'Personalized Care',
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <Header />
      <section className="relative pt-20 flex items-center justify-center min-h-screen">
        {/* Background */}
        <div className="absolute inset-0 bg-background animated-bg-dark" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, 100, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -left-40 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6"
              >
                <Shield className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">25+ Years of Experience</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
              >
                Natural Healing with{' '}
                <span className="text-primary">Electro Homeopathy</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Experience holistic healing through advanced Electro Homeopathy treatments. 
                Connect with Dr. Vinay Kumar Singh directly via WhatsApp for personalized consultations.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-start lg:justify-start mb-10"
              >
                <Link href="/login">
                  <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-primary rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Start Consultation
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                <p className="text-sm text-gray-500 mt-3 flex items-center">
                  <Shield className="w-4 h-4 mr-1 text-green-500" />
                  Secure Payment • Quick Response
                </p>
              </motion.div>
            </motion.div>

            {/* Right Content - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                {/* Main card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="card-elegant p-8 relative z-10"
                >
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-100">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center overflow-hidden">
                      <img 
                        src="/img/profile_dp.png"
                        alt="Dr. Vinay Kumar Singh"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-xl">Dr. Vinay Kumar Singh</p>
                      <p className="text-gray-500">Electro Homeopath • 25+ years</p>
                    </div>
                    <div className="flex items-center space-x-1 bg-green-100 px-3 py-1.5 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-green-700">Available</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">4.9/5 (200+ reviews)</span>
                  </div>

                  {/* Info Grid */}
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Consultation</p>
                        <p className="font-semibold text-gray-800">Via WhatsApp</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <Shield className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Consultation Fee</p>
                        <p className="font-semibold text-gray-800">₹149 only</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -top-4 -right-4 card-elegant p-4 text-gray-800 z-20"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-bold">4.9</span>
                  </div>
                  <p className="text-xs text-gray-500">200+ Happy Patients</p>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 -right-12 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
