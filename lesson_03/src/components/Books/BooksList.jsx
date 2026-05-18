import React from "react";
import BookCard from "./BookCard";
import Button from "../Button/Button";

export default function BooksList({ books, setSelectedBook, setBookRating }) {
  return books.length ? (
    <ul>
      {books.map((book) => (
        <BookCard key={book.id} book={book}>
          <Button onClick={() => setSelectedBook(book)}>Read</Button>
          <Button onClick={() => setBookRating(book.id)}>🌟 {book.rating}</Button>
        </BookCard>
      ))}
    </ul>
  ) : null;
}
