import { use, useState, useEffect } from "react";
import { service } from "../../services/users";
// 🌟🔄🟢🟡🔴

import UsersList from "./UsersList";
import UserForm from "./UserForm";

const promiseList = service.get();

export default function UsersData() {
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

  const reloadUsers = async () => {
    const data = await service.get();
    setUsers(data);
  }

  useEffect(() => {
    console.log(`🟡 users`, users);
  }, [users]);

  return (
    <>
      <UsersList
        users={users}
        setUserEmail={setUserEmail}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
      <UserForm reloadUsers={reloadUsers} />
    </>
  );
}
