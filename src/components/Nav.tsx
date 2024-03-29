import { Link } from "react-router-dom";

export default function NavBar() {
  const isLogged = false;
  return (
    <article className=" px-16 md:px-6 sm:px-3 py-4 border-b border-white/65">
      <article className="flex justify-between items-center mb-4">
        <Link to="/">
          <img className="w-52" src="/logo.png" alt="main logo" />
        </Link>
        {isLogged ? (
          <section className="flex gap-6 items-center md:hidden group">
            <p className="font-bold text-lg">Blogs</p>
            <img src="/message.png" className="w-5" alt="" />
            <div className="relative">
              <div className="flex items-center gap-4 font-bold text-lg border-l border-white pl-6">
                <div className="w-11 h-11 rounded-full bg-white grid place-content-center text-black">
                  AI
                </div>
                <p>Aristide Isingizwe</p>
                <img src="/down.png" className="w-6" alt="" />
              </div>
              <aside className="absolute top-full right-0 w-96 rounded-xl  bg-white text-black px-4 py-2 font-bold hidden hover:block group-hover:block">
                <div className="border-b border-black pb-2 flex flex-col gap-2">
                  <p className="hover:text-purpleL py-2">Profile</p>
                  <p className="hover:text-purpleL py-2">Settings</p>
                </div>
                <div className="border-b border-black pb-2 flex flex-col gap-2">
                  <p className="hover:text-purpleL py-2">My Messages</p>
                  <p className="hover:text-purpleL py-2">My Learning</p>
                  <p className="hover:text-purpleL py-2">My Blogs</p>
                  <p className="hover:text-purpleL py-2">Get Help</p>
                </div>

                <p className="hover:text-purpleL py-2">Logout</p>
              </aside>
            </div>
          </section>
        ) : (
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
        )}
      </article>
      <section className="flex gap-5 text-lg">
        <p>Home</p>
        <p>My Leaning</p>
        <p>Messages</p>
      </section>
    </article>
  );
}
