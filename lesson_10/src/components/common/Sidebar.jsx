import NavMenu from "./NavMenu";
import LogoutForm from "../auth/LogoutForm";

export default function Sidebar() {
  return (
    <>
      <NavMenu />
      <hr />
      <LogoutForm />
    </>
  );
}
