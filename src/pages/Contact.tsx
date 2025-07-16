import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mb-8">
      {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black text-center">
        Contact Us
      </h1> */}
      <p className="text-lg sm:text-xl lg:text-2xl text-black/80 text-center mb-8 mt-8">
        Reach out to us at:
      </p>
      <div className="max-w-md mx-auto bg-white/10 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform">
        <a
          href="mailto:hello@1024bytes.io"
          className="text-2xl sm:text-3xl lg:text-4xl text-black hover:text-[#9E6BC7]/80 transition-colors hover:no-underline block text-center"
        >
          build@1024bytes.io
        </a>
      </div>
    </div>
  );
};

export default Contact;
