import Hero from "./components/Hero";
import FeaturedProduct from "./components/FeaturedProduct";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import useTitle from "../../hooks/useTitle";
export function Home() {
  useTitle("Access Latest Computer Science Books");
  return (
    <main>
      <Hero />
      <FeaturedProduct />
      <Testimonial />
      <Faq />
    </main>
  );
}
