// 🌟🔄🟢🟡🔴

import UserForm from "./UserForm";
import UsersList from "./UsersList";
import UserInfo from "./UserInfo";

import useUsers from "../../hooks/useUsers";
import useUserInfo from "../../hooks/useUserInfo";
import useUserForm from "../../hooks/useUserForm";

export default function UsersBoard() {
  const {
    users,
    addNewUser,
    deleteUser,
    changeUserEmail,
    changeUserAdmin,
    updateUser,
  } = useUsers();
  const { user, fetchUser } = useUserInfo();
  const { addUser } = useUserForm(addNewUser);

  return (
    <>
      <UserForm addUser={addUser} />

      {users.length ? (
        <>
          <UsersList
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