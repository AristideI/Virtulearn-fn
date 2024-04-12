import { useParams } from "react-router";
import { useGetOneBlog } from "../hooks/useBlogs";
import LoadingSection from "../components/LoadingSection";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import toast from "react-hot-toast";
dayjs.extend(relativeTime);

export default function ShowBlog() {
  const id = useParams().id as string;
  const { blog, isLoading, error } = useGetOneBlog({ id: id });

  const user = blog?.authorId;
  if (error) {
    toast.error("An error occurred!, Please try again later.");
  }

  return !isLoading && blog ? (
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
              <p className="font-normal text-base">
                {dayjs(blog.createdAt).fromNow()}
              </p>
            </div>
          </div>
        </div>
      </section>
      <img className="w-full h-96 object-cover" src={blog.coverImage} alt="" />
      <p className="text-xl">{blog.content}</p>
    </article>
  ) : (
    <LoadingSection />
  );
}
