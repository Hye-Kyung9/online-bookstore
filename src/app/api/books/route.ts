import { bookList } from '@/lib/bookList';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(bookList);
}
