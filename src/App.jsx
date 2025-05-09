import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-5 bg-red-50 dark:bg-zinc-950 min-h-screen pb-10">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
