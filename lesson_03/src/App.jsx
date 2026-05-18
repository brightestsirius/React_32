import { useState } from "react";
import { books as booksData } from "./data/books";
import BooksList from "./components/Books/BooksList";
import SortedBooks from "./components/Books/SortedBooks";
import SelectedBook from "./components/Books/SelectedBook";

export default function App() {
  const [books, setBooks] = useState(booksData);
  const [selectedBook, setSelectedBook] = useState(null);

  const sortedBooks = structuredClone(books).sort(
    (a, b) => b.rating - a.rating,
  );

  const setBook = (value) => setSelectedBook(value);

  const setRating = (id) => {
    const rating = +prompt(`Enter rating`, 10);
    setBooks((prevState) =>
      prevState.map((item) => {
        if (item.id === id) item.rating = rating;
        return item;
      }),
    );
  };

  return (
    <>
      <BooksList books={books} setBook={setBook} setRating={setRating} />
      <hr />
      <SortedBooks books={sortedBooks} />
      <hr />
      <SelectedBook selectedBook={selectedBook} />
    </>
  );
}
