import React from "react";

export default function SelectedBook({ selectedBook }) {
  return selectedBook ? (
    <ul>
      {Object.entries(selectedBook)
        .filter(([key]) => key !== `id`)
        .map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
    </ul>
  ) : null;
}
