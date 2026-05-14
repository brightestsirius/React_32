import { useState, useEffect } from "react";

export default function User() {
  const [user, setUser] = useState({
    name: `Jack`,
    email: `jack@gmail.com`,
  });

  useEffect(() => {
    console.log(`🟡 Start connection with`, user.email);

    return () => {
      console.log(`🔴 Close connection with`, user.email);
    };
  }, [user.email]);

  return (
    <input
      type="email"
      defaultValue={user.email}
      onBlur={(e) =>
        setUser((prevState) => ({ ...prevState, email: e.target.value }))
      }
    />
  );
}
