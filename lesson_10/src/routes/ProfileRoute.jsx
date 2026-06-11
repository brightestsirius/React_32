import EditProfileForm from "../components/profile/EditProfileForm";
import ChangePasswordForm from "../components/profile/ChangePasswordForm";

export default function ProfileRoute() {
  return (
    <>
      <h3>Profile Route</h3>
      <EditProfileForm />
      <br />
      <ChangePasswordForm />
    </>
  );
}
