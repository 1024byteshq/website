import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NetworkBackground from "../components/NetworkBackground";

const Home: React.FC = () => {
  const [isGlitching, setIsGlitching] = useState(true);
  const [displayText, setDisplayText] = useState("1024");
  const [glitchIntensity, setGlitchIntensity] = useState(1);
  const [showGlitchLines, setShowGlitchLines] = useState(false);
  const glitchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Enhanced random number generator with more realistic patterns
    const getRandomNumber = () => {
      const patterns = [
        "1024",
        "2048",
        "4096",
        "8192",
        "0000",
        "1111",
        "2222",
        "3333",
        "4444",
        "5555",
        "6666",
        "7777",
        "8888",
        "9999",
        "0001",
        "1023",
        "1025",
        "2047",
        "2049",
        "4095",
        "4097",
        "8191",
        "8193",
        "????",
        "####",
        "%%%%",
        "$$$$",
        "!!!!",
        "****",
        "++++",
        "----",
        "====",
      ];
      return patterns[Math.floor(Math.random() * patterns.length)];
    };

    // Progressive glitch effect with varying intensity
    const startGlitchSequence = () => {
      let phase = 0;
      const phases = [
        { duration: 800, interval: 80, intensity: 0.3 }, // Slow start
        { duration: 1200, interval: 30, intensity: 0.8 }, // Intense middle
        { duration: 1000, interval: 60, intensity: 0.5 }, // Slow finish
      ];

      const glitchInterval = setInterval(() => {
        const currentPhase = phases[phase];
        if (!currentPhase) return;

        setDisplayText(getRandomNumber());
        setGlitchIntensity(currentPhase.intensity);
        setShowGlitchLines(Math.random() > 0.7);

        // Move to next phase
        setTimeout(() => {
          phase++;
          if (phase >= phases.length) {
            clearInterval(glitchInterval);
            // Final reveal
            setTimeout(() => {
              setDisplayText("1024");
              setIsGlitching(false);
              setGlitchIntensity(0);
              setShowGlitchLines(false);
            }, 200);
          }
        }, currentPhase.duration);
      }, phases[phase]?.interval || 50);
    };

    // Start the enhanced glitch sequence
    startGlitchSequence();

    return () => {
      if (glitchTimeoutRef.current) {
        clearTimeout(glitchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <NetworkBackground />

      {/* Left Vein Background */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 md:w-96 lg:w-[28rem] z-0 opacity-40"
        style={{
          backgroundImage: "url('/left-vein.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
        }}
      />

      {/* Right Vein Background */}
      <div
        className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 md:w-96 lg:w-[28rem] z-0 opacity-40"
        style={{
          backgroundImage: "url('/right-vein.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      />

      {/* Mobile Navigation */}
      <nav className="md:hidden absolute bottom-8 left-8 flex flex-col items-start gap-6 z-10">
        <Link to="/" className="nav-link text-2xl text-black">
          Home
        </Link>
        {/* <Link to="/rd" className="nav-link text-2xl">
          R&D
        </Link> */}
        <Link to="/about" className="nav-link text-2xl text-black">
          About
        </Link>
        {/* <Link to="/node" className="nav-link text-2xl text-white">
          Node
        </Link> */}
        <Link to="/services" className="nav-link text-2xl text-black">
          Services
        </Link>
        <Link to="/products" className="nav-link text-2xl text-black">
          Product Highlights
        </Link>
        {/* <Link to="/contact" className="nav-link text-2xl text-white">
          Contact
        </Link> */}
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-12 mb-8 z-10">
        <Link to="/" className="nav-link text-2xl text-black">
          Home
        </Link>
        {/* <Link to="/rd" className="nav-link text-xl">
          R&D
        </Link> */}
        <Link to="/about" className="nav-link text-2xl text-black">
          About
        </Link>
        <Link to="/services" className="nav-link text-2xl text-black">
          Services
        </Link>
        <Link to="/products" className="nav-link text-2xl text-black">
          Product Highlights
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

      {/* Glitch Lines Overlay */}
      {showGlitchLines && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="glitch-lines"></div>
        </div>
      )}

      {/* Mobile Rotated Text */}
      <div className="md:hidden absolute right-8 top-1/2 -translate-y-1/2 z-10 mt-8">
        <h1
          className={`font-orbitron text-5xl sm:text-6xl font-bold text-black tracking-wider whitespace-nowrap origin-right rotate-90 ${isGlitching ? "glitch-text-mobile" : ""}`}
          data-text={`${displayText} Bytes`}
          style={{
            filter: isGlitching
              ? `hue-rotate(${Math.random() * 360}deg) contrast(${1 + glitchIntensity * 0.5})`
              : "none",
          }}
        >
          {displayText} Bytes
        </h1>
      </div>

      {/* Desktop Centered Text */}
      <h1
        className={`hidden md:block font-orbitron text-8xl lg:text-9xl font-bold text-[#000] tracking-wider text-center z-10 ${isGlitching ? "glitch-text" : ""}`}
        data-text={`${displayText} Bytes`}
        style={{
          filter: isGlitching
            ? `hue-rotate(${Math.random() * 360}deg) contrast(${1 + glitchIntensity * 0.5})`
            : "none",
          transform: isGlitching
            ? `translateX(${Math.random() * 8 - 4}px) translateY(${Math.random() * 8 - 4}px)`
            : "none",
        }}
      >
        {!isGlitching && (
          <span className="typing-effect">{displayText} Bytes</span>
        )}
        {isGlitching && `${displayText} Bytes`}
      </h1>
    </div>
  );
};

export default Home;
