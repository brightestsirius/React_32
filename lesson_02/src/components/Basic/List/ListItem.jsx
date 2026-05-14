export default function ListItem({ item, children }) {
  return (
    <li>
      {item} {children}
    </li>
  );
}