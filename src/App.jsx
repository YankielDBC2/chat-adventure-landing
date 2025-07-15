import React from "react";
import Hero from "./components/home/Hero";
import Lore from "./components/lore/Lore";
import ClassSelection from "./components/classes/ClassSelection";
import CTA from "./components/home/CTA";
import "animate.css";

const App = () => {
  return (
    <>
      <Hero />
      <Lore />
      <ClassSelection />
      <CTA />
    </>
  );
};

export default App;