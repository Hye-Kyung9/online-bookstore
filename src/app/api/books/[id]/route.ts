import { bookList } from '@/lib/bookList';
import { NextRequest, NextResponse } from 'next/server';

// 책 상세정보 조회
export async function GET(req: NextRequest, context: { params: { id: string } }) {
  const { id } = await context.params; // 비동기적으로 params를 받아옴
  const parsedId = Number(id);

  if (!parsedId) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const book = bookList.find((book) => book.id === parsedId);

  if (!book) {
    return NextResponse.json({ error: 'Book not found' }, { status: 404 });
  }

  return NextResponse.json(book);
}

//책 내용 수정
export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id'); // 'id' 파라미터 추출

    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const bookId = parseInt(id, 10); // ID를 정수로 변환
    const body = await req.json(); // 요청 본문에서 수정된 데이터 받기

    // 수정할 필드가 모두 존재하는지 체크
    const { title, author, stock, description } = body;
    if (!title || !author || !stock || !description) {
      return NextResponse.json({ message: '모든 필드를 채워야 합니다.' }, { status: 400 });
    }

    // 책 리스트에서 해당 ID의 책을 찾음
    const bookIndex = bookList.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) {
      return NextResponse.json({ message: '책을 찾을 수 없습니다.' }, { status: 404 });
    }

    // 책 내용 수정
    bookList[bookIndex] = {
      ...bookList[bookIndex],
      title,
      author,
      stock,
      description,
    };

    return NextResponse.json({ message: '책 내용이 성공적으로 수정되었습니다.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: '서버 오류', error: error }, { status: 500 });
  }
}

//책 삭제
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id'); // 'id' 파라미터 추출

    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const bookId = parseInt(id, 10); // ID를 정수로 변환

    // 책 리스트에서 해당 ID의 책을 찾음
    const bookIndex = bookList.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) {
      return NextResponse.json({ message: '책을 찾을 수 없습니다.' }, { status: 404 });
    }

    // 책 삭제
    bookList.splice(bookIndex, 1); //찾은 인덱스 제거

    return NextResponse.json({ message: '책이 성공적으로 삭제되었습니다.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: '서버 오류', error: error }, { status: 500 });
  }
}
