export default function Hero2() {
  return (
    <article className="px-16 md:px-6 sm:px-3">
      <section>
        <div className="text-9xl font-bold flex items-end gap-6 object-contain">
          <p>Build</p>
          <img className="w-96" src="/purple.png" alt="purple" />
          <p>Your</p>
        </div>
        <div className="flex items-end text-9xl font-bold gap-6 justify-end">
          <img src="/green.png" alt="" />
          <p>Skills</p>
          <img src="/yellow.png" alt="" />
          <p>Online</p>
        </div>
      </section>
      <section className="flex flex-col gap-5 mt-12">
        <section className="flex justify-between gap-5">
          <div className="h-60 w-4/12 bg-bergeL rounded-xl"></div>
          <div className="h-60 w-2/12 bg-purpleL rounded-xl"></div>
          <div className="h-60 w-3/12 bg-bergeD rounded-xl"></div>
          <div className="h-60 w-3/12 bg-greenL rounded-xl"></div>
        </section>
        <section className="flex justify-between gap-5">
          <div className="h-60 w-5/12 bg-yellowL rounded-xl"></div>
          <div className="h-60 w-7/12 border-2 border-white rounded-xl"></div>
        </section>
      </section>
    </article>
  );
}
