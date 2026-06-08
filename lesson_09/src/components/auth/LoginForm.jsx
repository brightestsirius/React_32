import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

import { useLogin } from "../../hooks/useLogin";

export default function LoginForm() {
  const [credentials, setCredentials] = useState({
    email: ``,
    password: ``,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard/map";

  const loginMutation = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate(credentials, {
      onSuccess: () => navigate(from, { replace: true }),
    });
  };

  return (
    <form onSubmit={handleLogin}>
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
      {loginMutation.isError && <p>{loginMutation.error.message}</p>}
      <button>{loginMutation.isPending ? `Logging...` : `Log in`}</button>
    </form>
  );
}
