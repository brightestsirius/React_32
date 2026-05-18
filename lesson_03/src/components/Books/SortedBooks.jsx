export default function SortedBooks({ books }) {
  return books.length ? (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <b>🌟 {book.rating}</b> – {book.title}
        </li>
      ))}
    </ul>
  ) : null;
}
