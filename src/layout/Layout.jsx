import { Outlet } from "react-router-dom";

import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />

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
