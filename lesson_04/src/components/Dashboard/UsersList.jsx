import React from "react";

export default function UsersList({
  users,
  setUserEmail,
  updateUser,
  deleteUser,
}) {
  return users.length ? (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}{" "}
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUserEmail(user.id, e.target.value)}
          />{" "}
          <button onClick={() => updateUser(user)}>Save</button>{" "}
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
