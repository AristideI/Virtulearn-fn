export default function Revol() {
  return (
    <article className="px-16 md:px-6 sm:px-3 mt-20">
      <section className="flex justify-between gap-4">
        <div className="w-8/12 flex flex-col justify-between gap-4 text-7xl items-start">
          <p className="self-end">REVOLUTIONIZE</p>
          <p>
            LEARNING{" "}
            <span className="text-3xl border border-white px-4 rounded-full">
              WITH
            </span>
          </p>
          <p className="self-center">E-DRIVEN</p>
          <p className="self-end">EDUCATION</p>
        </div>
        <div className="w-4/12 bg-purpleL rounded-xl p-4 flex flex-col justify-between">
          <p className="font-bold border border-white px-6 py-1 w-fit rounded-xl">
            Welcome
          </p>
          <p className="text-xl">
            Discover a new way of learning with our Full-Powered online
            platform. Achieve your goals and succeed with us 🚀
          </p>
        </div>
      </section>
      <section className="flex justify-between gap-4 mt-20">
        <section className="w-5/12 h-96 rounded-2xl flex flex-col gap-4">
          <div className="h-1/2 w-full bg-yellowL rounded-2xl overflow-hidden">
            <img
              src="/revo.jpg"
              className="w-full h-full object-cover object-bottom"
              alt=""
            />
          </div>
          <div className="h-1/2 w-full rounded-2xl flex gap-4">
            <div className="h-full w-1/2 bg-yellowL rounded-2xl"></div>
            <div className="h-full w-1/2 bg-greenL rounded-2xl"></div>
          </div>
        </section>
        <section className="w-7/12 h-96 bg-bergeL rounded-2xl"></section>
      </section>
    </article>
  );
}
