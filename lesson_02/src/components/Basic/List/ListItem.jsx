import React from "react";
import Button from "../Button/Button";

export default function ListItem({ value, onItemClick }) {
  return (
    <li>
      {value} <Button title={`Read`} onClick={onItemClick} />
    </li>
  );
}
