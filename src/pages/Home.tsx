import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NetworkBackground from "../components/NetworkBackground";

const Home: React.FC = () => {
  const [isGlitching, setIsGlitching] = useState(true);
  const [displayText, setDisplayText] = useState("1024");

  useEffect(() => {
    // Random number generator
    const getRandomNumber = () =>
      Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0");

    // Initial glitch effect
    const glitchInterval = setInterval(() => {
      setDisplayText(getRandomNumber());
    }, 50);

    // Stop glitching after 2 seconds
    const stopGlitching = setTimeout(() => {
      clearInterval(glitchInterval);
      setDisplayText("1024");
      setIsGlitching(false);
    }, 2000);

    return () => {
      clearInterval(glitchInterval);
      clearTimeout(stopGlitching);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <NetworkBackground />

      {/* Mobile Navigation */}
      <nav className="md:hidden absolute bottom-8 left-8 flex flex-col items-start gap-6 z-10">
        <Link to="/" className="nav-link text-2xl text-white">
          Home
        </Link>
        {/* <Link to="/rd" className="nav-link text-2xl">
          R&D
        </Link> */}
        <Link to="/about" className="nav-link text-2xl text-white">
          About
        </Link>
        {/* <Link to="/node" className="nav-link text-2xl text-white">
          Node
        </Link> */}
        <Link to="/services" className="nav-link text-2xl text-white">
          Services
        </Link>
        <Link to="/projects" className="nav-link text-2xl text-white">
          Project Highlights
        </Link>
        {/* <Link to="/contact" className="nav-link text-2xl text-white">
          Contact
        </Link> */}
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-12 mb-8 z-10">
        <Link to="/" className="nav-link text-xl text-white">
          Home
        </Link>
        {/* <Link to="/rd" className="nav-link text-xl">
          R&D
        </Link> */}
        <Link to="/about" className="nav-link text-xl text-white">
          About
        </Link>
        <Link to="/services" className="nav-link text-xl text-white">
          Services
        </Link>
        <Link to="/projects" className="nav-link text-2xl text-white">
          Project Highlights
        </Link>
        {/* <Link to="/node" className="nav-link text-xl text-white">
          Node
        </Link> */}
        {/* <Link to="/community" className="nav-link text-xl text-white">
          Community
        </Link>
        <Link to="/contact" className="nav-link text-xl text-white">
          Contact
        </Link> */}
      </nav>

      {/* Mobile Rotated Text */}
      <div className="md:hidden absolute right-8 top-1/2 -translate-y-1/2 z-10 mt-8">
        <h1
          className={`font-orbitron text-5xl sm:text-6xl font-bold text-white tracking-wider whitespace-nowrap origin-right rotate-90 ${isGlitching ? "glitch-text" : ""}`}
          data-text={`${displayText} Bytes`}
        >
          {displayText} Bytes
        </h1>
      </div>

      {/* Desktop Centered Text */}
      <h1
        className={`hidden md:block font-orbitron text-8xl lg:text-9xl font-bold text-white tracking-wider text-center z-10 ${isGlitching ? "glitch-text" : ""}`}
        data-text={`${displayText} Bytes`}
      >
        {displayText} Bytes
      </h1>
    </div>
  );
};

export default Home;
