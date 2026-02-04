import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  // Add +91 prefix if not present
  if (cleaned.length === 10) {
    return `+91${cleaned}`;
  }
  return phone;
}

export function validatePhoneNumber(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10 && cleaned.length <= 15;
}

export function generateWhatsAppMessage(userData: {
  name: string;
  age: string;
  symptoms: string;
  duration: string;
  allergies: string;
}): string {
  return `Hi, I would like to consult with a doctor.

*My Details:*
- Name: ${userData.name}
- Age: ${userData.age}
- Symptoms: ${userData.symptoms}
- Duration: ${userData.duration}
- Allergies: ${userData.allergies || 'None'}

Please connect me with a doctor. Thank you!`;
}
