import { use, useState, useEffect } from "react";
// 🌟🔄🟢🟡🔴

import { promiseUsers, API, fetchUsers } from "../../services/users";

export default function UsersList() {
  const initialUsers = use(promiseUsers);
  const [users, setUsers] = useState(initialUsers);

  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: `Taras`,
    email: `shwva@gmail.com`,
    isAdmin: false,
  });

  const fetchUser = async (id) => {
    try {
      const res = await fetch(`${API}/${id}`);
      if (!res.ok) throw new Error(`Failed fetch user`);

      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await fetch(`${API}/${id}`, { method: `DELETE` });
      if (!res.ok) throw new Error(`Failed delete user`);

      const deletedUser = await res.json();
      setUsers((prevState) =>
        prevState.filter((user) => user.id !== deletedUser.id),
      );

      // const upatedUsers = await fetchUsers();
      // setUsers(upatedUsers);
    } catch (error) {
      console.log(error.message);
    }
  };

  const changeUserEmail = (id, email) => {
    setUsers((prevState) =>
      prevState.map((user) => {
        return user.id === id ? { ...user, email } : user;
      }),
    );
  };

  const changeUserAdmin = (id, checked) => {
    setUsers((prevState) =>
      prevState.map((user) => {
        return user.id === id ? { ...user, isAdmin: checked } : user;
      }),
    );
  };

  const updateUser = async (user) => {
    try {
      const res = await fetch(`${API}/${user.id}`, {
        method: `PUT`,
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error(`Failed update user`);

      const updatedUser = await res.json();
      setUsers((prevState) =>
        prevState.map((item) => {
          return item.id === updatedUser.id ? updatedUser : item;
        }),
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const submitUserForm = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(API, {
        method: `POST`,
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error(`Failed post user`);

      const addedUser = await res.json();
      setUsers((prevState) => [...prevState, addedUser]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    console.log(`newUser`, newUser);
  }, [newUser]);

  return (
    <>
      <fieldset>
        <legend>Add user</legend>
        <form onSubmit={submitUserForm}>
          <label>
            Name:{" "}
            <input
              type="text"
              value={newUser.name}
              onChange={(e) =>
                setNewUser((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
          </label>
          <br />
          <br />
          <label>
            Email:{" "}
            <input
              type="email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
          </label>
          <br />
          <br />
          <label>
            isAdmin:{" "}
            <input
              type="checkbox"
              checked={newUser.isAdmin}
              onChange={(e) =>
                setNewUser((prevState) => ({
                  ...prevState,
                  isAdmin: e.target.checked,
                }))
              }
            />
          </label>
          <br />
          <br />
          <button>Add user</button>
        </form>
      </fieldset>

      {users.length ? (
        <>
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
                <button onClick={() => updateUser(user)}>Save changes</button>{" "}
                <br />
                <button onClick={() => fetchUser(user.id)}>Read</button>{" "}
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <hr />
          {user ? (
            <ul>
              {Object.entries(user).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
          ) : null}
        </>
      ) : null}
    </>
  );
}
