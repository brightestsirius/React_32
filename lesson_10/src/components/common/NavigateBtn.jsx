import { useNavigate } from "react-router";

export default function NavigateBtn({ path = -1, children }) {
  const navigate = useNavigate();

  return <button onClick={() => navigate(path)}>{children}</button>;
}
