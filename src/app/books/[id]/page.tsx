'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Book } from '@/interface/Book.interface';
import { useParams } from 'next/navigation';

export default function BookDetail() {
  const [book, setBook] = useState<Book>();
  const { id } = useParams(); // useParams 훅을 통해 동적 경로 파라미터(id)에 접근

  useEffect(() => {
    axios
      .get(`/api/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-5">👀 책 정보 상세</h1>
      <div className="p-4 border rounded shadow-md w-full max-w-2xl">
        <h1 className="text-xl font-bold">제목 : {book?.title}</h1>
        <p className="text-gray-600">저자 : {book?.author}</p>
        <p className="mt-4">재고 : {book?.stock}</p>
        <p className="mt-4">설명 : {book?.description}</p>
      </div>
    </div>
  );
}
