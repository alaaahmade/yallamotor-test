import { NextResponse } from 'next/server';
import { PopularCarsDATA } from '@/mock/cars';

export async function GET() {
  return NextResponse.json(PopularCarsDATA);
}
