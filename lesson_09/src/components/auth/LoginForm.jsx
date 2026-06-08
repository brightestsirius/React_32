import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const CUSTOM_USER = {
  email: `john@example.com`,
  password: `12345678`,
};

export default function LoginForm() {
  const [newUser, setNewUser] = useState(CUSTOM_USER);
  const useLoginMutation = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    useLoginMutation.mutate(newUser);
  };

  return (
    <form className="auth__form" onSubmit={handleLogin}>
      <label>
        Email{" "}
        <input
          type="email"
          value={newUser.email}
          onChange={(e) =>
            setNewUser((prevState) => ({ ...prevState, email: e.target.value }))
          }
        />
      </label>
      <label>
        Passowrd{" "}
        <input
          type="password"
          value={newUser.password}
          onChange={(e) =>
            setNewUser((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
      </label>
      {useLoginMutation.isError && <p className="auth__form--error">Error: {useLoginMutation.error.message}</p>}
      <button>Log in</button>
    </form>
  );
}
