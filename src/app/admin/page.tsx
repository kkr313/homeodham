'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, DollarSign, Calendar, TrendingUp, 
  Download, Settings, Search, Filter, 
  CheckCircle, Clock, AlertCircle, Eye
} from 'lucide-react';
import Link from 'next/link';

// Mock data for demonstration
const mockConsultations = [
  {
    id: '1',
    name: 'Priya Sharma',
    age: 32,
    gender: 'Female',
    city: 'Ranchi',
    problem: 'Chronic headaches and migraines',
    paymentId: 'PAY123456',
    paymentStatus: 'SUCCESS',
    createdAt: '2026-02-01T10:30:00Z',
  },
  {
    id: '2',
    name: 'Rahul Verma',
    age: 45,
    gender: 'Male',
    city: 'Jamshedpur',
    problem: 'Digestive issues and acidity',
    paymentId: 'PAY123457',
    paymentStatus: 'SUCCESS',
    createdAt: '2026-02-01T11:45:00Z',
  },
  {
    id: '3',
    name: 'Anjali Singh',
    age: 28,
    gender: 'Female',
    city: 'Hazaribagh',
    problem: 'Skin rashes and allergies',
    paymentId: 'PAY123458',
    paymentStatus: 'SUCCESS',
    createdAt: '2026-02-01T14:20:00Z',
  },
  {
    id: '4',
    name: 'Amit Kumar',
    age: 55,
    gender: 'Male',
    city: 'Dhanbad',
    problem: 'Joint pain and arthritis',
    paymentId: 'PAY123459',
    paymentStatus: 'PENDING',
    createdAt: '2026-02-01T16:00:00Z',
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [consultations, setConsultations] = useState(mockConsultations);

  // Filter consultations based on search
  const filteredConsultations = consultations.filter(
    (c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.paymentId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    totalConsultations: consultations.length,
    successfulPayments: consultations.filter(c => c.paymentStatus === 'SUCCESS').length,
    totalRevenue: consultations.filter(c => c.paymentStatus === 'SUCCESS').length * 199,
    thisMonth: consultations.length,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white text-lg">🏥</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-sm text-gray-500">Arogya  Homeodham</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <Settings className="w-5 h-5 text-gray-500" />
            </button>
            <button className="flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Consultations', value: stats.totalConsultations, icon: Users, color: 'from-blue-500 to-blue-600' },
            { label: 'Successful Payments', value: stats.successfulPayments, icon: CheckCircle, color: 'from-green-500 to-green-600' },
            { label: 'Total Revenue', value: `₹${stats.totalRevenue}`, icon: DollarSign, color: 'from-primary to-primary-dark' },
            { label: 'This Month', value: stats.thisMonth, icon: Calendar, color: 'from-purple-500 to-purple-600' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6">
          {['overview', 'consultations', 'payments', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Consultations Table */}
        {activeTab === 'consultations' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* Search & Filter */}
            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by name, city, or payment ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button className="flex items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-xl text-gray-600 transition-colors">
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Patient</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Problem</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Payment</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredConsultations.map((consultation) => (
                    <tr key={consultation.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-gray-800 font-medium">{consultation.name}</p>
                          <p className="text-sm text-gray-500">{consultation.age} yrs, {consultation.gender}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{consultation.city}</td>
                      <td className="px-6 py-4">
                        <p className="text-gray-600 max-w-xs truncate">{consultation.problem}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {consultation.paymentStatus === 'SUCCESS' ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          ) : (
                            <Clock className="w-5 h-5 text-yellow-500 mr-2" />
                          )}
                          <div>
                            <p className="text-gray-800 text-sm">{consultation.paymentId}</p>
                            <p className={`text-xs ${consultation.paymentStatus === 'SUCCESS' ? 'text-green-600' : 'text-yellow-600'}`}>
                              {consultation.paymentStatus}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-500 text-sm">
                        {new Date(consultation.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <button className="p-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-lg text-primary transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredConsultations.length === 0 && (
              <div className="p-12 text-center">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No consultations found</p>
              </div>
            )}
          </motion.div>
        )}

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center"
          >
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Admin Dashboard</h2>
            <p className="text-gray-500 mb-6">
              View all consultations, manage payments, and export data from the Consultations tab.
            </p>
            <button
              onClick={() => setActiveTab('consultations')}
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors"
            >
              View All Consultations
            </button>
          </motion.div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Fee (₹)</label>
                <input
                  type="number"
                  defaultValue={199}
                  className="w-full sm:w-64 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Doctor WhatsApp Number</label>
                <input
                  type="text"
                  defaultValue="919876543210"
                  className="w-full sm:w-64 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="pt-4">
                <button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors">
                  Save Settings
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
