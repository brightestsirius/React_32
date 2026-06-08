import { useState } from "react";
import { useNavigate } from "react-router";
import { useRegister } from "../../hooks/useRegister";

export default function RegisterForm() {
  const [credentials, setCredentials] = useState({
    name: ``,
    email: ``,
    password: ``,
  });

  const register = useRegister();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    register.mutate(credentials, {
      onSuccess: () => navigate("/dashboard/map", { replace: true }),
    });
  };

  return (
    <form onSubmit={handleRegister}>
      <label>
        Name:{" "}
        <input
          type="text"
          value={credentials.name}
          onChange={(e) =>
            setCredentials((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
      </label>
      <button>Register</button>
    </form>
  );
}
