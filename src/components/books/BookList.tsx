'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
  stock: number;
};

export default function BookLisk() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get('/api/books')
      .then((res) => {
        console.log(res);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📚 책 목록</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="border p-2 mb-2 rounded-lg">
            <strong>{book.title}</strong> - {book.author} (재고: {book.stock}권)
          </li>
        ))}
      </ul>
    </div>
  );
}
