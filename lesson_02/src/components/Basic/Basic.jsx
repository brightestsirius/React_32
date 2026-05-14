import { nanoid } from "nanoid";

import List from "./List/List";
import UserCard from "./UserCard/UserCard";

const list = [`React`, `Java`, `Angular`].map((item) => ({
  id: nanoid(),
  item,
}));

const listMap = new Map(
  list.map(({ id, item }, index) => [id, { item, index }]),
);

const onItemClick = (id) => {
  const skill = listMap.get(id);
  if (!skill) return;
  console.log(`${skill.item}, ${skill.index + 1}/${listMap.size}`);
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
    skills: [`React`, `Java`, `Angular`],
    isAdmin: false,
  },
];

export default function Basic() {
  return (
    <>
      <List list={list} color={`green`} onItemClick={onItemClick} />
      <List />
      ---
      <UserCard user={user} />
      ---
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <UserCard user={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
