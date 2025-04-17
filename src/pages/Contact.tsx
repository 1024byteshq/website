import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 mt-8 sm:mt-16 text-white">
        Let's Build Something Meaningful
      </h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-base sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          At 1024 Bytes, our team brings together years of professional software
          development experience. We've witnessed firsthand the rapid evolution
          of AI and its transformative potential. While AI has democratized
          building, we understand that true success requires deep ecosystem
          knowledge and strategic implementation.
        </p>

        <p className="text-base sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          Whether you're looking to:
        </p>

        <ul className="text-base sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed list-disc pl-6 space-y-2">
          <li>Build an AI-powered proof of concept</li>
          <li>Get strategic guidance on tooling and implementation</li>
          <li>Find a technical partner to bring your vision to life</li>
          <li>Structure your technical direction</li>
        </ul>

        <p className="text-base sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          Our team is here to help. Let's discuss how we can work together to
          build something that matters.
        </p>

        <p className="text-base sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          Reach out at{" "}
          <a
            href="mailto:hello@1024bytes.io"
            className="text-white hover:text-white/80 transition-colors underline hover:no-underline"
          >
            hello@1024bytes.io
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
