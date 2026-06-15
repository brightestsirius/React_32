import { Outlet } from "react-router";
import { MapPin, Truck } from "lucide-react";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 flex-col items-center justify-center p-12 text-white">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-white/20 rounded-xl p-2">
            <MapPin className="size-7 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium opacity-80">Logistics</p>
            <p className="text-xl font-bold leading-tight">Dashboard</p>
          </div>
        </div>
        <Truck className="size-32 opacity-80 mb-8" strokeWidth={1} />
        <h2 className="text-3xl font-bold text-center mb-3">Welcome back!</h2>
        <p className="text-blue-100 text-center text-sm max-w-xs">
          Sign in to your account to continue managing your logistics network.
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <MapPin className="size-5 text-primary" />
            <span className="font-bold text-lg">Logistics Dashboard</span>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
