import LoginForm from "../components/auth/LoginForm";
import { Link } from "react-router";

export default function LoginRoute() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Sign in</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Enter your credentials to access your account
      </p>
      <LoginForm />
      <p className="text-center text-sm text-muted-foreground mt-6">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-primary font-medium hover:underline">
          Sign up
        </Link>
      </p>
    </>
  );
}
