import { Outlet } from "react-router";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <aside className="w-56 shrink-0 bg-white border-r border-border flex flex-col">
        <Sidebar />
      </aside>
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
