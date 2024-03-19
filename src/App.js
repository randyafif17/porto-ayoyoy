import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Footer from "./components/Footer";
import WhatWhendy from "./components/WhatWhendy";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatWhendy/>
      <Mission />
      {/* <Research /> */}
      <Footer />
    </div>
  );
}

export default App;
