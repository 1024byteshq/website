import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 mt-16 text-primary">Contact</h1>
      <div className="max-w-none">
        <p className="text-base sm:text-lg mb-6 text-primary">
          Hi! 👋🏽 looking forward to build out your next amazing idea or system
          and would need a technical partner? or maybe you just want to find
          ways we can collaborate to do work that matters... we're an email
          away.{" "}
          <a
            href="mailto:hello@1024bytes.io"
            className="text-primary hover:text-primary-light transition-colors"
          >
            hello@1024bytes.io
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
