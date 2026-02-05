'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, MessageCircle, Shield, Clock, Star } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const router = useRouter();
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Check if already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem('consultpro_user');
    if (savedUser) {
      router.push('/questionnaire');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!mobile || !name) {
      setError('Please fill in all fields');
      return;
    }

    if (mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setLoading(true);

    // Simulate login delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create user data
    const userData = {
      name,
      mobile,
      id: `user_${Date.now()}`,
    };

    // Save to localStorage
    localStorage.setItem('consultpro_user', JSON.stringify(userData));

    // Dispatch storage event to notify other components
    window.dispatchEvent(new Event('storage'));
    // Also dispatch custom event for same-window listeners
    window.dispatchEvent(new CustomEvent('userLoggedIn', { detail: userData }));

    setLoading(false);
    router.push('/questionnaire');
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20 text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <MessageCircle className="w-7 h-7" />
              </div>
              <span className="text-2xl font-bold">Arogya Homeodham</span>
            </div>

            <h1 className="text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              Your Health Journey<br />Starts Here
            </h1>
            
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Join thousands of satisfied patients who trust Arogya Homeodham for their healthcare needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Secure & Private</p>
                  <p className="text-sm text-white/70">Your data is always protected</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">24/7 Available</p>
                  <p className="text-sm text-white/70">Doctors anytime, anywhere</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Expert Doctors</p>
                  <p className="text-sm text-white/70">Verified medical professionals</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative circles */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full" />
        <div className="absolute top-24 -left-12 w-32 h-32 bg-white/10 rounded-full" />
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-10 py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md mx-auto"
        >
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Logo for mobile */}
          <div className="lg:hidden flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Arogya Homeodham</span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
            <p className="text-gray-500">Enter your details to continue your health journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              icon={<span className="text-lg">👤</span>}
              dark={false}
              required
            />

            <Input
              label="Mobile Number"
              type="tel"
              placeholder="Enter 10-digit mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              icon={<Phone className="w-5 h-5" />}
              dark={false}
              maxLength={10}
              required
            />

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
              >
                {error}
              </motion.div>
            )}

            <Button
              type="submit"
              isLoading={loading}
              className="w-full py-4 text-lg shadow-lg shadow-primary/30"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Continue to Consultation
            </Button>
          </form>

          {/* Trust indicators */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Shield className="w-4 h-4 text-primary" />
              <span>Your information is secure and encrypted</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
