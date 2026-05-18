import { useState } from "react";
import { books as booksData } from "../../data/books";
import BooksList from "./BooksList";
import SortedBooks from "./SortedBooks";
import SelectedBook from "./SelectedBook";

export default function Books() {
  const [books, setBooks] = useState(booksData);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const selectedBook = books.find((item) => item.id === selectedBookId)
    ?? null;

  const setBookRating = (id) => {
    setBooks((prevState) =>
      prevState.map((item) => {
        return item.id === id ? { ...item, rating: item.rating + 1 } : item;
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
      <SortedBooks books={books} />
      <hr />
      <SelectedBook selectedBook={selectedBook} />
    </>
  );
}
