import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Demo } from "./components/Demo";
import { FeaturedWork } from "./components/FeaturedWork";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";

export default function App() {
  return (
    <div className="grain min-h-screen bg-[#f9fafb] text-ink">
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <Demo />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
