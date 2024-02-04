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
          <div className="h-60 w-4/12 bg-bergeL rounded-xl flex flex-col justify-between text-black p-4 ">
            <p className="font-bold">Comprehensive Learning Materials</p>
            <p className="font-bold text-2xl">
              Explore a vast <span className="bg-bergeD px-4">library</span> of
              curated content aligned with industry standards
            </p>
            <p>ensuring a thorough understanding of your chosen subjects.</p>
          </div>
          <div className="h-60 w-2/12 bg-purpleL rounded-xl flex flex-col text-white justify-around p-4">
            <img className="w-3/5 object-contain" src="/people.png" alt="" />
            <div className="flex flex-col">
              <p className="font-bold text-3xl">100K+</p>
              <p>Active Learners</p>
            </div>
          </div>
          <div className="h-60 w-3/12 bg-bergeD rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/learn.jpg"
              alt=""
            />
          </div>
          <div className="h-60 w-3/12 bg-greenL rounded-xl text-black overflow-hidden flex flex-col justify-around px-4">
            <p className="font-bold">Real-Time Chat Features</p>
            <p className="font-bold text-3xl">Discussion Forums</p>
            <p className="text-lg">
              Peer-To-Peer and Student-To-Mentors direct communication
            </p>
          </div>
        </section>
        <section className="flex justify-between gap-5">
          <div className="h-60 w-5/12 bg-yellowL rounded-xl relative overflow-hidden flex flex-col justify-around px-4 text-black">
            <p className="font-bold text-5xl z-10">
              Competitive <br />
              Advantage
            </p>
            <p className="z-10 text-xl">
              Explore a vast library of curated content <br /> aligned with
              industry standards
            </p>
            <img
              className="absolute top-0 left-0 w-full h-full object-cover object-bottom"
              src="/rubix.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-yellowL/35"></div>
          </div>
          <div className="h-60 w-7/12 border-2 border-white rounded-xl">
            <iframe
              className="w-full h-full"
              src="/public/embed/embed.html"
            ></iframe>
          </div>
        </section>
      </section>
    </article>
  );
}
