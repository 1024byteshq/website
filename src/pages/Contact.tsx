import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 mt-8 sm:mt-16 text-white">
        Contact
      </h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          Hi! 👋🏽 looking forward to build out your next amazing idea or system
          and would need a technical partner? or maybe you just want to find
          ways we can collaborate to do work that matters... we're an email
          away.{" "}
          <a
            href="mailto:hello@1024bytes.io"
            className="text-white hover:text-white/80 transition-colors underline"
          >
            hello@1024bytes.io
          </a>
        </p>
        <div className="mt-6 sm:mt-8">
          <p className="text-sm sm:text-base lg:text-lg mb-4 text-white/90 leading-relaxed">
            You can also find us on{" "}
            <a
              href="https://x.com/1024bytesHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors underline"
            >
              X (Twitter)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
