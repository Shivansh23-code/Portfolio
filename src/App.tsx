import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Extras from "./components/Extras";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Stack />
        <Experience />
        <Projects />
        <Extras />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
