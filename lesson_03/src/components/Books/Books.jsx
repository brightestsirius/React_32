import { useState } from "react";
import { books as booksData } from "../../data/books";
import BooksList from "./BooksList";
import SortedList from "./SortedList";
import SelectedBook from "./SelectedBook";

export default function Books() {
  const [books, setBooks] = useState(booksData);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const selectedBook = books.find((book) => book.id === selectedBookId) ?? null;

  const setBookRating = (id) => {
    setBooks((prevState) =>
      prevState.map((book) => {
        return book.id === id ? { ...book, rating: book.rating + 1 } : book;
      }),
    );
  };

  return (
    <>
      <BooksList
        books={books}
        setSelectedBookId={setSelectedBookId}
        setBookRating={setBookRating}
      />
      <hr />
      <SortedList books={books} />
      <hr />
      <SelectedBook selectedBook={selectedBook} />
    </>
  );
}
