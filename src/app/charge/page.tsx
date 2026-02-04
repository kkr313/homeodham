'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Shield, CheckCircle, Clock, Star, Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SERVICES, DOCTOR_INFO, PAYMENT_DISCLAIMER, SITE_NAME } from '@/lib/constants';

export default function ChargePage() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [loading, setLoading] = useState(false);

  // Check authentication
  useEffect(() => {
    const savedUser = localStorage.getItem('consultpro_user');
    if (!savedUser) {
      router.push('/login');
    }
  }, [router]);

  const handlePayment = async () => {
    setLoading(true);
    
    // Save selected service
    localStorage.setItem('consultpro_service', JSON.stringify(selectedService));
    
    // Redirect to payment page
    await new Promise(resolve => setTimeout(resolve, 500));
    router.push('/payment');
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {/* Left: Service Selection */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Select Consultation Package</h1>
              <p className="text-gray-500 text-sm sm:text-base">Choose the consultation type that best fits your needs</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedService(service)}
                  className={`cursor-pointer relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                    selectedService.title === service.title
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 bg-white hover:border-primary/50'
                  }`}
                >
                  {selectedService.title === service.title && (
                    <div className="absolute top-4 right-4">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                  )}

                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🏥</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </motion.div>
              ))}
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                What's Included
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Instant WhatsApp consultation',
                  'Detailed health assessment',
                  'Personalized treatment plan',
                  'Follow-up guidance',
                  'Prescription if needed',
                  '24/7 support access'
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Disclaimer */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm text-red-600 font-medium mb-1">Important Disclaimer</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {PAYMENT_DISCLAIMER}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Summary & Payment */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              {/* Order Summary */}
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-100">
                <div className="flex justify-between text-gray-600">
                  <span>Consultation</span>
                  <span className="text-gray-800">{selectedService.title}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Duration</span>
                  <span className="text-gray-800">15-30 minutes</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Mode</span>
                  <span className="text-gray-800">WhatsApp</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Doctor</span>
                  <span className="text-gray-800">{DOCTOR_INFO.name}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-500">Total Amount</span>
                <span className="text-3xl font-bold text-primary">{selectedService.price}</span>
              </div>

              <Button
                onClick={handlePayment}
                isLoading={loading}
                className="w-full py-4 text-lg shadow-lg shadow-primary/30"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Pay & Consult Now
              </Button>

              {/* Trust indicators */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <Shield className="w-4 h-4 text-primary mr-2" />
                  <span>100% Secure Payment</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 text-primary mr-2" />
                  <span>Instant Refund Policy</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-primary mr-2" />
                  <span>Money-back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Doctor Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img 
                src="/img/profile_dp.png"
                alt="Dr. Vinay Kumar Singh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{DOCTOR_INFO.name}</h3>
              <p className="text-gray-500 mb-1">{DOCTOR_INFO.title}</p>
              <p className="text-gray-500 text-sm">{DOCTOR_INFO.qualifications}</p>
              <p className="text-gray-500 text-sm">{DOCTOR_INFO.experience}</p>
              <p className="text-gray-400 text-sm mt-1">{DOCTOR_INFO.clinic.name}, {DOCTOR_INFO.clinic.address}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">4.9/5 Rating</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
