import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Razorpay webhook secret (should be stored in environment variables)
const RAZORPAY_WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || 'your_webhook_secret';

interface PaymentWebhookPayload {
  event: string;
  payload: {
    payment: {
      entity: {
        id: string;
        order_id: string;
        amount: number;
        currency: string;
        status: string;
        method: string;
        email: string;
        contact: string;
        notes: {
          name?: string;
          age?: string;
          gender?: string;
          city?: string;
          problem?: string;
        };
      };
    };
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', RAZORPAY_WEBHOOK_SECRET)
      .update(body)
      .digest('hex');

    if (signature !== expectedSignature) {
      console.error('Invalid webhook signature');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    const payload: PaymentWebhookPayload = JSON.parse(body);

    // Handle different payment events
    switch (payload.event) {
      case 'payment.success':
        await handlePaymentSuccess(payload.payload.payment.entity);
        break;
      
      case 'payment.failed':
        await handlePaymentFailure(payload.payload.payment.entity);
        break;
      
      case 'payment.captured':
        await handlePaymentCaptured(payload.payload.payment.entity);
        break;
      
      default:
        console.log(`Unhandled event: ${payload.event}`);
    }

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handlePaymentSuccess(entity: PaymentWebhookPayload['payload']['payment']['entity']) {
  console.log('Payment successful:', entity.id);
  
  // Store payment data (in production, save to database)
  const paymentData = {
    paymentId: entity.id,
    orderId: entity.order_id,
    amount: entity.amount / 100, // Convert from paise to rupees
    currency: entity.currency,
    status: entity.status,
    method: entity.method,
    customerEmail: entity.email,
    customerPhone: entity.contact,
    notes: entity.notes,
    createdAt: new Date().toISOString(),
  };

  // In production, save to Firestore or database:
  // await firestore.collection('payments').doc(entity.id).set(paymentData);

  console.log('Payment data saved:', paymentData);
}

async function handlePaymentFailure(entity: PaymentWebhookPayload['payload']['payment']['entity']) {
  console.log('Payment failed:', entity.id);
  
  // Store failed payment data
  const paymentData = {
    paymentId: entity.id,
    orderId: entity.order_id,
    amount: entity.amount / 100,
    currency: entity.currency,
    status: 'FAILED',
    method: entity.method,
    customerEmail: entity.email,
    customerPhone: entity.contact,
    createdAt: new Date().toISOString(),
  };

  // In production, save to database
  console.log('Failed payment recorded:', paymentData);
}

async function handlePaymentCaptured(entity: PaymentWebhookPayload['payload']['payment']['entity']) {
  console.log('Payment captured:', entity.id);
  
  // Payment was captured successfully
  await handlePaymentSuccess(entity);
}
