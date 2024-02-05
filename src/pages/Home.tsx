import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Hero from "../components/HeroSection";
import Popular from "../components/Popular";
import Revol from "../components/Revol";

export default function HomePage() {
  return (
    <article>
      <Hero />
      <Hero2 />
      <Popular />
      <Revol />
      <Blogs />
      <Footer />
    </article>
  );
}
