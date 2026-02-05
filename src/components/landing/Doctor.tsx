'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Clock, Heart, Shield, MapPin, Phone, Calendar, MessageCircle } from 'lucide-react';
import { CONSULTANCY_CHARGE } from '@/lib/constants';

export function DoctorSection() {
  const doctor = {
    name: 'Dr. Vinay Kumar Singh',
    title: 'Electro Homeopath',
    qualifications: 'B.H.E.M.S (Ranchi)',
    profession: 'Homeopathic Physician',
    experience: '25+ Years',
    rating: 4.9,
    reviews: 50000,
    image: '👨‍⚕️',
    clinic: {
      name: 'Arogya  Homeodham',
      address: 'At Hariwanspur, PO Warishpur, Dist. Vaishali, Bihar',
    },
    availability: {
      days: 'Mon - Sat',
      morning: '8:00 AM - 12:00 PM',
      evening: '4:00 PM - 6:00 PM',
      closed: 'Sunday Closed',
    },
    contact: '9430649068',
    consultationFee: CONSULTANCY_CHARGE,
    specialties: [
      'Electro Homeopathy',
      'Chronic Disease Management',
      'Skin Disorders',
      'Respiratory Ailments',
      'Digestive Health',
      "Women's Wellness"
    ],
    achievements: [
      { icon: Award, title: '25+', subtitle: 'Years Experience' },
      { icon: Clock, title: 'Years', subtitle: 'of Practice' },
      { icon: Heart, title: 'Happy', subtitle: 'Patients' },
      { icon: Shield, title: 'Certified', subtitle: 'Expert' }
    ],
    bio: 'Dr. Vinay Kumar Singh is a highly experienced Electro Homeopath with over 25 years of clinical practice. He specializes in Electro Homeopathy treatments and is dedicated to providing personalized healthcare solutions through modern telemedicine platforms, making quality healthcare accessible to everyone.'
  };

  return (
    <section id="about" className="py-12 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cta/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="badge-elegant mb-4">
            Meet Our Expert
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-heading mb-6">
            Your Health is in <span className="text-gradient-primary">Good Hands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with our certified medical professionals dedicated to your wellbeing
          </p>
        </motion.div>

        {/* Doctor Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-elegant p-6 mb-8"
        >
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Doctor Image */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-48 h-48 mx-auto bg-white rounded-full flex items-center justify-center mb-4 relative overflow-hidden shadow-lg">
                  <img 
                    src="/img/profile_dp.png"
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-white">
                    <Star className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full whitespace-nowrap shadow-md">
                  {doctor.experience} Experience
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center justify-center mt-6 space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-800 font-semibold">{doctor.rating}</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">{doctor.reviews.toLocaleString()}+ Happy Patients</p>

              {/* WhatsApp Badge */}
              <div className="mt-4 inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full">
                <MessageCircle className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-green-600 text-sm font-medium">WhatsApp Consultation</span>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
              <p className="text-primary font-medium text-lg mb-2">{doctor.title} - {doctor.profession} - {doctor.qualifications}</p>
              <p className="text-gray-600 leading-relaxed mb-4">{doctor.bio}</p>

              {/* Clinic Information */}
              <div className="bg-white rounded-xl p-4 mb-4 border border-gray-200">
                {/* Mobile: Stacked | Web: 2x2 Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 lg:gap-x-4">
                  {/* Address */}
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-sm">{doctor.clinic.name}</p>
                      <p className="text-gray-500 text-xs">{doctor.clinic.address}</p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-blue-600 font-medium text-sm">{doctor.contact}</span>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Clock className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium text-sm">{doctor.availability.days}</p>
                      <p className="text-gray-500 text-xs">{doctor.availability.morning} & {doctor.availability.evening}</p>
                    </div>
                  </div>
                  
                  {/* Sunday Closed */}
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Calendar className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-red-500 font-medium text-sm">{doctor.availability.closed}</span>
                  </div>
                </div>
              </div>

              {/* Consultation Fee */}
              <div className="flex items-center justify-between bg-gradient-to-r from-primary/10 to-cta/10 border border-primary/20 rounded-xl p-4 mb-4">
                <div>
                  <p className="text-gray-500 text-sm">Consultation Fee</p>
                  <p className="text-3xl font-bold text-gray-800">₹{doctor.consultationFee}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-600 text-sm font-medium">✓ WhatsApp Chat</p>
                  <p className="text-gray-500 text-sm">15-30 minutes</p>
                </div>
              </div>

              {/* Specialties */}
              <p className="text-gray-600 text-sm mb-3">Specialties:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {doctor.specialties.map((specialty, index) => (
                  <div 
                    key={index}
                    className="flex items-center px-3 py-2 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                    <span className="text-sm text-gray-600">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {doctor.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-primary/10 via-white to-primary/5 rounded-2xl p-5 text-center h-full group hover:shadow-xl hover:-translate-y-1 border border-primary/20 transition-all duration-300">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-primary/15 to-primary/5 rounded-full flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                  <achievement.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-1">{achievement.title}</h4>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">{achievement.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="card-elegant p-8 max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-cta/10 border-primary/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Consultation?
            </h3>
            <p className="text-gray-600 mb-6">
              Get expert medical advice from the comfort of your home. 
              Book your consultation now and take the first step towards better health.
            </p>
            <a 
              href="/login"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              <span className="text-lg mr-2">💬</span>
              Consult with {doctor.name}
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Consultation Fee: ₹{doctor.consultationFee} | Payment Required Before Chat
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
