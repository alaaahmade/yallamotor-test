import { NextResponse } from 'next/server';
import { videos } from '@/mock/videos';

export async function GET() {
  return NextResponse.json(videos);
}
