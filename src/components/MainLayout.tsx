import { Outlet } from "react-router";
import NavBar from "./Nav";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <article>
      <section>
        <NavBar />
      </section>
      <Outlet />
      <Footer />
    </article>
  );
}
