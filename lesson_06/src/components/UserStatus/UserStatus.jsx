import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function UserStatus() {
  const { userStatus, setUserStatus } = useContext(UserContext);

  return (
    <button onClick={() => setUserStatus((prevState) => !prevState)}>
      {userStatus ? `🟢 Logged in` : `🔴 Logged out`}
    </button>
  );
}
