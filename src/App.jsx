import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Timeline from "./Components/Timeline/Timeline";
import Theme from "./Components/Theme/Theme";
import Prize from "./Components/Prizes/Prize";
import Sponsorship from "./Components/Sponsorships/Sponsorship";
import Footer from "./Components/Footer/Footer";
import Timer from "./Components/Timer/timer";
import Team from "./Components/Team/Team";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Timer />
              <Timeline />
              <Theme />
              <Prize />
              <Sponsorship />
              <Footer />
            </>
          }
        />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
      </Routes>
    </>
  );
};

export default App;
