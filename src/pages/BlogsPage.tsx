import BlogCard from "../components/blogs/BlogCard";
import BlogGrid from "../components/blogs/BlogGrid";
import BlogsHero from "../components/blogs/Hero";
import TopPicks from "../components/blogs/TopPicks";
import { ai, health } from "../blogs";

export default function BlogPage() {
  const blogs = [ai, health];
  const blogCards = blogs.map((blog, ind) => (
    <BlogCard
      key={ind}
      title={blog.title}
      id={blog.id}
      image={blog.coverImage}
      description={blog.content}
    />
  ));

  return (
    <article className="px-16 md:px-6 sm:px-3 mt-12">
      <BlogsHero />
      <section className="flex justify-start gap-14 mt-12">{blogCards}</section>
      <TopPicks />
      <BlogGrid />
    </article>
  );
}
