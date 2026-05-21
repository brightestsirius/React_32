import { use, useState, useEffect } from "react";
import { service } from "../../services/users";
// 🌟🔄🟢🟡🔴

const promiseList = service.get();

export default function List() {
  const initialUsers = use(promiseList);
  const [users, setUsers] = useState(initialUsers);

  const setUserEmail = (id, value) => {
    setUsers((prevState) =>
      prevState.map((user) => {
        return user.id === id ? { ...user, email: value } : user;
      }),
    );
  };

  const updateUser = async (user) => {
    try {
      const updatedUser = await service.put(user);

      setUsers((prevState) =>
        prevState.map((item) => {
          return item.id === updatedUser.id ? updatedUser : item;
        }),
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      await service.delete(id);
      setUsers((prevState) => prevState.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    console.log(`🟡 users`, users);
  }, [users]);

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
          <button onClick={() => updateUser(user)}>Save changes</button>{" "}
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
