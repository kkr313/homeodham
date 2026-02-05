'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown, CheckCircle, MessageCircle, User, Heart, Calendar, FileText, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CONSENT_TEXT } from '@/lib/constants';

const questions = [
  {
    id: 'age',
    question: 'What is your age?',
    placeholder: 'Enter your age in years',
    type: 'number',
    icon: Calendar
  },
  {
    id: 'height',
    question: 'What is your height?',
    placeholder: 'Enter your height',
    type: 'height',
    icon: ArrowUp
  },
  {
    id: 'weight',
    question: 'What is your weight?',
    placeholder: 'Enter your weight',
    type: 'weight',
    icon: ArrowDown
  },
  {
    id: 'gender',
    question: 'What is your gender?',
    placeholder: 'Select your gender',
    type: 'select',
    options: ['Male', 'Female', 'Other', 'Prefer not to say'],
    icon: User
  },
  {
    id: 'symptoms',
    question: 'What symptoms are you experiencing?',
    placeholder: 'Describe your symptoms in detail...',
    type: 'textarea',
    icon: Heart
  },
  {
    id: 'duration',
    question: 'How long have you been experiencing these symptoms?',
    placeholder: 'Enter duration',
    type: 'duration',
    icon: Clock
  },
  {
    id: 'previous',
    question: 'Have you consulted any doctor for this before?',
    type: 'select',
    options: ['Yes', 'No'],
    icon: FileText
  }
];

export default function QuestionnairePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [showConsent, setShowConsent] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('consultpro_user');
    if (!savedUser) {
      router.push('/login');
      return;
    }
    
    // Auto-fill name from login data
    if (savedUser) {
      const user = JSON.parse(savedUser);
      if (user.name) {
        setAnswers(prev => ({ ...prev, name: user.name }));
      }
    }
    
    const savedHealthData = localStorage.getItem('consultpro_health_data');
    if (savedHealthData) {
      const data = JSON.parse(savedHealthData);
      setAnswers(prev => ({ ...prev, ...data }));
    }
  }, [router]);

  const handleAnswer = (answer: string) => {
    const currentQ = questions[currentStep];
    if (!currentQ) return;
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: answer
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowConsent(true);
    }
  };

  const handleBack = () => {
    if (showConsent) {
      setShowConsent(false);
    } else if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!consentGiven) {
      alert('Please agree to the terms and conditions');
      return;
    }

    setLoading(true);
    
    // Save health data
    localStorage.setItem('consultpro_health_data', JSON.stringify(answers));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    router.push('/charge');
  };

  const currentQuestion = questions[currentStep];
  const Icon = currentQuestion?.icon || User;
  const progress = questions.length > 0 ? ((currentStep + 1) / questions.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {!showConsent ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>Question {currentStep + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-primary h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  {currentQuestion?.question || 'Loading...'}
                </h1>
                <p className="text-gray-500 text-sm">Your answer helps us understand your health better</p>
              </div>

              {/* Input */}
              <div className="mb-8">
                {currentQuestion?.type === 'select' ? (
                  <div className="grid grid-cols-2 gap-4">
                    {currentQuestion.options?.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                          answers[currentQuestion?.id] === option
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 hover:border-primary/50 text-gray-700'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : currentQuestion?.type === 'textarea' ? (
                  <textarea
                    value={answers[currentQuestion?.id] || ''}
                    onChange={(e) => handleAnswer(e.target.value)}
                    placeholder={currentQuestion?.placeholder}
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-all duration-200 min-h-[150px] resize-none"
                  />
                ) : currentQuestion?.type === 'height' ? (
                  <div className="space-y-4">
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <input
                          type="number"
                          value={answers[currentQuestion?.id]?.split(' ')[0] || ''}
                          onChange={(e) => {
                            const unit = answers[currentQuestion?.id]?.split(' ')[1] || 'ft';
                            handleAnswer(`${e.target.value} ${unit}`);
                          }}
                          placeholder="Enter height"
                          className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-all duration-200 text-lg"
                        />
                      </div>
                      <div className="flex rounded-xl border-2 border-gray-200 overflow-hidden">
                        <button
                          type="button"
                          onClick={() => {
                            const value = answers[currentQuestion?.id]?.split(' ')[0] || '';
                            handleAnswer(`${value} ft`);
                          }}
                          className={`px-4 py-4 text-sm font-medium transition-all duration-200 ${
                            (answers[currentQuestion?.id] || '').endsWith('ft')
                              ? 'bg-primary text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          ft
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const value = answers[currentQuestion?.id]?.split(' ')[0] || '';
                            handleAnswer(`${value} cm`);
                          }}
                          className={`px-4 py-4 text-sm font-medium transition-all duration-200 ${
                            (answers[currentQuestion?.id] || '').endsWith('cm')
                              ? 'bg-primary text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          cm
                        </button>
                      </div>
                    </div>
                  </div>
                ) : currentQuestion?.type === 'weight' ? (
                  <div className="space-y-4">
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <input
                          type="number"
                          value={answers[currentQuestion?.id]?.split(' ')[0] || ''}
                          onChange={(e) => {
                            handleAnswer(`${e.target.value} kg`);
                          }}
                          placeholder="Enter weight"
                          className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-all duration-200 text-lg"
                        />
                      </div>
                      <div className="flex items-center justify-center px-4 bg-gray-100 rounded-xl border-2 border-gray-200">
                        <span className="text-gray-700 font-medium">kg</span>
                      </div>
                    </div>
                  </div>
                ) : currentQuestion?.type === 'duration' ? (
                  <div className="space-y-4">
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <input
                          type="number"
                          value={answers[currentQuestion?.id]?.split(' ')[0] || ''}
                          onChange={(e) => {
                            const unit = answers[currentQuestion?.id]?.split(' ')[1] || 'days';
                            handleAnswer(`${e.target.value} ${unit}`);
                          }}
                          placeholder="Enter duration"
                          className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-all duration-200 text-lg"
                        />
                      </div>
                      <div className="flex rounded-xl border-2 border-gray-200 overflow-hidden">
                        <button
                          type="button"
                          onClick={() => {
                            const value = answers[currentQuestion?.id]?.split(' ')[0] || '';
                            handleAnswer(`${value} days`);
                          }}
                          className={`px-3 py-4 text-xs font-medium transition-all duration-200 ${
                            (answers[currentQuestion?.id] || '').includes('days')
                              ? 'bg-primary text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          Days
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const value = answers[currentQuestion?.id]?.split(' ')[0] || '';
                            handleAnswer(`${value} weeks`);
                          }}
                          className={`px-3 py-4 text-xs font-medium transition-all duration-200 ${
                            (answers[currentQuestion?.id] || '').includes('weeks')
                              ? 'bg-primary text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          Weeks
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const value = answers[currentQuestion?.id]?.split(' ')[0] || '';
                            handleAnswer(`${value} months`);
                          }}
                          className={`px-3 py-4 text-xs font-medium transition-all duration-200 ${
                            (answers[currentQuestion?.id] || '').includes('months')
                              ? 'bg-primary text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          Months
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const value = answers[currentQuestion?.id]?.split(' ')[0] || '';
                            handleAnswer(`${value} years`);
                          }}
                          className={`px-3 py-4 text-xs font-medium transition-all duration-200 ${
                            (answers[currentQuestion?.id] || '').includes('years')
                              ? 'bg-primary text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          Years
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <input
                    type={currentQuestion?.type || 'text'}
                    value={answers[currentQuestion?.id] || ''}
                    onChange={(e) => handleAnswer(e.target.value)}
                    placeholder={currentQuestion?.placeholder}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && currentQuestion?.type !== 'textarea') {
                        handleNext();
                      }
                    }}
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-all duration-200 text-lg"
                  />
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!answers[currentQuestion?.id]}
                >
                  {currentStep === questions.length - 1 ? 'Review' : 'Next'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="consent"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Consent Form */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Review Your Information
                </h2>
                
                <div className="space-y-4 mb-6">
                  {/* User Info */}
                  <div className="border-b border-gray-100 pb-4">
                    <p className="text-sm text-gray-500 mb-1">Name</p>
                    <p className="text-gray-800 font-medium">{answers.name || 'Not provided'}</p>
                  </div>
                  {/* Questionnaire Answers */}
                  {questions.map((q) => (
                    <div key={q.id} className="border-b border-gray-100 pb-4">
                      <p className="text-sm text-gray-500 mb-1">{q.question}</p>
                      <p className="text-gray-800 font-medium">{answers[q.id] || 'Not answered'}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-600 mb-4">{CONSENT_TEXT}</p>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consentGiven}
                      onChange={(e) => setConsentGiven(e.target.checked)}
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="ml-3 text-gray-700">I agree to the terms and conditions</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button onClick={handleSubmit} isLoading={loading}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Continue to Payment
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
