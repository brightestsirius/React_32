import React from "react";

export default function UserCard({user={}}) {
  return (
    <ul>
      {Object.entries(user)
        .filter(([key]) => key !== `id`)
        .map(([key, value]) => (
          <li key={key}>
            {key}: {Array.isArray(value) ? value.join(`, `) : String(value)}
          </li>
        ))}
    </ul>
  );
}
