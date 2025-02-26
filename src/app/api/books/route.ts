import { NextResponse } from 'next/server';

const books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', stock: 10 },
  { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', stock: 5 },
  { id: 3, title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', stock: 8 },
  {
    id: 4,
    title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
    stock: 3,
  },
  {
    id: 5,
    title: 'Refactoring: Improving the Design of Existing Code',
    author: 'Martin Fowler',
    stock: 7,
  },
  { id: 6, title: "You Don't Know JS", author: 'Kyle Simpson', stock: 4 },
  { id: 7, title: 'The Mythical Man-Month', author: 'Fred Brooks', stock: 6 },
  {
    id: 8,
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
    stock: 12,
  },
  { id: 9, title: 'Code Complete', author: 'Steve McConnell', stock: 9 },
  { id: 10, title: 'The Art of Computer Programming', author: 'Donald E. Knuth', stock: 2 },
  { id: 11, title: 'The Clean Coder', author: 'Robert C. Martin', stock: 11 },
  {
    id: 12,
    title: 'The Pragmatic Programmer: Your Journey to Mastery',
    author: 'David Thomas, Andy Hunt',
    stock: 3,
  },
  { id: 13, title: 'JavaScript: The Definitive Guide', author: 'David Flanagan', stock: 7 },
  { id: 14, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', stock: 5 },
  { id: 15, title: 'The Clean Architecture', author: 'Robert C. Martin', stock: 8 },
  { id: 16, title: 'Learning JavaScript Design Patterns', author: 'Addy Osmani', stock: 6 },
  { id: 17, title: 'Node.js Design Patterns', author: 'Mario Casciaro', stock: 10 },
  {
    id: 18,
    title: "Soft Skills: The Software Developer's Life Manual",
    author: 'John Sonmez',
    stock: 4,
  },
  {
    id: 19,
    title: "The Complete Software Developer's Career Guide",
    author: 'John Sonmez',
    stock: 3,
  },
  { id: 20, title: 'Continuous Delivery', author: 'Jez Humble, David Farley', stock: 7 },
];

export async function GET() {
  return NextResponse.json(books);
}
