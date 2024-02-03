import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <article>
      <h1>this is the main layout </h1>
      <Outlet />
    </article>
  );
}
