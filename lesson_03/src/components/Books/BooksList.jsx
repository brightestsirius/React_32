import React from "react";
import BookCard from "./BookCard";
import Button from "../Button/Button";
import BookRating from "./BookRating";

export default function BooksList({ books, setBook, setRating }) {
  return books.length ? (
    <ul>
      {books.map((book) => (
        <BookCard key={book.id} book={book}>
          {" "}
          <BookRating book={book}>
            <Button onClick={() => setRating(book.id)}>Set rating</Button>
          </BookRating>{" "}
          <Button onClick={() => setBook(book)}>Read</Button>
        </BookCard>
      ))}
    </ul>
  ) : null;
}
