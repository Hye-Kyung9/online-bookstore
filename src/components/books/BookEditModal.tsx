'use client';
import axios from 'axios';
import React, { useState } from 'react';
import { Book } from '@/interface/Book.interface';

interface BookEditModalProps {
  book: Book;
  clickModal: () => void;
  updateBookInList: (updatedBook: Book) => void;
}

export default function BookEditModal({ book, clickModal, updateBookInList }: BookEditModalProps) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [description, setDescription] = useState(book.description);
  const [stock, setStock] = useState(book.stock);

  const handleSubmit = () => {
    if (!title || !author || !description || stock < 1) {
      alert('모든 필드를 올바르게 입력해주세요!');
      return;
    }

    const updatedBook: Book = { ...book, title, author, description, stock };

    // 수정된 책 정보 API 호출
    axios
      .put(`/api/books/${book.id}`, updatedBook)
      .then((res) => {
        console.log(res);
        updateBookInList(res.data); // 수정된 책 목록 갱신
        alert('책이 수정되었습니다!');
        clickModal(); // 모달 닫기
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 w-96 rounded-lg shadow-lg flex flex-col">
        <h2 className="text-xl font-bold mb-4 text-center">책 수정</h2>
        <input
          type="text"
          placeholder="책 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="text"
          placeholder="저자"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <textarea
          placeholder="설명"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="number"
          placeholder="재고 수량"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
          className="w-full p-2 border rounded-lg mb-4"
        />

        <div className="flex justify-between">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-1/2 mr-2"
            onClick={handleSubmit}>
            수정
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition w-1/2"
            onClick={clickModal}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
