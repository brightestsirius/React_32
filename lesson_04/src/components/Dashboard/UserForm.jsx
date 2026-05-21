import { useState } from "react";
import { service } from "../../services/users";

export default function UserForm({ reloadUsers }) {
  const [user, setUser] = useState({
    name: `Taras`,
    email: `taras@gmail.com`,
    isAdmin: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await service.post(user);
      reloadUsers();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <fieldset className="user__fieldset">
      <legend>Add user</legend>
      <form className="user__form" onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={user.name}
            required
            onChange={(e) =>
              setUser((prevState) => ({ ...prevState, name: e.target.value }))
            }
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            value={user.email}
            required
            onChange={(e) =>
              setUser((prevState) => ({ ...prevState, email: e.target.value }))
            }
          />
        </label>
        <label>
          isAdmin:{" "}
          <input
            type="checkbox"
            checked={user.isAdmin}
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                isAdmin: e.target.checked,
              }))
            }
          />
        </label>
        <button>Submit</button>
      </form>
    </fieldset>
  );
}
