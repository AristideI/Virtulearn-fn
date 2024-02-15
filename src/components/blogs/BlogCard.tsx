export default function BlogCard() {
  return (
    <article className="w-1/3 md:w-1/2 sm:w-full flex flex-col gap-4">
      <img
        className="w-full h-60 object-cover rounded-xl"
        src="/1.jpg"
        alt=""
      />
      <p className="font-bold text-xl">
        What is Virtual reality and why is it so important?
      </p>
      <p className="border-b pb-4 border-white">
        Virtual reality (VR) is considered as important technology, giving scope
        for a great lead for diverse fields, virtual reality is sometimes
        considered the futuree of the world
      </p>
      <p>3 days Ago</p>
      <button className="border border-white py-2 font-bold rounded-xl">
        Read More
      </button>
    </article>
  );
}
