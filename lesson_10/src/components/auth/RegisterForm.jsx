import { useState } from "react";
import { useRegister } from "../../hooks/useRegister";

const CUSTOM_USER = {
  name: `Taras`,
  email: `taras@example.com`,
  password: `12345678`,
};

export default function RegisterForm() {
  const [newUser, setNewUser] = useState(CUSTOM_USER);
  const useRegisterMutation = useRegister();

  const handleLogin = (e) => {
    e.preventDefault();
    useRegisterMutation.mutate(newUser);
  };

  return (
    <form className="auth__form" onSubmit={handleLogin}>
      <label>
        Name{" "}
        <input
          type="text"
          value={newUser.name}
          onChange={(e) =>
            setNewUser((prevState) => ({ ...prevState, name: e.target.value }))
          }
        />
      </label>
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
      {useRegisterMutation.isError && (
        <p className="auth__form--error">
          Error: {useRegisterMutation.error.message}
        </p>
      )}
      <button>Register</button>
    </form>
  );
}
