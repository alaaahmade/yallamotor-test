import { NextResponse } from 'next/server';
import { faqs } from '@/mock/cars';

export async function GET() {
  return NextResponse.json(faqs);
}
