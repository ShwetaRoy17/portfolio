import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Stats from "./components/sections/Stats";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import useReveal from "./hooks/useReveal";
import useStickyNav from "./hooks/useStickyNav";



export default function App() {
  useReveal();
  useStickyNav();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
