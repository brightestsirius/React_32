import SidebarNav from "./SidebarNav";
import LogoutForm from "../auth/LogoutForm";

export default function Sidebar() {
  return (
    <>
      <SidebarNav />
      <hr />
      <LogoutForm />
    </>
  );
}
