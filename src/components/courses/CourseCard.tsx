import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  coverImage: string;
  author: string;
  enrolledStudents: number;
  id: string;
}

export default function CourseCard({
  title,
  coverImage,
  author,
  enrolledStudents,
  id,
}: CourseCardProps) {
  return (
    <Link to={`/courses/${id}`} className="flex flex-col gap-1">
      <img
        className="h-48 w-full object-cover rounded-xl"
        src={coverImage}
        alt=""
      />
      <p className="font-bold text-2xl">{title}</p>
      <p className="">{author}</p>
      <p className="font-bold text-lg">{enrolledStudents}</p>
      <p className="font-bold">Free</p>
    </Link>
  );
}
