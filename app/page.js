import Collected from "./components/Collected";
import Collections from "./components/Collections";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <section>
      <Hero />
      <Products />
      <Contact />
      <Slider />
      <Collections />
      <Collected />
      <Footer />
    </section>
  );
}
