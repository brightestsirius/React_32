import { useState } from "react";
import { useNavigate } from "react-router";
import { useRegister } from "../../hooks/useRegister";

export default function RegisterForm() {
  const [credentials, setCredentials] = useState({
    name: `test`,
    email: "test@example.com",
    password: "12345678",
  });

  const navigate = useNavigate();
  const registerMutation = useRegister();

  const handleLogin = (e) => {
    e.preventDefault();
    registerMutation.mutate(credentials, {
      onSuccess: () => navigate("/dashboard/map", { replace: true }),
    });
  };

  return (
    <form onSubmit={handleLogin} className="auth__form">
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
      {registerMutation.isError && (
        <p className="auth__form--error">
          Error: {registerMutation.error.message}
        </p>
      )}
      <button>
        {registerMutation.isPending ? `Registerring...` : `Register`}
      </button>
    </form>
  );
}
