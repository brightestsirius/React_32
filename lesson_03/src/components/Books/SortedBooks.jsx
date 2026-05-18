export default function SortedBooks({ books }) {
  const sortedList = [...books];

  return sortedList.length ? (
    <ul>
      {sortedList
        .sort((a, b) => b.rating - a.rating)
        .map((book) => (
          <li key={book.id}>
            <b>🌟 {book.rating}</b> – {book.title}
          </li>
        ))}
    </ul>
  ) : null;
}
