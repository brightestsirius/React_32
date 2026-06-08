import LoginForm from "../components/auth/LoginForm";
import NavigateBtn from "../components/common/NavigateBtn";

export default function LoginRoute() {
  return (
    <>
      <h3>Login Route</h3>
      <LoginForm />
      <hr />
      <NavigateBtn path={"/register"}>To Register Page</NavigateBtn>
    </>
  );
}
