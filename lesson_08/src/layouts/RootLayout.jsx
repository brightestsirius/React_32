import React from "react";
import { Outlet } from "react-router";
import Header from "../pages/Header/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
