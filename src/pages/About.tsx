import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 mt-16 text-primary">Why?</h1>

      <div className="max-w-none">
        <p className="text-base sm:text-lg mb-6 text-primary">
          At 1024 Bytes, we are at the intersection of cutting-edge technology
          and meaningful impact. Our forward-thinking approach aligns with how
          innovative software solutions should be built by laying computer bytes
          brick by brick.
        </p>

        <p className="text-base sm:text-lg mb-6 text-primary">
          We want to build softwares that matter.
        </p>
        <p className="text-base sm:text-lg mb-6 text-primary">
          We want to architect products that solve real-world problems.
        </p>
      </div>
    </div>
  );
};

export default About;
