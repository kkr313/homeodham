'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Shield, Clock, MessageCircle,
  Calendar, FileCheck, Headphones, Stethoscope,
  CheckCircle, Heart, Phone, MapPin, ArrowRight
} from 'lucide-react';
import { DOCTOR_INFO } from '@/lib/constants';

export function Features() {
  const features = [
    {
      icon: Stethoscope,
      title: 'Expert Homeopathy',
      description: '25+ years of experience in Electro Homeopathy treatments',
      highlight: true
    },
    {
      icon: Phone,
      title: 'WhatsApp Consult',
      description: 'Easy communication directly on WhatsApp from your home',
      highlight: false
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Visit us morning (8-12) or evening (4-6), Sunday Closed',
      highlight: false
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your health information is kept completely confidential',
      highlight: false
    },
  ];

  const steps = [
    { step: '01', icon: Calendar, title: 'Book Consultation', desc: 'Fill your details & health concern' },
    { step: '02', icon: FileCheck, title: 'Pay Consultation Fee', desc: 'Secure payment of ₹149' },
    { step: '03', icon: MessageCircle, title: 'Chat on WhatsApp', desc: 'Direct consultation with doctor' },
    { step: '04', icon: Heart, title: 'Get Guidance', desc: 'Receive health advice & prescriptions' },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cta/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            Why Choose {DOCTOR_INFO.clinic.name}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-heading mb-6">
            Expert <span className="text-gradient-primary">Homeopathic Care</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Consult with {DOCTOR_INFO.name}, an experienced Electro Homeopath, 
            for personalized treatment and guidance.
          </p>
        </motion.div>

        {/* Premium Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-primary/30 transition-all duration-500 cursor-pointer shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-500" />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-10 h-10 bg-primary/10 rounded-bl-full transition-transform duration-500 group-hover:scale-150" />
                </div>
                
                <div className="relative z-10">
                  {/* Icon container with premium effect */}
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-white rounded-2xl shadow-inner" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium Clinic Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-light p-1"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
          <div className="relative bg-white/95 backdrop-blur-sm rounded-[22px] p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
              <div className="flex items-center md:justify-start justify-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-gray-800 font-bold">{DOCTOR_INFO.clinic.name}</p>
                  <p className="text-gray-500 text-sm">{DOCTOR_INFO.clinic.address}</p>
                </div>
              </div>
              
              <div className="flex items-center md:justify-start justify-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-gray-800 font-bold">{DOCTOR_INFO.availability.days}</p>
                  <p className="text-gray-500 text-sm">{DOCTOR_INFO.availability.timing}</p>
                </div>
              </div>
              
              <div className="flex items-center md:justify-start justify-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-gray-800 font-bold">Call for Appointment</p>
                  <p className="text-gray-500 text-sm">{DOCTOR_INFO.whatsappNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Premium How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-cta/10 text-cta text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-cta rounded-full mr-2 animate-pulse" />
              Simple Process
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-heading">
              How It Works
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
                
                <div className="relative z-10 pt-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-110">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
