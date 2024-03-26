export default function CourseCard() {
  return (
    <section className="flex flex-col gap-1">
      <img
        className="h-48 w-full object-cover rounded-xl"
        src="/course.jpg"
        alt=""
      />
      <p className="font-bold text-2xl">Mathematics for Machine learning</p>
      <p className="">Aristide Isingizwe</p>
      <p className="font-bold text-lg">(+120 enrolled students)</p>
      <p className="font-bold">Free</p>
    </section>
  );
}
