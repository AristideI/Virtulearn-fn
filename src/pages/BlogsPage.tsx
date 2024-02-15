import Footer from "../components/Footer";
import BlogCard from "../components/blogs/BlogCard";
import BlogGrid from "../components/blogs/BlogGrid";
import BlogsHero from "../components/blogs/Hero";
import TopPicks from "../components/blogs/TopPicks";

export default function BlogPage() {
  return (
    <article className="px-16 md:px-6 sm:px-3 mt-12">
      <BlogsHero />
      <section className="flex justify-between gap-14 mt-12">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>
      <section className="flex justify-between gap-14 mt-20">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>
      <TopPicks />
      <BlogGrid />
      <Footer />
    </article>
  );
}
