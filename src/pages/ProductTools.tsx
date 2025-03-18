import React from "react";

const ProductTools: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 mt-16 text-primary">
        Product and Tools
      </h1>
      <div className="max-w-none">
        <p className="text-base sm:text-lg mb-6 text-primary">
          Discover our suite of innovative products and tools designed to help
          businesses thrive in the digital age.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
          AI-Powered Analytics Platform
        </h2>
        <p className="text-base sm:text-lg mb-6 text-primary">
          Our advanced analytics platform leverages machine learning to provide
          data-driven insights and decision-making capabilities. Transform your
          business with predictive analytics and real-time monitoring.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
          Blockchain Security Suite
        </h2>
        <p className="text-base sm:text-lg mb-6 text-primary">
          Comprehensive security tools for blockchain networks and smart
          contracts. Protect your digital assets with our state-of-the-art
          security solutions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
          Cloud Infrastructure Tools
        </h2>
        <p className="text-base sm:text-lg mb-6 text-primary">
          Streamline your cloud operations with our suite of infrastructure
          management tools. Optimize resource allocation and enhance system
          performance.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
          Cybersecurity Solutions
        </h2>
        <p className="text-base sm:text-lg mb-6 text-primary">
          Protect your digital assets with our comprehensive cybersecurity
          solutions. From threat detection to incident response, we've got you
          covered.
        </p>
      </div>
    </div>
  );
};

export default ProductTools;
