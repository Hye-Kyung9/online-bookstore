import { bookList } from '@/lib/bookList';
import { NextRequest, NextResponse } from 'next/server';
// import { NextApiRequest, NextApiResponse } from 'next';

//책 리스트 조회
export async function GET() {
  return NextResponse.json(bookList);
}

//새로운 책 등록
export async function POST(req: NextRequest) {
  try {
    const { title, author, stock, description } = await req.json();

    if (!title || !author || !stock || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newBook = {
      id: bookList.length + 1,
      title,
      author,
      stock,
      description,
    };

    bookList.push(newBook);

    return NextResponse.json(newBook, { status: 201 });
  } catch (error) {
    console.error('책 추가 중 오류 발생:', error); // 오류 로그 출력
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
