'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Star, ArrowRight, CheckCircle, Shield, MessageCircle } from 'lucide-react';
import { Header } from '@/components/shared/Header';
import { DOCTOR_INFO } from '@/lib/constants';

export function Features() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Patna, Bihar',
      rating: 5,
      text: 'Excellent consultation! Dr. Singh understood my chronic headache problem immediately and the treatment worked wonders. Highly recommend!',
      avatar: '👩'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Hajipur, Bihar',
      rating: 5,
      text: 'Very professional yet caring approach. The WhatsApp consultation made it so convenient. Great experience overall.',
      avatar: '👨'
    },
    {
      name: 'Anita Devi',
      location: 'Muzaffarpur, Bihar',
      rating: 5,
      text: 'Been to many doctors but Dr. Singh\'s electro homeopathy treatment was unique and effective. My digestive issues are finally resolved!',
      avatar: '👩‍🦰'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Book Consultation',
      description: 'Click on "Start Consultation" and enter your basic details to begin your health journey.'
    },
    {
      number: '02',
      title: 'Share Symptoms',
      description: 'Provide details about your health concerns, symptoms, and medical history through our simple questionnaire.'
    },
    {
      number: '03',
      title: 'Pay Consultation Fee',
      description: 'Complete the payment of ₹149 securely through Razorpay to confirm your appointment.'
    },
    {
      number: '04',
      title: 'Connect on WhatsApp',
      description: 'Get instant access to Dr. Vinay Kumar Singh on WhatsApp for personalized treatment guidance.'
    }
  ];

  const services = [
    {
      title: 'Chronic Disease Management',
      description: 'Long-term care for persistent health conditions with natural remedies.',
      icon: '🩺'
    },
    {
      title: 'Skin Problems',
      description: 'Effective treatment for various skin conditions using electro homeopathy.',
      icon: '✨'
    },
    {
      title: 'Digestive Disorders',
      description: 'Natural solutions for digestive issues and gut health improvement.',
      icon: '🦠'
    },
    {
      title: 'Respiratory Issues',
      description: 'Holistic approach to respiratory health and breathing problems.',
      icon: '🌬️'
    },
    {
      title: 'Pain Management',
      description: 'Natural pain relief solutions without side effects.',
      icon: '💪'
    },
    {
      title: 'General Wellness',
      description: 'Overall health improvement and preventive care consultations.',
      icon: '🌱'
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Premium Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-light p-1"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
          <div className="relative bg-white/95 backdrop-blur-sm rounded-[22px] p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-gray-800 font-bold">{DOCTOR_INFO.clinic.name}</p>
                  <p className="text-gray-500 text-sm">{DOCTOR_INFO.clinic.address}</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-gray-800 font-bold">{DOCTOR_INFO.availability.days}</p>
                  <p className="text-gray-500 text-sm">{DOCTOR_INFO.availability.timing}</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-gray-800 font-bold">Call for Appointment</p>
                  <a href={`tel:${DOCTOR_INFO.whatsappNumber}`} className="text-gray-500 text-sm hover:text-primary transition-colors">
                    {DOCTOR_INFO.whatsappNumber}
                  </a>
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
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Get started with your consultation in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              Our Services
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-heading">
              Comprehensive Care
            </h3>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We offer specialized electro homeopathy treatments for various health conditions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              Testimonials
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-heading">
              What Our Patients Say
            </h3>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Real experiences from patients who consulted with Dr. Vinay Kumar Singh
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">{testimonial.name}</h5>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Healing Journey?
              </h3>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Consult with Dr. Vinay Kumar Singh today and experience the benefits of electro homeopathy.
              </p>
              <Link href="/login" className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
