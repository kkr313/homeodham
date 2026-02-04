'use client';

import React, { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  dark?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, dark = true, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className={`block text-sm font-medium mb-1.5 ${dark ? 'text-gray-700' : 'text-gray-700'}`}>
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              'w-full px-4 py-3 rounded-lg border transition-all duration-200',
              dark
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-amber-500'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-primary-500',
              'focus:outline-none focus:ring-2 focus:border-transparent',
              icon && 'pl-10',
              error && 'border-red-500 focus:ring-red-500',
              props.disabled && 'bg-gray-700 cursor-not-allowed opacity-50',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
