'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Lock, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CONSULTANCY_CHARGE_DISPLAY } from '@/lib/constants';

export default function PaymentPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState('upi');

  // Check authentication and service selection
  useEffect(() => {
    const savedUser = localStorage.getItem('consultpro_user');
    const savedService = localStorage.getItem('consultpro_service');
    
    if (!savedUser) {
      router.push('/login');
    } else if (!savedService) {
      router.push('/charge');
    } else {
      // Create Razorpay order
      createOrder();
    }
  }, [router]);

  const createOrder = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parseInt(CONSULTANCY_CHARGE_DISPLAY.replace('₹', '')),
          currency: 'INR',
        }),
      });
      
      const data = await response.json();
      if (data.orderId) {
        setOrderId(data.orderId);
      }
    } catch (error) {
      console.error('Error creating order:', error);
    }
    setLoading(false);
  };

  const handlePayment = async () => {
    setProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Save payment success
    localStorage.setItem('consultpro_payment_status', 'completed');
    
    router.push('/success');
    setProcessing(false);
  };

  const service = typeof window !== 'undefined' 
    ? JSON.parse(localStorage.getItem('consultpro_service') || '{}') 
    : {};

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Preparing payment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto px-3 py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-light px-6 py-6 text-white">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-8 h-8 mr-2" />
              <h1 className="text-xl font-bold">Secure Payment</h1>
            </div>
            <p className="text-center text-white/80 text-sm">Complete your consultation booking</p>
          </div>

          {/* Payment Content */}
          <div className="p-6">
            {/* Order Summary */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">{service.title || 'Consultation'}</span>
                <span className="font-semibold text-gray-800">{service.price || CONSULTANCY_CHARGE_DISPLAY}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>15-30 min • WhatsApp</span>
                <span className="text-primary font-medium">Verified</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
              
              {/* UPI */}
              <label className="cursor-pointer block mb-3">
                <input 
                  type="radio" 
                  name="payment" 
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                  className="sr-only" 
                />
                <div className={`p-4 rounded-xl border-2 transition-all ${
                  paymentMethod === 'upi' 
                    ? 'border-primary bg-primary/5' 
                    : 'border-gray-200 hover:border-primary/30'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-xl">📱</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">UPI</p>
                        <p className="text-xs text-gray-500">Google Pay, PhonePe, Paytm</p>
                      </div>
                    </div>
                    {paymentMethod === 'upi' && <CheckCircle className="w-5 h-5 text-primary" />}
                  </div>
                </div>
              </label>

              {/* Card */}
              <label className="cursor-pointer block">
                <input 
                  type="radio" 
                  name="payment" 
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="sr-only" 
                />
                <div className={`p-4 rounded-xl border-2 transition-all ${
                  paymentMethod === 'card' 
                    ? 'border-primary bg-primary/5' 
                    : 'border-gray-200 hover:border-primary/30'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Card</p>
                        <p className="text-xs text-gray-500">Visa, Mastercard, RuPay</p>
                      </div>
                    </div>
                    {paymentMethod === 'card' && <CheckCircle className="w-5 h-5 text-primary" />}
                  </div>
                </div>
              </label>
            </div>

            {/* Card Details (if card selected) */}
            {paymentMethod === 'card' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-3 mb-6"
              >
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary"
                  />
                </div>
              </motion.div>
            )}

            {/* Pay Button */}
            <Button
              onClick={handlePayment}
              isLoading={processing}
              className="w-full py-4 text-lg shadow-lg"
            >
              <Lock className="w-4 h-4 mr-2" />
              Pay {service.price || CONSULTANCY_CHARGE_DISPLAY}
            </Button>

            {/* Security badges */}
            <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                SSL Secured
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-1" />
                100% Secure
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust message */}
        <p className="text-center text-sm text-gray-500 mt-4">
          🔒 Your payment information is encrypted and secure
        </p>
      </div>
    </div>
  );
}
