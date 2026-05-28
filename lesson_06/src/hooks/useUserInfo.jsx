import { useState } from "react";
import { service } from "../services/users";

export default function useUserInfo() {
  const [user, setUser] = useState(null);

  const fetchUser = async (id) => {
    try {
      const data = await service.get(id);
      setUser(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return { user, fetchUser };
}