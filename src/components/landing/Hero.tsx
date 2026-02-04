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
                {/* Main card with chat design */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="bg-white p-6 rounded-2xl shadow-lg relative z-10 max-w-md"
                >
                  {/* Chat Header with Rating */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center overflow-hidden">
                        <img 
                          src="/img/profile_dp.png"
                          alt="Dr. Vinay Kumar Singh"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Dr. Vinay Kumar Singh</p>
                        <p className="text-xs text-green-600 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                          Online
                        </p>
                      </div>
                    </div>
                    {/* Rating badge attached to header */}
                    <div className="bg-yellow-50 rounded-lg px-3 py-2">
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="font-bold text-gray-800 text-sm">4.9</span>
                      </div>
                      <p className="text-[10px] text-gray-500 text-center">200+ reviews</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-3">
                    {/* Doctor message */}
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <img 
                          src="/img/profile_dp.png"
                          alt="Doctor"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-[180px]">
                        <p className="text-sm text-gray-700">Hello! How can I help you today?</p>
                        <p className="text-xs text-gray-400 mt-1">10:30 AM</p>
                      </div>
                    </div>

                    {/* Client message */}
                    <div className="flex items-start justify-end space-x-2">
                      <div className="bg-green-500 rounded-2xl rounded-tr-none px-4 py-2 max-w-[180px]">
                        <p className="text-sm text-white">I have chronic headache issues...</p>
                        <p className="text-xs text-green-100 mt-1">10:31 AM</p>
                      </div>
                    </div>

                    {/* Doctor message */}
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <img 
                          src="/img/profile_dp.png"
                          alt="Doctor"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-[180px]">
                        <p className="text-sm text-gray-700">I understand. Let me help you with that.</p>
                        <p className="text-xs text-gray-400 mt-1">10:32 AM</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                        <p className="text-sm text-gray-500">Type a message...</p>
                      </div>
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
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
