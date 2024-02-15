import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <article className="px-16 md:px-7 sm:px-3 h-[90vh] flex justify-between gap-8">
      <section className="w-1/2 h-full flex flex-col justify-center items-center gap-6">
        <p className="font-bold font-serif italic text-4xl">Welcome Back</p>
        <p>Welcome back! Please enter your details</p>
        <form className="w-full flex flex-col gap-5">
          <div className="flex justify-between gap-4">
            <label className="flex flex-col gap-1 w-full">
              Firstname
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="email"
                placeholder="Enter your Firstname"
              />
            </label>
            <label className="flex flex-col gap-1 w-full">
              Lastname
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="email"
                placeholder="Enter your Lastname"
              />
            </label>
          </div>
          <label className="flex flex-col gap-1">
            Email
            <input
              className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
              type="email"
              placeholder="Enter your email"
            />
          </label>
          <div className="flex justify-between gap-4">
            <label className="flex flex-col gap-1 w-full">
              Phone number
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="email"
                placeholder="Enter your phone number"
              />
            </label>
            <label className="flex flex-col gap-1 w-full">
              Role
              <select className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none">
                <option className="text-black bg-white py-2" value="">Choose role</option>
                <option className="text-black bg-white py-2" value="mentor">Mentor</option>
                <option className="text-black bg-white py-2" value="student">Student</option>
              </select>
            </label>
          </div>
          <div className="flex justify-between gap-4">
            <label className="flex flex-col gap-1 w-full">
              Password
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="password"
                placeholder="Enter your password"
              />
            </label>
            <label className="flex flex-col gap-1 w-full">
              Confirm password
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="password"
                placeholder="Confirm"
              />
            </label>
          </div>

          <button className="bg-bergeL text-black font-bold text-xl py-1 rounded-2xl">
            Sign up
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-lg">
            Log in
          </Link>
        </p>
      </section>
      <section className="w-1/2 h-full">
        <img className="w-full h-full object-cover" src="/loginn.png" alt="" />
      </section>
    </article>
  );
}
