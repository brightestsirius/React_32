import React from "react";
import { nanoid } from "nanoid";

import List from "./List/List";

export default function Basic() {
  const list = [`React`, `Java`, `Angular`, `Vue`].map((item) => ({
    id: nanoid(),
    value: item,
  }));

  const printItemInfo = (id) => {
    const index = list.findIndex((item) => item.id === id);
    if (index === -1) return;
    const el = list[index];
    console.log(`${el.value}, ${index + 1}/${list.length}`);
  };

  const printItemValue = (id) => {
    const index = list.findIndex((item) => item.id === id);
    if (index === -1) return;
    const el = list[index];
    console.log(el.value);
  };

  return (
    <>
      <List
        list={list}
        color={`green`}
        borderRadius={`5px`}
        onItemClick={printItemInfo}
      />
      <List list={list} color={`red`} onItemClick={printItemValue} />
    </>
  );
}