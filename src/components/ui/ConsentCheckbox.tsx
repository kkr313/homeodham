'use client';

import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';
import { CONSENT_TEXT } from '@/lib/constants';

interface ConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
}

export function ConsentCheckbox({ checked, onChange, required = true }: ConsentCheckboxProps) {
  return (
    <div className="space-y-3">
      <label className="flex items-start cursor-pointer group">
        <div className="relative flex items-start">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            required={required}
            className="sr-only peer"
          />
          <div className={`w-5 h-5 mt-0.5 mr-3 rounded border-2 flex items-center justify-center transition-all duration-200 ${
            checked 
              ? 'bg-amber-500 border-amber-500' 
              : 'border-gray-500 peer-hover:border-amber-400'
          }`}>
            {checked && (
              <svg 
                className="w-3 h-3 text-white" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="3" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <div className="text-sm">
            <span className="text-gray-300">
              I agree to the <span className="text-amber-400 hover:underline">Terms of Service</span> and <span className="text-amber-400 hover:underline">Privacy Policy</span>
            </span>
          </div>
        </div>
      </label>

      {/* Consent Details */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
        <div className="flex items-start">
          <Shield className="w-5 h-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <p className="text-sm text-amber-200 font-medium mb-2">Data Usage & Privacy</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              {CONSENT_TEXT}
            </p>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <p className="text-sm text-red-200 font-medium mb-1">Important Disclaimer</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              This is a preliminary online consultation and not a substitute for in-person medical examination. 
              For emergency or serious conditions, please visit a hospital or consult a doctor in person immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
