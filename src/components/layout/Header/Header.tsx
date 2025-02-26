'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="p-3 border-b flex justify-between">
        <Link href="/">
          <span className="text-blue-500 font-bold text-3xl">Online BookStore</span>
        </Link>
      </div>
    </>
  );
}
