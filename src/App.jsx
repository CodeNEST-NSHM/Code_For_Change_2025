import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Timeline from "./Components/Timeline/Timeline";
import Theme from "./Components/Theme/Theme";
import Prize from "./Components/Prizes/Prize";
import Sponsorship from "./Components/Sponsorships/Sponsorship";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Timeline />
      <Theme />
      <Prize/>
      <Sponsorship/>
      <Footer/>
    </div>
  );
};

export default App;
