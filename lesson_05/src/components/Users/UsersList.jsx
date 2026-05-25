import React from "react";

export default function UsersList({
  users,
  changeUserEmail,
  changeUserAdmin,
  updateUser,
  fetchUser,
  deleteUser,
}) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          <br />
          <input
            type="email"
            value={user.email}
            onChange={(e) => changeUserEmail(user.id, e.target.value)}
          />{" "}
          <br />
          <label>
            isAdmin:{" "}
            <input
              type="checkbox"
              checked={user.isAdmin}
              onChange={(e) => changeUserAdmin(user.id, e.target.checked)}
            />
          </label>
          <button onClick={() => updateUser(user)}>Save changes</button> <br />
          <button onClick={() => fetchUser(user.id)}>Read</button>{" "}
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
