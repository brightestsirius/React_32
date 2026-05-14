import React from "react";
import "./style.sass";

import ListItem from "./ListItem";
import Button from "../Button/Button";

export default function List({
  list = [],
  getListColor,
  handleItemRead = () => {},
}) {
  return list.length ? (
    <ul className="list" style={{ color: getListColor() }}>
      {list.map(({ id, item }) => (
        <ListItem key={id}>
          {item} <Button onClick={() => handleItemRead(id)}>Read</Button>
        </ListItem>
      ))}
    </ul>
  ) : null;
}
