import { useState } from "react";

export default function UserForm({ addUser }) {
  const [newUser, setNewUser] = useState({
    name: `Taras`,
    email: `sheva@gmail.com`,
    isAdmin: false,
  });

  const submitUserForm = async (e) => {
    e.preventDefault();
    addUser(newUser);
  };

  return (
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
        <button>Add user</button>
      </form>
    </fieldset>
  );
}
