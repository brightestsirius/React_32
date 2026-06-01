import React from "react";
import Navigation from "../components/Navigation";
import AuthBtn from "../components/AuthBtn/AuthBtn";

export default function Header() {
  return (
    <header>
      <AuthBtn />
      <Navigation />
    </header>
  );
}
