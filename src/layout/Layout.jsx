import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

export default function Layout() {
  return (
    <>
      <header>
        <NavBar variant="default" />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
