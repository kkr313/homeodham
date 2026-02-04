# Aarogya Homeodham - Medical Consultancy App

A complete Electro Homeopathy medical consultancy application with WhatsApp integration and Razorpay payment gateway.

## Features

- 🚀 **Rich Landing Page** - Beautiful, responsive landing page with hero section and doctor profile
- 📱 **Mobile Login** - Simple mobile number entry (no OTP required)
- 📋 **Health Questionnaire** - Collect patient details (name, age, gender, symptoms, duration, previous consultation)
- 💰 **Consultancy Charges** - Display consultation fees (₹149) with detailed breakdown
- 💳 **Razorpay Payment** - Secure payment integration
- 💬 **WhatsApp Consultation** - Redirect to WhatsApp with pre-filled patient details

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Payment**: Razorpay
- **State Management**: React Hooks + LocalStorage

## Project Structure

```
homeoyodham/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── login/
│   │   │   └── page.tsx          # Mobile login
│   │   ├── questionnaire/
│   │   │   └── page.tsx          # Health form
│   │   ├── charge/
│   │   │   └── page.tsx          # Charge display
│   │   ├── payment/
│   │   │   └── page.tsx          # Payment page
│   │   ├── success/
│   │   │   └── page.tsx          # Success + WhatsApp redirect
│   │   └── api/
│   │       ├── create-order/     # Razorpay order creation
│   │       └── payment/webhook/   # Payment webhook handler
│   ├── components/
│   │   ├── ui/                   # Reusable UI components
│   │   ├── landing/              # Landing page sections
│   │   └── shared/               # Shared components
│   ├── context/                  # React Context
│   ├── lib/                      # Utilities & constants
│   └── types/                    # TypeScript types
├── public/
│   └── img/                      # Images and assets
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Configure your environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id
   NEXT_PUBLIC_DOCTOR_WHATSAPP=919876543210
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## User Flow

1. **Landing Page** → User sees rich content and doctor profile, clicks "Start Consultation"
2. **Login** → Enters name and mobile number
3. **Questionnaire** → Fills health details (name, age, gender, symptoms, duration, previous consultation)
4. **Charge** → Views consultation fee (₹149) and what's included
5. **Payment** → Completes payment via Razorpay
6. **Success** → Auto-redirects to WhatsApp with pre-filled message after 5 seconds

## Doctor Information

- **Dr. Vinay Kumar Singh**
- B.H.E.M.S (Ranchi), Electro Homeopath
- 25+ years experience
- **Clinic**: Aarogya Homeodham, At Hariwanspur, PO Warishpur, Dist. Vaishali, Bihar

## Configuration

### Razorpay Setup

1. Create a Razorpay account at https://razorpay.com
2. Get your API keys from the dashboard
3. Add keys to `.env.local`

### WhatsApp Setup

1. Get the doctor's WhatsApp number with country code
2. Add to `NEXT_PUBLIC_DOCTOR_WHATSAPP` in `.env.local`

## Customization

- **Consultancy Fee**: Edit `CONSULTANCY_CHARGE` in `src/lib/constants.ts`
- **Doctor Number**: Edit `DOCTOR_WHATSAPP_NUMBER` in `src/lib/constants.ts`
- **Colors**: Modify `tailwind.config.ts` for custom colors
- **Content**: Edit text in respective page components

## Production Deployment

1. Set up environment variables in your deployment platform
2. Build the app:
   ```bash
   npm run build
   ```
3. Start the production server:
   ```bash
   npm start
   ```

## Notes

- The payment flow uses Razorpay's test mode by default
- WhatsApp redirect works with actual WhatsApp (mobile/web app)
- User data is stored in localStorage for persistence
- Admin panel available at `/admin` for viewing consultations

## License

MIT
