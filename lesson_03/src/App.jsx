import { useState } from "react";
import { books as booksData } from "./data/books";
import BooksList from "./components/Books/BooksList";
import BooksSortedList from "./components/Books/BooksSortedList";
import SelectedBook from "./components/Books/SelectedBook";

export default function App() {
  const [books, setBooks] = useState(booksData);
  const [selectedBook, setSelectedBook] = useState(null);

  const sortedBooks = [...books].sort((a, b) => b.rating - a.rating);

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
        setSelectedBook={setSelectedBook}
        setBookRating={setBookRating}
      />
      <hr />
      <BooksSortedList books={sortedBooks} />
      <hr />
      <SelectedBook selectedBook={selectedBook} />
    </>
  );
}
