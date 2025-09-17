import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About: React.FC = () => {
  const aboutRef = useScrollAnimation();

  return (
    <div
      ref={aboutRef.ref}
      className={`container mx-auto relative group cursor-pointer mt-20 md:mt-40 fade-in-up ${aboutRef.isVisible ? "visible" : ""}`}
    >
      {/* Red background div that translates down on hover */}
      <div className=" hidden md:block border-4 border-black h-fit absolute  w-fit transition-transform duration-500 ease-out group-hover:-translate-y-10">
        <h1 className=" text-4xl p-4 sm:text-5xl font-bold text-black mb-8 bg-black/45 w-full">
          <p className="opacity-0">Why We Exist?</p>
        </h1>

        <div className="opacity-0 mx-auto max-w-6xl space-y-6 text-lg leading-relaxed">
          <p className="text-black/80">
            <b className="text-xl">1024 - pronounced "Ten-Twenty-Four" </b>{" "}
            Bytes is dedicated to creating a more intentional and integrated
            internet. We build enduring systems with intelligence at the core of
            software, rigorously testing ideas to ensure they deliver real-world
            impact. We prioritize signal over noise, crafting simple, powerful,
            and useful systems—whether internal tools, agentic infrastructures,
            or foundational codebases.
          </p>

          <p className="text-black/80">
            We partner with founders, researchers, and engineers to build
            resilient, context-aware, and future-ready software that goes beyond
            prototypes.
          </p>

          <p className="text-black/80">
            Our mission is to build what matters, sharpen what exists, and help
            technical ideas grow into long-term value.
          </p>
        </div>
      </div>

      {/* Main content div that stays in place */}
      <div className=" md:mt-10  border-4 border-black h-fit relative z-10 bg-white  transition-transform duration-500 ease-out md:group-hover:translate-y-10 md:group-hover:translate-x-10 w-full">
        <h1 className=" text-2xl  text-center md:text-left  md:text-4xl p-4 sm:text-5xl font-bold text-black mb-8 bg-[#a0ff6a]/80 w-full">
          Why We Exist?
        </h1>

        <div className="mx-auto max-w-6xl space-y-6 text-lg leading-relaxed px-4 md:px-0 text-center md:text-left pb-8">
          <p className="text-black/80">
            <b className="text-xl">1024 - pronounced "Ten-Twenty-Four" </b>{" "}
            Bytes is dedicated to creating a more intentional and integrated
            internet. We build enduring systems with intelligence at the core of
            software, rigorously testing ideas to ensure they deliver real-world
            impact. We prioritize signal over noise, crafting simple, powerful,
            and useful systems—whether internal tools, agentic infrastructures,
            or foundational codebases.
          </p>

          <p className="text-black/80">
            We specialize in <b>AI & Intelligence Systems</b>,{" "}
            <b>Enterprise Development</b>,<b>Cloud Infrastructure</b>, and{" "}
            <b>Specialized Solutions</b> including GovTech. From mobile
            applications to production-ready systems, we help businesses
            transform their technology stack and accelerate growth.
          </p>

          <p className="text-black/80">
            We partner with{" "}
            <b>founders, researchers, engineers, and enterprises</b> to build
            resilient, context-aware, and future-ready software that goes beyond
            prototypes. Our process focuses on discovery, strategy, and
            execution to ensure every solution delivers measurable value.
          </p>

          <p className="text-black/80">
            <b className="text-xl">Our mission; </b>to build what matters,
            sharpen what exists, and help technical ideas grow into long-term
            value through intelligent, scalable solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
//px-4  sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16  mx-auto
