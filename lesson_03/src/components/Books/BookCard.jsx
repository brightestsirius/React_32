import React from "react";

export default function BookCard({ book: { title, author, genre }, children }) {
  const [readBtn, rating] = React.Children.toArray(children);

  return (
    <li>
      <b>{title}</b> {author} – {genre}, {rating} {readBtn}
    </li>
  );
}
