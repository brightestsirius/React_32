import React from "react";
import BookCard from "./BookCard";
import Button from "../Button/Button";

export default function BooksList({ books, setSelectedBookId, setBookRating }) {
  return books.length ? (
    <ul>
      {books.map((book) => (
        <BookCard key={book.id} book={book}>
          <Button onClick={() => setBookRating(book.id)}>
            🌟 {book.rating}
          </Button>{" "}
          <Button onClick={() => setSelectedBookId(book.id)}>Read</Button>
        </BookCard>
      ))}
    </ul>
  ) : null;
}
