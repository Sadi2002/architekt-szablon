import Hero from "./homePage/sections/Hero";
import About from "./homePage/sections/About";
import Projects from "./homePage/sections/Projects";

export const metadata = {
  title: "Sadowski Studio - Nowoczesna Architektura i Design",
  description:
    "Odkryj Sadowski Studio - Twoje źródło nowoczesnej architektury i designu. Tworzymy przestrzenie, które inspirują i zachwycają.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}
