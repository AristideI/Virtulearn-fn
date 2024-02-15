export default function BlogGrid() {
  return (
    <article className="mb-16 grid grid-cols-3 gap-6">
      <div className="h-96 col-span-2 flex flex-col justify-center gap-6">
        <p className="font-bold text-4xl font-serif">Our Popular Blogs</p>
        <p>
          Explore our popular courses handpicked by learners like you. From
          in-demand skills to cutting-edge topics, our popular courses section
          offers a curated selection of learning opportunities. Join thousands
          of learners and take the first step towards your personal and
          professional growth with VirtuLearn's popular courses.
        </p>
        <button className="bg-bergeL font-bold px-14 py-2 rounded-xl w-fit text-black text-xl">
          Subscribe
        </button>
      </div>
      <div className="h-96 bg-greenL rounded-2xl"></div>
      <div className="h-96 bg-greenL rounded-2xl"></div>
      <div className="h-96 bg-greenL rounded-2xl"></div>
      <div className="h-96 bg-greenL rounded-2xl"></div>
      <div className="h-96 bg-greenL rounded-2xl"></div>
      <div className="h-96 bg-greenL col-span-2 rounded-2xl"></div>
    </article>
  );
}
