import React from "react";
import UserCard from "./UserCard/UserCard";

export default function UsersDashboard() {
  const USER_1 = {
    id: 1,
    position: `React dev`,
    skills: [`Angular`, `Java`, `React`],
    isAdmin: true,
  };

  const USER_2 = {
    id: 2,
    position: `Java dev`,
    skills: [`Angular`, `Java`, `Phython`],
    isAdmin: false,
  };

  const USERS = [USER_1, USER_2];

  return (
    <>
      <ul>
        {USERS.map((item) => (
          <li key={item.id}>
            <UserCard user={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
