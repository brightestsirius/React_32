import { Outlet } from "react-router";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

export default function DashboardLayout() {
  return (
    <div className="dashboard__layout">
      <aside className="dashboard__aside">
        <Sidebar />
      </aside>
      <main className="dashboard__main">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
