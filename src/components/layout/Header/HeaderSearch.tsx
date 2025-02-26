'use client';

type HeaderSearchProps = {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function HeaderSearch({ searchTerm, onSearchChange }: HeaderSearchProps) {
  return (
    <input
      type="text"
      placeholder="제목/저자 입력"
      autoFocus
      autoComplete="off"
      value={searchTerm} // 부모에서 전달된 searchTerm 값
      onChange={onSearchChange} // 부모에서 전달된 함수
      className="border p-2 mb-4 rounded-lg w-3/5"
    />
  );
}
