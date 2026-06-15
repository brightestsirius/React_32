import RegisterForm from "../components/auth/RegisterForm";
import { Link } from "react-router";

export default function RegisterRoute() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Create account</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Fill in the details below to get started
      </p>
      <RegisterForm />
      <p className="text-center text-sm text-muted-foreground mt-6">
        Already have an account?{" "}
        <Link to="/login" className="text-primary font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </>
  );
}
