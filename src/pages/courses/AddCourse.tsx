import { useState } from "react";

interface Content {
  title: string;
  description: string;
  video: string;
}

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState<Content[]>([]);

  return (
    <article className="px-16 md:px-6 sm:px-3">
      <form>
        <section className="flex flex-col gap-6 justify-center  w-1/2 my-12">
          <p className="font-bold text-6xl">Add Course</p>
          <p>
            Fill in the details below to add a new course to the VirtuLearn
            platform.
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter course title"
            className="p-2 rounded-lg"
          />
        </section>
        <section className="flex flex-col gap-6">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            placeholder="Enter course author"
            className="p-2 rounded-lg"
          />
        </section>
        <section className="flex flex-col gap-6">
          <label htmlFor="students">Enrolled Students</label>
          <input
            type="number"
            id="students"
            placeholder="Enter number of enrolled students"
            className="p-2 rounded-lg"
          />
        </section>
        <section className="flex flex-col gap-6">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            placeholder="Enter course price"
            className="p-2 rounded-lg"
          />
        </section>
        <section className="flex flex-col gap-6">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            placeholder="Upload course image"
            className="p-2 rounded-lg"
          />
        </section>
        <button className="text-xl px-8 py-2 rounded-xl bg-greenD font-semibold">
          Add Course
        </button>
      </form>
    </article>
  );
}
