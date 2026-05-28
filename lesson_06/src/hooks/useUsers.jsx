import { use, useState } from "react";
import { service } from "../services/users";

export default function useUsers() {
  const initialUsers = use(service.usePromise);
  const [users, setUsers] = useState(initialUsers);

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

  const addNewUser = (user) => setUsers((prevState) => [...prevState, user]);

  return {
    users,
    deleteUser,
    changeUserEmail,
    changeUserAdmin,
    updateUser,
    addNewUser,
  };
}
