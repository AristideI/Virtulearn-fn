import { Link } from "react-router-dom";
import CourseCard from "../../components/courses/CourseCard";
import { umlCourse, pythonCourse } from "../../courses";

export default function CoursesPage() {
  const courses = [umlCourse, pythonCourse];
  const coursesCards = courses.map((course, ind) => (
    <CourseCard
      key={ind}
      title={course.title}
      coverImage={course.coverImage}
      author={course.author}
      enrolledStudents={course.students}
      id={course.id}
    />
  ));
  return (
    <article className="px-16 md:px-6 sm:px-3 mb-12">
      <section className="flex justify-between items-center">
        <section className="flex flex-col gap-6 justify-center  w-1/2 my-12">
          <p className="font-bold text-6xl">Most Popular Courses</p>
          <p>
            Dive into the latest and greatest! Our "Most Popular Courses"
            feature the trending topics everyone is talking about. Elevate your
            skills with the hottest picks on VirtuLearn. Stay in the know, stay
            ahead.
          </p>
        </section>
        <Link
          to="/courses/add"
          className="text-xl px-8 py-2 rounded-xl bg-greenD font-semibold"
        >
          Add Course
        </Link>
      </section>
      <section className="grid grid-cols-3 gap-4">{coursesCards}</section>
    </article>
  );
}
