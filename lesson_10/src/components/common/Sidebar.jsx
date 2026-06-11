import SidebarNav from "./SidebarNav";
import LogoutButton from "../auth/LogoutButton";

export default function Sidebar() {
  return (
    <>
      <SidebarNav />
      <hr />
      <LogoutButton />
    </>
  );
}
