'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { useRouter } from 'next/navigation';
import { Book } from '@/interface/Book.interface';
import BookPostModal from './BookPostModal';
import BookEditModal from './BookEditModal'; // 수정 모달 import

export default function BookList() {
  const router = useRouter();
  const [books, setBooks] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPostModal, setShowPostModal] = useState(false); // 책 추가 모달
  const [showEditModal, setShowEditModal] = useState(false); // 책 수정 모달
  const [bookToEdit, setBookToEdit] = useState<Book | null>(null); // 수정할 책 정보 저장

  const handlePostModalToggle = () => {
    setShowPostModal((prev) => !prev);
  };

  const handleEditModalToggle = () => {
    setShowEditModal((prev) => !prev);
  };

  const handleEditBook = (book: Book) => {
    setBookToEdit(book); // 수정할 책 정보를 설정
    handleEditModalToggle(); // 수정 모달 열기
  };

  const booksPerPage = 10;

  const indexOfLastBook = currentPage * booksPerPage; //현재 페이지에서 마지막 idx
  const indexOfFirstBook = indexOfLastBook - booksPerPage; //현재 페이지에서 첫번째 idx
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

  const handleDeleteBook = (id: number) => {
    // 삭제 API 호출 및 삭제된 책 목록 업데이트
    axios
      .delete(`/api/books/${id}`)
      .then(() => {
        setBooks(books.filter((book) => book.id !== id));
        alert('삭제되었습니다.');
      })
      .catch((err) => console.log(err));
  };

  // 책 수정 후 목록 갱신
  const updateBookInList = (updatedBook: Book) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book)),
    );
  };

  const addBookToList = (newBook: Book) => {
    setBooks((prevList) => [...prevList, newBook]);
  };

  useEffect(() => {
    axios
      .get('/api/books')
      .then((res) => {
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
      <button
        className="mx-1 px-4 py-2 mb-2 border rounded-lg bg-blue-500 text-white"
        onClick={handlePostModalToggle}>
        책 추가하기
      </button>

      <ul>
        {currentBooks.map((book) => (
          <li
            key={book.id}
            className="border p-2 mb-2 rounded-lg hover:bg-blue-50 cursor-pointer flex justify-between items-center"
            onClick={() => goBookDetail(book.id)}>
            <div>
              <strong>{book.title}</strong> - {book.author} (재고: {book.stock}권)
            </div>
            <div className="flex space-x-2">
              <button
                className="border px-4 py-2 rounded-lg hover:bg-slate-300 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditBook(book); // 수정할 책 정보 전달
                }}>
                수정
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteBook(book.id);
                }}>
                삭제
              </button>
            </div>
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

      {showPostModal && (
        <BookPostModal
          addBook={showPostModal}
          clickModal={handlePostModalToggle}
          addBookToList={addBookToList}
        />
      )}

      {showEditModal && bookToEdit && (
        <BookEditModal
          book={bookToEdit}
          clickModal={handleEditModalToggle}
          updateBookInList={updateBookInList}
        />
      )}
    </div>
  );
}
