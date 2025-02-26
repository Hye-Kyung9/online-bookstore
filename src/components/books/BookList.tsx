'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { useRouter } from 'next/navigation';
import { Book } from '@/interface/Book.interface';

export default function BookList() {
  const router = useRouter();
  const [books, setBooks] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const booksPerPage = 10;

  const indexOfLastBook = currentPage * booksPerPage; //현제 페이지에서 마지막 idx
  const indexOfFirstBook = indexOfLastBook - booksPerPage; //현재페이지에서 첫번째 idx
  // const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook); //10개씩 잘라서 보여주기
  const currentBooks = books
    .filter((book) => {
      return (
        book?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book?.author?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .slice(indexOfFirstBook, indexOfLastBook);

  // 페이지네이션 버튼 클릭 시 페이지를 바꾸는 함수
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(books.length / booksPerPage);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // 검색 시 첫 페이지로 리셋
  };

  const goBookDetail = (id: number) => {
    router.push(`/books/${id}`);
  };

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
      <div className="flex justify-between pb-4">
        <h1 className="text-2xl font-bold mb-4">📚 책 목록</h1>
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      </div>
      <button className="mx-1 px-4 py-2 mb-2 border rounded-lg bg-blue-500 text-white">
        책 추가하기
      </button>

      <ul>
        {currentBooks.map((book) => (
          <li
            key={book.id}
            className="border p-2 mb-2 rounded-lg hover:bg-blue-50 cursor-pointer"
            onClick={() => goBookDetail(book.id)}>
            <strong>{book.title}</strong> - {book.author} (재고: {book.stock}권)
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-4 py-2 border rounded-lg ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white'
            }`}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
