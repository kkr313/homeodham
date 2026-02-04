import { NextRequest, NextResponse } from 'next/server';

// In production, use actual Razorpay SDK
// import Razorpay from 'razorpay';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency = 'INR' } = body;

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // In production, create actual Razorpay order:
    // const razorpay = new Razorpay({
    //   key_id: process.env.RAZORPAY_KEY_ID,
    //   key_secret: process.env.RAZORPAY_KEY_SECRET,
    // });
    //
    // const order = await razorpay.orders.create({
    //   amount: amount, // amount in paise
    //   currency: currency,
    //   receipt: `consultation_${Date.now()}`,
    // });

    // For demo/testing, return mock order
    const mockOrder = {
      orderId: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      amount: amount,
      currency: currency,
    };

    return NextResponse.json(mockOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create payment order' },
      { status: 500 }
    );
  }
}
