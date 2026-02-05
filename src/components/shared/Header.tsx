'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, MessageCircle, ChevronDown, User, LogOut, Calendar } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const isLandingPage = pathname === '/';

  // Function to check login status from localStorage
  const checkLoginStatus = () => {
    const savedUser = localStorage.getItem('consultpro_user');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        setIsLoggedIn(true);
        setUserData(parsed);
      } catch (e) {
        setIsLoggedIn(false);
        setUserData(null);
      }
    } else {
      setIsLoggedIn(false);
      setUserData(null);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check login status on mount
    checkLoginStatus();

    // Listen for custom login event from same window
    const handleUserLoggedIn = (e: Event) => {
      checkLoginStatus();
    };
    window.addEventListener('userLoggedIn', handleUserLoggedIn);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('userLoggedIn', handleUserLoggedIn);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('consultpro_user');
    localStorage.removeItem('consultpro_health_data');
    localStorage.removeItem('consultpro_service');
    localStorage.removeItem('consultpro_payment_status');
    setIsLoggedIn(false);
    setUserData(null);
    window.location.href = '/';
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img src="/img/logo.png" alt="Arogya Homeodham" className="h-32 w-auto object-contain" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Only show on landing page */}
          {isLandingPage && (
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 text-gray-600 hover:text-primary font-medium transition-all duration-200 rounded-lg hover:bg-gray-100 group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </nav>
          )}

          {/* CTA & User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                {/* User Avatar Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-3 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 border border-gray-200">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {userData?.name?.charAt(0) || 'U'}
                      </span>
                    </div>
                    <span className="text-gray-700 font-medium">{userData?.name?.split(' ')[0] || 'User'}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 top-full mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 overflow-hidden">
                      <div className="p-4 border-b border-gray-100">
                        <p className="text-gray-800 font-medium">{userData?.name}</p>
                        <p className="text-gray-500 text-sm">{userData?.mobile}</p>
                      </div>
                      <div className="p-2">
                        <Link href="/questionnaire" className="flex items-center px-4 py-3 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors">
                          <Calendar className="w-4 h-4 mr-3 text-primary" />
                          My Consultation
                        </Link>
                        <button onClick={handleLogout} className="flex items-center w-full px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors">
                          <LogOut className="w-4 h-4 mr-3 text-red-500" />
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl shadow-lg shadow-primary/30 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Started
                </motion.button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-3 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-600" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="py-4 space-y-2 border-t border-gray-100 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-3 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                {isLoggedIn ? (
                  <div className="space-y-2">
                    <div className="flex items-center px-4 py-3 bg-primary/10 rounded-lg">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold">
                          {userData?.name?.charAt(0) || 'U'}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">{userData?.name || 'User'}</p>
                        <p className="text-gray-500 text-sm">{userData?.mobile}</p>
                      </div>
                    </div>
                    <Link
                      href="/questionnaire"
                      className="flex items-center px-4 py-3 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Calendar className="w-5 h-5 mr-3 text-primary" />
                      My Consultation
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <LogOut className="w-5 h-5 mr-3" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="block px-4 py-3 bg-primary text-white text-center font-semibold rounded-lg mt-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                )}}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
