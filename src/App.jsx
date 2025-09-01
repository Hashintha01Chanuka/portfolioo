import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Technology from "./components/Technology";

const App = () => {
  return (
    <>
      <Navbar />
       <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <About />
        <Technology />
        <Gallery />
        <Contact />
        <hr />
        <Footer />
      </div>
    </>
  );
};

export default App;
