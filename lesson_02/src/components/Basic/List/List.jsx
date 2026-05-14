import React from "react";
import "./style.sass";

import ListItem from "./ListItem";

export default function List({ list = [], color, borderRadius, onItemClick }) {
  return list.length ? (
    <ul className="list" style={{ color: color, borderRadius: borderRadius }}>
      {list.map(({ id, value }) => (
        <ListItem key={id} value={value} onItemClick={() => onItemClick(id)} />
      ))}
    </ul>
  ) : null;
}
