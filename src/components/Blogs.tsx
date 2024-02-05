export default function Blogs() {
  return (
    <article className="px-16 md:px-6 sm:px-3 my-20 flex justify-between items-center gap-4">
      <section className="w-7/12 flex flex-col gap-4">
        <div className="flex items-start gap-2 justify-between">
          <p className="font-bold bg-bergeL text-black py-1 px-6 rounded-xl">
            Educational
          </p>
          <p className="font-bold bg-bergeL text-black py-1 px-6 rounded-xl">
            Health
          </p>
          <p className="font-bold bg-bergeL text-black py-1 px-6 rounded-xl">
            Artificial Intelligence
          </p>
          <p className="font-bold bg-bergeL text-black py-1 px-6 rounded-xl">
            Programming
          </p>
          <p className="font-bold bg-bergeL text-black py-1 px-6 rounded-xl">
            ML
          </p>
        </div>
        <div className="w-full h-60 bg-white rounded-2xl text-black p-4">
          <p className="font-bold text-5xl">Blogs</p>
          <p className="font-bold text-5xl border-b-2 border-black pb-4 mb-1">
            Todays Picks
          </p>
          <p>
            Immerse yourself in knowledge with our thought-provoking blogs. From
            industry trends to expert opinions, our curated content keeps you
            informed. Dive into a world of insights and stay ahead in your
            learning journey. Explore the VirtuLearn blogs – where ideas come to
            life.
          </p>
        </div>
        <div className="w-full h-60 flex justify-between gap-4">
          <div className="w-1/2 h-full rounded-2xl relative overflow-hidden flex flex-col justify-end">
            <img
              className="w-full h-full absolute top-0 left-0 object-cover"
              src="/revo.jpg"
              alt=""
            />
            <div className="h-2/3 w-full bg-gradient-to-t from-purpleL to-transparent z-10 flex flex-col justify-end p-4">
              <p className="font-bold text-2xl">Is E-Learning Effective</p>
              <p className="">Aristide Isingizwe</p>
            </div>
          </div>
          <div className="w-1/2 h-full rounded-2xl relative overflow-hidden flex flex-col justify-end">
            <img
              className="w-full h-full absolute top-0 left-0 object-cover"
              src="/revo.jpg"
              alt=""
            />
            <div className="h-2/3 w-full bg-gradient-to-t from-greenD to-transparent z-10 flex flex-col justify-end p-4">
              <p className="font-bold text-2xl">Is E-Learning Effective</p>
              <p className="">Aristide Isingizwe</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-5/12 flex flex-col justify-between gap-4">
        <div className="w-full h-72 rounded-2xl relative overflow-hidden flex flex-col justify-end">
          <img
            className="w-full h-full absolute top-0 left-0 object-cover"
            src="/revo.jpg"
            alt=""
          />
          <div className="h-2/3 w-full bg-gradient-to-t from-yelllowD to-transparent z-10 flex flex-col justify-end p-4">
            <p className="font-bold text-2xl">Is E-Learning Effective</p>
            <p className="">Aristide Isingizwe</p>
          </div>
        </div>
        <div className="w-full h-60 rounded-2xl relative overflow-hidden flex flex-col justify-end">
          <img
            className="w-full h-full absolute top-0 left-0 object-cover"
            src="/revo.jpg"
            alt=""
          />
          <div className="h-2/3 w-full bg-gradient-to-t from-bergeD to-transparent z-10 flex flex-col justify-end p-4">
            <p className="font-bold text-2xl">Is E-Learning Effective</p>
            <p className="">Aristide Isingizwe</p>
          </div>
        </div>
      </section>
    </article>
  );
}
