import { Outlet } from "react-router";
import NavBar from "./Nav";

export default function MainLayout() {
  return (
    <article>
      <section>
        <NavBar />
      </section>
      <Outlet />
    </article>
  );
}
