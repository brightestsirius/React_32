import React from "react";
import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <h3>Oops {error.message}!</h3>
    </>
  );
}
