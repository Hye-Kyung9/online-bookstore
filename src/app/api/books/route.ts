import { NextResponse } from 'next/server';

const books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', stock: 10 },
  { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', stock: 5 },
  { id: 3, title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', stock: 8 },
];

export async function GET() {
  return NextResponse.json(books);
}
