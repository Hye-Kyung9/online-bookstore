import { bookList } from '@/lib/bookList';
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';

//책 리스트 조회
export async function GET() {
  return NextResponse.json(bookList);
}

//새로운 책 등록
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { title, author, stock, description } = req.body;

  if (!title || !author || !stock || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newBook = {
    id: bookList.length + 1,
    title,
    author,
    stock,
    description,
  };

  bookList.push(newBook);
  return res.status(201).json(newBook);
}
