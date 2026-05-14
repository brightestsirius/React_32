import "./style.sass";
import ListItem from "./ListItem";
import Button from "../Button/Button";

export default function List({ list = [], color, onItemClick = () => {} }) {
  return list.length ? (
    <ul className="list" style={{ color }}>
      {list.map(({ id, item }) => (
        <ListItem key={id} item={item}>
          <Button onClick={() => onItemClick(id)}>Read</Button>
        </ListItem>
      ))}
    </ul>
  ) : null;
}