import React from "react";

export default function BookCard({ book: { title, author, genre }, children }) {
  return (
    <li>
      <b>{title}</b> {author} – {genre}, {children}
    </li>
  );
}
