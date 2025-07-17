import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Heading */}
      <div className="text-center mt-10 mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black border-4 border-black inline-block px-4 py-2 break-words">
          Get in Touch
        </h1>
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-black/80 max-w-xl mx-auto px-2">
          Whether you're building, investing, or exploring partnerships... drop
          us a line.
        </p>
      </div>

      {/* Email Card */}
      <div className="max-w-md w-full mx-auto border-4 border-black rounded-xl p-6 sm:p-8 bg-white hover:shadow-xl transition-shadow">
        <a
          href="mailto:build@1024bytes.io"
          className="block text-center text-sm sm:text-base md:text-xl lg:text-3xl font-mono text-black hover:text-[#9E6BC7] transition-colors break-words"
        >
          build@1024bytes.io
        </a>
      </div>
    </div>
  );
};

export default Contact;
