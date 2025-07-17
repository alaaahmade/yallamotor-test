import { NextResponse } from 'next/server';
import { reviewsCars } from '@/mock/cars';

export async function GET() {
  return NextResponse.json(reviewsCars);
}
