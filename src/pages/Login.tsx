import { Link } from "react-router-dom";

export default function Login() {
  return (
    <article className="px-16 md:px-7 sm:px-3 h-[90vh] flex justify-between gap-8">
      <section className="w-1/2 h-full flex flex-col justify-center items-center gap-6">
        <p className="font-bold font-serif italic text-4xl">Welcome Back</p>
        <p>Welcome back! Please enter your details</p>
        <form className="w-4/6 flex flex-col gap-5">
          <label className="flex flex-col gap-1">
            Email
            <input
              className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
              type="email"
              placeholder="Enter your email"
            />
          </label>
          <label className="flex flex-col gap-1">
            Password
            <input
              className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
              type="password"
              placeholder="Enter your password"
            />
          </label>

          <Link className="self-end -mt-2" to="forgot">
            Forgot Password?
          </Link>
          <button className="bg-bergeL text-black font-bold text-xl py-1 rounded-2xl">
            Log in
          </button>
        </form>
        <p>
          don't have an account?{" "}
          <Link to="/signup" className="font-bold text-lg">
            Sign up for free
          </Link>
        </p>
      </section>
      <section className="w-1/2 h-full">
        <img className="w-full h-full object-cover" src="/loginn.png" alt="" />
      </section>
    </article>
  );
}
