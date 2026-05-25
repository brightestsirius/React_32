import React from "react";

export default function UserInfo({ user }) {
  return user ? (
    <ul>
      {Object.entries(user).map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
    </ul>
  ) : null;
}
