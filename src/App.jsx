import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Service from "./components/Service";
import Interest from "./components/Interest";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Interest/>
      <Skills />
      <Service/>
      <Hireme />
      <Project />
      <Testimonials/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
