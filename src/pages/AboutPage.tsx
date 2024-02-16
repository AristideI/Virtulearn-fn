import Testimonials from "../components/Testimonials";
import AboutSection from "../components/about/AboutSection";
import AboutHero from "../components/about/Hero";

export default function AboutPage() {
  return (
    <article>
      <AboutHero />
      <AboutSection />
      <Testimonials />
    </article>
  );
}
