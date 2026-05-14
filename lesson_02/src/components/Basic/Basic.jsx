import React from "react";
import { nanoid } from "nanoid";

import List from "./List/List";
import UserCard from "./UserCard/UserCard";

export default function Basic() {
  const list = [`React`, `Java`, `Angular`].map((item) => ({
    id: nanoid(),
    item,
  }));
  const listMap = new Map(
    list.map(({ id, item }, index) => [id, { item, index }]),
  );

  const handleItemRead = (id) => {
    const skill = listMap.get(id);
    if (!skill) return;
    console.log(`${skill.item}, ${skill.index + 1}/${listMap.size}`);
  };

  const getListColor = () => {
    return list.length <= 5 ? `red` : `green`;
  };

  const user = {
    id: 1,
    position: `React dev`,
    skills: [`React`, `Java`, `Angular`],
    isAdmin: true,
  };

  const users = [
    user,
    {
      id: 2,
      position: `Java dev`,
      skills: [`Phython`, `Java`, `Angular`],
      isAdmin: false,
    },
  ];

  return (
    <>
      <List
        list={list}
        handleItemRead={handleItemRead}
        getListColor={getListColor}
      />
      <List />
      ---
      <UserCard user={user} />
      ---
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </>
  );
}
