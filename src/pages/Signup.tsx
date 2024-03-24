import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";

enum Roles {
  MENTOR = "mentor",
  STUDENT = "student",
}
type formInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  password: string;
  confirmPwd: string;
  role: Roles;
  pfp: any;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formInputs>();
  const passwordValue = watch("password");
  async function onsubmitForm({
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmPwd,
    role,
    pfp,
  }: formInputs) {
    console.log(confirmPwd);
    console.log(pfp)
    const response = await axios.post("http://localhost:4000/auth/signup", {
      firstName,
      lastName,
      email,
      phone: phoneNumber,
      password,
      isMentor: role === "mentor" ? true : false,
    });

    console.log(response);
  }
  return (
    <article className="px-16 md:px-7 sm:px-3 h-[90vh] flex justify-between gap-8">
      <section className="w-1/2 h-full flex flex-col justify-center items-center gap-6">
        <p className="font-bold font-serif italic text-4xl">Welcome to focus</p>
        <p>Register your account</p>
        <form
          className="w-full flex flex-col gap-5"
          onSubmit={handleSubmit(onsubmitForm)}
          encType="multipart/form-data"
        >
          <div className="flex justify-between gap-4">
            <label className="flex flex-col gap-1 w-full">
              Firstname
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="text"
                placeholder="Enter your Firstname"
                {...register("firstName")}
              />
            </label>
            <label className="flex flex-col gap-1 w-full">
              Lastname
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="text"
                placeholder="Enter your Lastname"
                {...register("lastName")}
              />
            </label>
          </div>
          <label className="flex flex-col gap-1">
            Email
            <input
              className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
          </label>
          <div className="flex justify-between gap-4">
            <label className="flex flex-col gap-1 w-full">
              Phone number
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="number"
                placeholder="Enter your phone number"
                {...register("phoneNumber")}
              />
            </label>
            <label className="flex flex-col gap-1 w-full">
              Role
              <select
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                {...register("role")}
              >
                <option className="text-black bg-white py-2" value="">
                  Choose role
                </option>
                <option className="text-black bg-white py-2" value="mentor">
                  Mentor
                </option>
                <option className="text-black bg-white py-2" value="student">
                  Student
                </option>
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
                {...register("password")}
              />
            </label>
            <label className="flex flex-col gap-1 w-full">
              Confirm password
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="password"
                placeholder="Confirm"
                {...register("confirmPwd", {
                  validate: {
                    passwordsMatch: (confirmPwd) =>
                      confirmPwd === passwordValue,
                  },
                })}
              />
              {errors.confirmPwd?.type === "passwordsMatch" && (
                <span>Passwords must match</span>
              )}
            </label>
            <label htmlFor="pfp">
              <input
                className="bg-greenL/0 border border-white rounded-lg px-4 py-1 outline-none"
                type="file"
                id="pfp"
                {...register("pfp")}
              />
            </label>
          </div>

          <button
            type="submit"
            className="bg-bergeL text-black font-bold text-xl py-1 rounded-2xl"
          >
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
