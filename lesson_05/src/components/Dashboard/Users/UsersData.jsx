// 🌟🔄🟢🟡🔴

import UserList from "./UserList";
import UserInfo from "./UserInfo";
import UserForm from "./UserForm";

import useUsers from "../../../hooks/useUsers";

export default function UsersData() {
  const {
    users,
    user,
    fetchUser,
    deleteUser,
    changeUserEmail,
    changeUserAdmin,
    updateUser,
    addUser,
  } = useUsers();

  return (
    <>
      <UserForm addUser={addUser} />

      {users.length ? (
        <>
          <UserList
            users={users}
            changeUserEmail={changeUserEmail}
            changeUserAdmin={changeUserAdmin}
            updateUser={updateUser}
            fetchUser={fetchUser}
            deleteUser={deleteUser}
          />
          <hr />
          <UserInfo user={user} />
        </>
      ) : null}
    </>
  );
}
