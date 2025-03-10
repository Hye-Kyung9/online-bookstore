import { bookList } from '@/lib/bookList';
import { NextRequest, NextResponse } from 'next/server';

// 책 상세정보 조회
export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    } else {
      const book = bookList.find((book) => book.id === Number(id));
      return NextResponse.json(book, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: '서버 오류', error: error }, { status: 500 });
  }
}

//책 내용 수정
export async function PUT(req: NextRequest) {
  try {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    } else {
      const body = await req.json(); // 요청 본문에서 수정된 데이터 받기
      // 수정할 필드가 모두 존재하는지 체크
      const { title, author, stock, description } = body;
      if (!title || !author || !stock || !description) {
        return NextResponse.json({ message: '모든 필드를 채워야 합니다.' }, { status: 400 });
      }

      // 책 리스트에서 해당 ID의 책을 찾음
      const bookIndex = bookList.findIndex((book) => book.id === Number(id));

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

      return NextResponse.json(
        { message: '책 내용이 성공적으로 수정되었습니다.' },
        { status: 200 },
      );
    }
  } catch (error) {
    return NextResponse.json({ message: '서버 오류', error: error }, { status: 500 });
  }
}

//책 삭제
export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    } else {
      const bookIndex = bookList.findIndex((book) => book.id === Number(id));

      if (bookIndex === -1) {
        return NextResponse.json({ message: '책을 찾을 수 없습니다.' }, { status: 404 });
      }

      // 책 삭제
      bookList.splice(bookIndex, 1); //찾은 인덱스 제거

      return NextResponse.json({ message: '책이 성공적으로 삭제되었습니다.' }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: '서버 오류', error: error }, { status: 500 });
  }
}
