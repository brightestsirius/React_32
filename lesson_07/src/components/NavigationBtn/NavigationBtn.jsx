import React from "react";
import { useNavigate } from "react-router";

export default function NavigationBtn({ path = -1, children }) {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate(path)}>
      {children}
    </button>
  );
}
