// Consultation Fee
export const CONSULTANCY_CHARGE = 149; // INR
export const CONSULTANCY_CHARGE_DISPLAY = '₹149';

// Doctor Information
export const DOCTOR_INFO = {
  name: 'Dr. Vinay Kumar Singh',
  title: 'Electro Homeopath',
  qualifications: 'B.H.E.M.S (Ranchi)',
  registrationNumber: '',
  experience: '25+ Years',
  clinic: {
    name: 'Arogya  Homeodham',
    address: 'At Hariwanspur, PO Warishpur, Dist. Vaishali, Bihar',
  },
  availability: {
    days: 'Mon - Sat',
    timing: '8:00 AM - 12:00 PM & 4:00 PM - 6:00 PM',
    closed: 'Sunday Closed',
  },
  whatsappNumber: '919430649068',
  consultationFee: CONSULTANCY_CHARGE,
};

// WhatsApp Configuration
export const DOCTOR_WHATSAPP_NUMBER = DOCTOR_INFO.whatsappNumber;

// Site Information
export const SITE_NAME = 'Arogya  Homeodham';
export const SITE_TAGLINE = 'Expert Homeopathic Consultations';
export const SITE_EMAIL = 'arogyahomiyodham@gmail.com';
export const SITE_URL = 'www.arogyahomeodham.com';

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Doctors', href: '/#doctor' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Contact', href: '/#contact' },
];

// Features
export const FEATURES = [
  {
    icon: '🩺',
    title: 'Expert Doctor',
    description: 'Consult with Dr. Vinay Kumar Singh, an experienced Electro Homeopath.',
  },
  {
    icon: '⏰',
    title: 'Flexible Timing',
    description: 'Visit us between 8 AM - 12 PM or 4 PM - 6 PM.',
  },
  {
    icon: '💬',
    title: 'WhatsApp Consultation',
    description: 'Easy communication via WhatsApp for seamless doctor-patient interaction.',
  },
  {
    icon: '🔒',
    title: 'Secure & Private',
    description: 'Your health information is kept completely confidential.',
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Patient',
    content: 'The consultation was seamless. Got expert advice within minutes through WhatsApp.',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    role: 'Patient',
    content: 'Very convenient! No waiting rooms, just quick and professional medical advice.',
    rating: 5,
  },
  {
    name: 'Anjali Singh',
    role: 'Patient',
    content: 'The doctor understood my symptoms perfectly and provided great guidance.',
    rating: 5,
  },
];

// Services
export const SERVICES = [
  {
    title: 'General Consultation',
    description: 'Discuss general health concerns with our experienced doctor.',
    price: CONSULTANCY_CHARGE_DISPLAY,
  },
  {
    title: 'Symptom Analysis',
    description: 'Get detailed analysis of your symptoms and next steps.',
    price: CONSULTANCY_CHARGE_DISPLAY,
  },
  {
    title: 'Health Advice',
    description: 'Receive personalized health advice and lifestyle recommendations.',
    price: CONSULTANCY_CHARGE_DISPLAY,
  },
];

// Consent Text (GDPR-style)
export const CONSENT_TEXT = `
I consent to sharing my health information for consultation purposes. 
I understand this is a preliminary consultation and not a substitute for in-person medical advice. 
My data will be processed in accordance with the privacy policy.
`;

// Payment Disclaimer
export const PAYMENT_DISCLAIMER = `
This is a minimum consultation fee for preliminary assessment. 
Payment does not guarantee a complete cure. 
Please consult in person for serious conditions.
`;
