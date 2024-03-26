import { FormEvent, useState } from "react";

export default function AddBlog() {
  const [blogInfo, setBlogInfo] = useState({
    title: "",
    content: "",
  });
  const [image, setImage] = useState<File | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <article className="my-20">
      <form onSubmit={handleSubmit}>
        <article className="px-16 md:px-6 sm:px-3 mt-12">
          <section className="flex flex-col gap-4">
            <label className="font-bold text-lg" htmlFor="title">
              Title
            </label>
            <input
              className="border border-bergeL rounded-lg px-4 py-2 bg-bergeL/5 outline-none"
              type="text"
              name="title"
              id="title"
              value={blogInfo.title}
              onChange={(e) =>
                setBlogInfo({ ...blogInfo, title: e.target.value })
              }
            />
          </section>
          <section className="flex flex-col gap-4">
            <label className="font-bold text-lg" htmlFor="image">
              Cover Image
            </label>
            <input
              className="border border-bergeL rounded-lg px-4 py-2 bg-bergeL/5 outline-none"
              type="file"
              name="image"
              id="image"
              onChange={(e) => {
                if (e.target.files) {
                  setImage(e.target.files[0]);
                }
              }}
            />
          </section>
          <section className="flex flex-col gap-4 mt-4">
            <label className="font-bold text-lg" htmlFor="content">
              Content
            </label>
            <textarea
              className="border border-bergeL rounded-lg px-4 py-2 bg-bergeL/5 outline-none"
              name="content"
              id="content"
              cols={30}
              rows={10}
              value={blogInfo.content}
              onChange={(e) => {
                setBlogInfo({ ...blogInfo, content: e.target.value });
              }}
            ></textarea>
          </section>
          <button className="bg-bergeL text-black font-bold rounded-lg px-4 py-2 mt-4">
            Add Blog
          </button>
        </article>
      </form>
    </article>
  );
}
