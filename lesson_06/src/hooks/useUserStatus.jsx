import { useState } from "react";

export default function useUserStatus() {
  const [userStatus, setUserStatus] = useState(true);

  return { userStatus, setUserStatus };
}
