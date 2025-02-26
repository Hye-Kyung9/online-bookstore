'use client';

export default function HeaderSearch() {
  return (
    <input
      type="text"
      placeholder="제목/저자 입력"
      autoFocus
      autoComplete="off"
      // value={search}
      // onChange={handleSearchValue}
    />
  );
}
