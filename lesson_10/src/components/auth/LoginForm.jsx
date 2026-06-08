import { useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../../hooks/useLogin";

export default function LoginForm() {
  const [credentials, setCredentials] = useState({
    email: "john@example.com",
    password: "12345678",
  });

  const navigate = useNavigate();
  const loginMutation = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate(credentials, {
      onSuccess: () => navigate("/dashboard/map", { replace: true }),
    });
  };

  return (
    <form onSubmit={handleLogin} className="auth__form">
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
      {loginMutation.isError && (
        <p className="auth__form--error">
          Error: {loginMutation.error.message}
        </p>
      )}
      <button>{loginMutation.isPending ? `Logged...` : `Log in`}</button>
    </form>
  );
}
