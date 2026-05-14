import React from "react";

export default function UserCard({ user = {} }) {
  return Object.keys(user).length ? (
    <ul>
      {Object.entries(user)
        .filter(([key]) => key !== `id`)
        .map(([key, item]) => (
          <li key={key}>
            {key}: {Array.isArray(item) ? item.join(`, `) : String(item)}
          </li>
        ))}
    </ul>
  ) : null;
}
