import BlogsHero from "../components/blogs/Hero";
import TopPicks from "../components/blogs/TopPicks";

export default function BlogPage() {
  return (
    <article className="px-16 md:px-6 sm:px-3 mt-12">
      <BlogsHero />
      <TopPicks />
      <section></section>
    </article>
  );
}
