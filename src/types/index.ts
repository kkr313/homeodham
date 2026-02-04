export interface UserData {
  phone: string;
  name: string;
  age: string;
  symptoms: string;
  duration: string;
  allergies: string;
}

export interface PaymentData {
  orderId: string;
  amount: number;
  currency: string;
  paymentId?: string;
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}
