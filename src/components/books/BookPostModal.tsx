import React from 'react';

export default function BookPostModal(props: { addBook: boolean; clickModal: () => void }) {
  const { addBook, clickModal } = props;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 w-96 h-64 rounded-lg shadow-lg flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold mb-4">책 추가 모달</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={clickModal}>
          {addBook ? '닫기' : ''}
        </button>
      </div>
    </div>
  );
}
