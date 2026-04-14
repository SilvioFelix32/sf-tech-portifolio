import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experiences from "@/components/Experiences";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
