import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header/Header";

export default function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <main>
        {navigation.state === "loading" ? <p>Loading...</p> : <Outlet />}
      </main>
    </>
  );
}
