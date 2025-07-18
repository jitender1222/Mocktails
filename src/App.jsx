import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktail from "./components/Cocktail";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktail />
      <About />
      <Art />
      <Menu />
      <Footer />
    </main>
  );
};

export default App;
