import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <article className="flex justify-between items-center px-16 md:px-6 sm:px-3 py-4">
      <Link to="/">
        <img className="w-52" src="/logo.png" alt="main logo" />
      </Link>
      <section className="flex gap-4 items-center md:hidden">
        <Link to="about">About</Link>
        <Link to="courses">Courses</Link>
        <Link to="blogs">Blogs</Link>
        <Link to="contact">Contact</Link>
        <Link
          className="border-2 border-bergeL text-bergeL rounded-full px-6 py-2 font-bold"
          to="login"
        >
          Login
        </Link>
        <Link
          className="px-10 bg-bergeL text-black py-2 rounded-full font-bold"
          to="signup"
        >
          Get Started
        </Link>
      </section>
    </article>
  );
}
