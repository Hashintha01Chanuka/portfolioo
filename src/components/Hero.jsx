import React from "react";
import logo from "../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="flex flex-col items-center -mt-5">
      <img src={logo} alt="Logo" className="w-32 rounded-full h-32 mb-6" />
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        I'm Hashintha Chanuka <br />
        <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">
          FullStack developer
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        I craft full-stack web applications with MERN, Spring Boot, and Laravel
        — combining clean code, modern design, and a passion for technology to
        deliver impactful digital experiences.
      </p>
      <div className="flex justify-center my-10">
        <AnchorLink
          href="#contact"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Contact Me
        </AnchorLink>

        {/* Resume Download Button */}
        <a
          href="/CV_Hashintha_Chanuka.pdf"
          download="CV_Hashintha_Chanuka.pdf"
          className="py-3 px-4 mx-3 rounded-md border hover:bg-gray-700"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
