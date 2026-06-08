import RegisterForm from "../components/auth/RegisterForm";
import NavigateBtn from "../components/common/NavigateBtn";

export default function RegisterRoute() {
  return (
    <>
      <h3>Register Route</h3>
      <RegisterForm /> <NavigateBtn path={"/login"}>To Login Page</NavigateBtn>
    </>
  );
}
