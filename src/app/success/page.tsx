'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, Clock, Calendar, Share2, Star } from 'lucide-react';
import { DOCTOR_WHATSAPP_NUMBER, DOCTOR_INFO } from '@/lib/constants';

export default function SuccessPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const [userData, setUserData] = useState<any>({});
  const [healthData, setHealthData] = useState<any>({});
  const [paymentId, setPaymentId] = useState<string>('');
  const redirectCalled = useRef(false);

  const redirectToWhatsApp = () => {
    // Prevent multiple redirects
    if (redirectCalled.current) return;
    redirectCalled.current = true;
    
    // Read fresh data from localStorage to ensure we have the latest
    const user = JSON.parse(localStorage.getItem('consultpro_user') || '{}');
    const health = JSON.parse(localStorage.getItem('consultpro_health_data') || '{}');
    const storedPaymentId = localStorage.getItem('consultpro_payment_id') || 'PENDING';
    
    const message = encodeURIComponent(`*🏥 Aarogya Homeodham - New Consultation Request*

━━━━━━━━━━━━━━━━━━━━
👤 *Patient Name:* ${health.name || user.name}
📅 *Age/Gender:* ${health.age || 'N/A'} years / ${health.gender || 'Not specified'}
📱 *Mobile:* ${user.mobile || 'Not provided'}
━━━━━━━━━━━━━━━━━━━━

📋 *Symptoms:*
${health.symptoms || 'Not specified'}

⏱️ *Duration:* ${health.duration || 'Not specified'}

✅ *Previous Consultation:* ${health.previous || 'No'}

━━━━━━━━━━━━━━━━━━━━
💳 *Payment Status:* Paid (₹${DOCTOR_INFO.consultationFee})
🧾 *Ref ID:* ${storedPaymentId}
━━━━━━━━━━━━━━━━━━━━

🙏 *Request:* Please guide me for further treatment.

_Thank you!_`);
    
    window.open(
      `https://wa.me/${DOCTOR_WHATSAPP_NUMBER}?text=${message}`,
      '_blank'
    );
  };

  useEffect(() => {
    const paymentStatus = localStorage.getItem('consultpro_payment_status');
    if (paymentStatus !== 'completed') {
      router.push('/charge');
      return;
    }

    const user = localStorage.getItem('consultpro_user');
    const health = localStorage.getItem('consultpro_health_data');
    const storedPaymentId = localStorage.getItem('consultpro_payment_id');

    if (user) setUserData(JSON.parse(user));
    if (health) setHealthData(JSON.parse(health));
    if (storedPaymentId) setPaymentId(storedPaymentId);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (!redirectCalled.current) {
            redirectToWhatsApp();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-100 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3"
          >
            Payment Successful! 🎉
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg text-gray-600 mb-6"
          >
            Thank you, {healthData.name || userData.name}! Your consultation has been booked.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6 text-left"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2" />
              Consultation Details
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-sm text-gray-500 mb-1">Doctor</p>
                <p className="text-gray-800 font-medium">{DOCTOR_INFO.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Amount Paid</p>
                <p className="text-green-600 font-medium">₹{DOCTOR_INFO.consultationFee}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Payment Reference</p>
                <p className="text-gray-800 font-medium">{paymentId || 'Processing...'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Mode</p>
                <p className="text-gray-800 font-medium">WhatsApp Chat (15-30 min)</p>
              </div>
            </div>

            {/* Patient Summary */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Your Information Sent to Doctor</p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-400">Name:</span>
                  <span className="text-gray-700 ml-2">{healthData.name || '-'}</span>
                </div>
                <div>
                  <span className="text-gray-400">Age/Gender:</span>
                  <span className="text-gray-700 ml-2">{healthData.age || '-'} / {healthData.gender || '-'}</span>
                </div>
                <div>
                  <span className="text-gray-400">Symptoms:</span>
                  <span className="text-gray-700 ml-2">{healthData.symptoms?.slice(0, 50) || '-'}...</span>
                </div>
                <div>
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-gray-700 ml-2">{healthData.duration || '-'}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-12 h-12 text-green-600 mr-4" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">Connect on WhatsApp</h3>
                <p className="text-gray-500">Chat directly with {DOCTOR_INFO.name}</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">
              Redirecting in <span className="text-primary font-bold">{countdown}</span> seconds...<br />
              <span className="text-sm text-gray-400">Please wait, opening WhatsApp...</span>
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="bg-green-100 rounded-full p-4">
                <MessageCircle className="w-10 h-10 text-green-600 animate-pulse" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/" className="flex items-center text-gray-500 hover:text-primary transition-colors">
              <span className="mr-2">🏠</span>
              Back to Home
            </Link>
            
            <div className="flex items-center text-gray-300">•</div>
            
            <button 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  navigator.share?.({
                    title: 'Arogya  Homeodham',
                    text: 'I just booked a consultation!',
                    url: window.location.origin,
                  });
                }
              }}
              className="flex items-center text-gray-500 hover:text-primary transition-colors"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-sm text-gray-400"
          >
            A confirmation SMS has been sent to {userData.mobile}
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
}
