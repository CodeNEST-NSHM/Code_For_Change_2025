import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Timeline from "./Components/Timeline/Timeline";
import Theme from "./Components/Theme/Theme";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Timeline />
      <Theme />
    </div>
  );
};

export default App;
