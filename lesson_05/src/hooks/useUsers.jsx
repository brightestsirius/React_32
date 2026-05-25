import { use, useState } from "react";
import { service } from "../services/users";

export default function useUsers() {
  const initialUsers = use(service.usePromise);
  const [users, setUsers] = useState(initialUsers);
  const [user, setUser] = useState(null);

  const fetchUser = async (id) => {
    try {
      const data = await service.get(id);
      setUser(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      const deletedUser = await service.delete(id);
      setUsers((prevState) =>
        prevState.filter((user) => user.id !== deletedUser.id),
      );
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

  const addUser = async (user) => {
    try {
      const addedUser = await service.post(user);
      setUsers((prevState) => [...prevState, addedUser]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    users,
    user,
    fetchUser,
    deleteUser,
    changeUserEmail,
    changeUserAdmin,
    updateUser,
    addUser,
  };
}
