import { NextResponse } from 'next/server';

// Mock data for demonstration
const mockConsultations = [
  {
    id: '1',
    name: 'Priya Sharma',
    age: 32,
    gender: 'Female',
    city: 'Ranchi',
    phone: '9876543210',
    problem: 'Chronic headaches and migraines',
    duration: '2-4 weeks',
    medicalHistory: 'None',
    currentMedications: 'None',
    allergies: 'None',
    lifestyle: 'Sedentary',
    stressLevel: 'High',
    paymentId: 'PAY123456',
    paymentStatus: 'SUCCESS',
    amount: 199,
    createdAt: '2026-02-01T10:30:00Z',
  },
  {
    id: '2',
    name: 'Rahul Verma',
    age: 45,
    gender: 'Male',
    city: 'Jamshedpur',
    phone: '9876543211',
    problem: 'Digestive issues and acidity',
    duration: '1-3 months',
    medicalHistory: 'Diabetes',
    currentMedications: 'Metformin',
    allergies: 'Penicillin',
    lifestyle: 'Moderate',
    stressLevel: 'Moderate',
    paymentId: 'PAY123457',
    paymentStatus: 'SUCCESS',
    amount: 199,
    createdAt: '2026-02-01T11:45:00Z',
  },
];

export async function GET() {
  try {
    // Generate CSV content
    const headers = [
      'ID',
      'Name',
      'Age',
      'Gender',
      'City',
      'Phone',
      'Problem',
      'Duration',
      'Medical History',
      'Current Medications',
      'Allergies',
      'Lifestyle',
      'Stress Level',
      'Payment ID',
      'Payment Status',
      'Amount',
      'Created At',
    ];

    const rows = mockConsultations.map((c) => [
      c.id,
      c.name,
      c.age.toString(),
      c.gender,
      c.city,
      c.phone,
      c.problem,
      c.duration,
      c.medicalHistory,
      c.currentMedications,
      c.allergies,
      c.lifestyle,
      c.stressLevel,
      c.paymentId,
      c.paymentStatus,
      c.amount.toString(),
      new Date(c.createdAt).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n');

    // Return CSV file
    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="consultations-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to export data' },
      { status: 500 }
    );
  }
}
