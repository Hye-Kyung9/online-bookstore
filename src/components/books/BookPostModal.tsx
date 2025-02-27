'use client';
import axios from 'axios';
import React, { useState } from 'react';

export default function BookPostModal(props: {
  addBook: boolean;
  clickModal: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addBookToList: (book: any) => void;
}) {
  const { addBook, clickModal, addBookToList } = props;

  // 입력값 상태 관리
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState(1);

  const clickAddBook = () => {
    if (!title || !author || !description || stock < 1) {
      alert('모든 필드를 올바르게 입력해주세요!');
      return;
    }

    axios
      .post('/api/books', { title, author, description, stock })
      .then((res) => {
        console.log('응답 데이터:', res.data);
        alert('책이 추가되었습니다!');
        addBookToList(res.data); // 서버에서 받은 새 책을 목록에 추가
        clickModal(); // 책 추가 후 모달 닫기
      })
      .catch((err) => {
        console.error('에러 발생:', err);
      });
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 w-96 rounded-lg shadow-lg flex flex-col">
        <h2 className="text-xl font-bold mb-4 text-center">책 추가</h2>

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
            onClick={clickAddBook}>
            추가
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition w-1/2"
            onClick={clickModal}>
            {addBook && '닫기'}
          </button>
        </div>
      </div>
    </div>
  );
}
