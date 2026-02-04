'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserData } from '@/types';

interface UserContextType {
  userData: UserData;
  isLoggedIn: boolean;
  hasPaid: boolean;
  updateUserData: (data: Partial<UserData>) => void;
  login: (phone: string) => void;
  logout: () => void;
  setHasPaid: (paid: boolean) => void;
}

const defaultUserData: UserData = {
  phone: '',
  name: '',
  age: '',
  symptoms: '',
  duration: '',
  allergies: '',
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasPaid, setHasPaid] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('consultancyUserData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setUserData(parsed);
        setIsLoggedIn(true);
      } catch (e) {
        console.error('Error parsing saved user data');
      }
    }

    const paidStatus = localStorage.getItem('consultancyHasPaid');
    if (paidStatus === 'true') {
      setHasPaid(true);
    }
  }, []);

  // Save to localStorage whenever userData changes
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('consultancyUserData', JSON.stringify(userData));
    }
  }, [userData, isLoggedIn]);

  const updateUserData = (data: Partial<UserData>) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  const login = (phone: string) => {
    setUserData((prev) => ({ ...prev, phone }));
    setIsLoggedIn(true);
    localStorage.setItem('consultancyUserData', JSON.stringify({ ...userData, phone }));
  };

  const logout = () => {
    setUserData(defaultUserData);
    setIsLoggedIn(false);
    setHasPaid(false);
    localStorage.removeItem('consultancyUserData');
    localStorage.removeItem('consultancyHasPaid');
  };

  const setPaid = (paid: boolean) => {
    setHasPaid(paid);
    localStorage.setItem('consultancyHasPaid', String(paid));
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        isLoggedIn,
        hasPaid,
        updateUserData,
        login,
        logout,
        setHasPaid: setPaid,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
