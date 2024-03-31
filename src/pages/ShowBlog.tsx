import { useParams } from "react-router";
import { ai, health } from "../blogs";
import { useAuthContext } from "../../context/AuthContext";

export default function ShowBlog() {
  const param = useParams().id;
  const blog = param === "1" ? ai : health;
  const { user } = useAuthContext();

  return (
    <article className="mx-16 md:mx-7 sm:mx-3 my-12 flex flex-col gap-8">
      <p className="font-bold text-5xl mb-6">{blog.title}</p>
      <section className="flex gap-6 items-center md:hidden group">
        <div className="relative">
          <div className="flex items-center gap-4 font-bold text-lg">
            <div className="w-11 h-11 rounded-full bg-white grid place-content-center text-black">
              <img
                src={user?.profilePicture}
                className="w-full h-full rounded-full"
                alt=""
              />
            </div>
            <div>
              <p>
                {user?.firstName} {user?.lastName}
              </p>
              <p className="font-normal text-base">3 days ago</p>
            </div>
          </div>
        </div>
      </section>
      <img className="w-full h-96 object-cover" src={blog.coverImage} alt="" />
      <p className="text-xl">{blog.content}</p>
    </article>
  );
}
