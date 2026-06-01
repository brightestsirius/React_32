import React from "react";
import Nav from "../../components/Nav/Nav";
import AuthBtn from "../../components/AuthBtn/AuthBtn";

export default function Header() {
  return (
    <header>
      <AuthBtn />
      <Nav />
    </header>
  );
}
