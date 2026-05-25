import React from "react";
// 🌟🔄🟢🟡🔴

export default function UserStatus({ userStatus, setUserStatus }) {
  return (
    <button onClick={() => setUserStatus((prevState) => !prevState)}>
      {userStatus ? `🟢 Logged in` : `🔴 Logged out`}
    </button>
  );
}
