import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-5 bg-zinc-950 min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
