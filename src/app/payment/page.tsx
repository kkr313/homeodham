'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Shield, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CONSULTANCY_CHARGE_DISPLAY, DOCTOR_WHATSAPP_NUMBER } from '@/lib/constants';

interface Service {
  title?: string;
  price?: string;
}

// =============================================================================
// PAYMENT GATEWAY INTEGRATION - COMMENTED OUT PENDING APPROVAL
// =============================================================================
// To enable Razorpay payment gateway once approved:
// 1. Uncomment the createOrder function
// 2. Uncomment the handlePayment function
// 3. Uncomment the Razorpay-related state (orderData, etc.)
// 4. Uncomment the Razorpay payment UI section
// 5. Remove or comment out the manual payment section
// =============================================================================
/*
const createOrder = async () => {
  setLoading(true);
  setError(null);
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
      setOrderData({
        orderId: data.orderId,
        amount: data.amount,
        currency: data.currency,
        keyId: data.keyId,
      });
    } else if (data.error) {
      setError(data.error);
    }
  } catch (error) {
    console.error('Error creating order:', error);
    setError('Failed to connect to payment server. Please try again.');
  }
  setLoading(false);
};

const handlePayment = async () => {
  if (!orderData) return;
  
  setProcessing(true);

  const razorpayOptions = {
    key: orderData.keyId,
    amount: orderData.amount,
    currency: orderData.currency,
    name: 'Arogya Homeodham',
    description: 'Consultation Payment',
    order_id: orderData.orderId,
    image: '/img/logo.png',
    handler: (response: any) => {
      console.log('Payment successful:', response);
      if (typeof window !== 'undefined') {
        localStorage.setItem('consultpro_payment_id', response.razorpay_payment_id);
        localStorage.setItem('consultpro_payment_status', 'completed');
      }
      router.push('/success');
    },
    prefill: {
      name: typeof window !== 'undefined' ? localStorage.getItem('consultpro_user_name') || '' : '',
      email: typeof window !== 'undefined' ? localStorage.getItem('consultpro_user_email') || '' : '',
      contact: typeof window !== 'undefined' ? localStorage.getItem('consultpro_user_phone') || '' : '',
    },
    theme: {
      color: '#3B82F6',
    },
    modal: {
      ondismiss: () => {
        setProcessing(false);
      },
    },
    method: {
      upi: true,
      card: true,
      netbanking: true,
      wallet: true,
    },
    config: {
      display: {
        blocks: {
          utib: {
            name: 'Bank Transfer',
            instruments: [
              { method: 'netbanking', banks: ['UTIB'] }
            ]
          },
          upi: {
            name: 'UPI',
            instruments: [
              { method: 'upi' }
            ]
          },
          card: {
            name: 'Card',
            instruments: [
              { method: 'card' }
            ]
          }
        },
        sequence: ['block.upi', 'block.card', 'block.utib'],
        preferences: {
          show_default_blocks: true
        }
      }
    }
  };

  if (typeof window !== 'undefined' && window.Razorpay) {
    const razorpay = new window.Razorpay(razorpayOptions);
    razorpay.open();
  }
};
*/
// =============================================================================
// END OF PAYMENT GATEWAY INTEGRATION CODE
// =============================================================================

export default function PaymentPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState<Service>({});
  const [isClient, setIsClient] = useState(false);
  
  // Timer state
  const [countdown, setCountdown] = useState(120); // 2 minutes = 120 seconds
  const [redirected, setRedirected] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Set client flag on mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check authentication and service selection
  useEffect(() => {
    if (!isClient) return;

    const savedUser = localStorage.getItem('consultpro_user');
    const savedService = localStorage.getItem('consultpro_service');
    
    if (savedService) {
      try {
        setService(JSON.parse(savedService));
      } catch (e) {
        console.error('Error parsing service:', e);
      }
    }
    
    if (!savedUser) {
      router.push('/login');
    } else if (!savedService) {
      router.push('/charge');
    } else {
      setLoading(false);
    }
  }, [router, isClient]);

  // Countdown timer - starts immediately
  useEffect(() => {
    if (loading || redirected) return;

    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          redirectToWhatsApp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [loading, redirected]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const redirectToWhatsApp = () => {
    if (redirected) return;
    setRedirected(true);
    
    const userName = localStorage.getItem('consultpro_user_name') || '[Your Name]';
    const userPhone = localStorage.getItem('consultpro_user_phone') || '[Your Phone]';
    
    const message = `Hello Dr. Vinay Kumar Singh,

I have completed the payment for my consultation.

Please find my payment details below:

Name: ${userName}
Phone: ${userPhone}
Amount Paid: ${CONSULTANCY_CHARGE_DISPLAY}
Transaction Reference/UTR: [Please enter]
Payment Method: [UPI/Bank/Cash]

I have attached my payment screenshot.

Please confirm my consultation booking.

Thank you!`;

    const whatsappUrl = `https://wa.me/${DOCTOR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading...</p>
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
              <h1 className="text-xl font-bold">Scan to Pay</h1>
            </div>
            <p className="text-center text-white/80 text-sm">{CONSULTANCY_CHARGE_DISPLAY}</p>
          </div>

          {/* QR Code - Centered */}
          <div className="p-6 flex flex-col items-center">
            {/* QR Code */}
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-4 text-center mb-6 w-full max-w-xs mx-auto">
              <img 
                src="/img/qr-Image.jpeg" 
                alt="Payment QR Code" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Timer */}
            <div className="w-full">
              <div className="bg-gray-100 rounded-xl p-4 text-center mb-4">
                <p className="text-sm text-gray-600 mb-2">Redirecting to WhatsApp in</p>
                <span className={`text-4xl font-bold ${countdown < 30 ? 'text-red-600' : 'text-gray-800'}`}>
                  {formatTime(countdown)}
                </span>
                <p className="text-xs text-gray-500 mt-2">Take a screenshot of your payment confirmation</p>
              </div>

              {/* Instructions */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-amber-800 mb-2">Steps:</h3>
                <ol className="text-sm text-amber-700 space-y-1">
                  <li>1. Scan QR code with any UPI app</li>
                  <li>2. Complete payment of {CONSULTANCY_CHARGE_DISPLAY}</li>
                  <li>3. Take screenshot of confirmation</li>
                  <li>4. Send proof on WhatsApp (opens automatically)</li>
                </ol>
              </div>

              {/* Open WhatsApp Button */}
              <Button
                onClick={redirectToWhatsApp}
                className="w-full py-3 text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Send Payment Proof on WhatsApp</span>
                <span className="sm:hidden">Send Proof on WhatsApp</span>
              </Button>
            </div>

            {/* Security badges */}
            <div className="mt-6 flex items-center justify-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                SSL Secured
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-1" />
                Verified
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
