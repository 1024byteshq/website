import React from "react";

const ProductTools: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Product and Tools</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Discover our suite of innovative products and tools designed to help
          businesses and developers build the future of technology.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-secondary-light rounded-lg">
            <h3 className="text-xl font-bold mb-4">Cloud Platform</h3>
            <p className="text-lg mb-4">
              A comprehensive cloud platform for building and deploying scalable
              applications.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Automated deployment</li>
              <li>Scalable infrastructure</li>
              <li>Advanced monitoring</li>
              <li>Security features</li>
            </ul>
          </div>

          <div className="p-6 bg-secondary-light rounded-lg">
            <h3 className="text-xl font-bold mb-4">Development Tools</h3>
            <p className="text-lg mb-4">
              Essential tools for modern software development and engineering.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Code analysis</li>
              <li>Testing frameworks</li>
              <li>CI/CD pipelines</li>
              <li>Documentation tools</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Open Source Tools</h2>
        <p className="text-lg mb-6">
          We contribute to and maintain several open-source tools that help
          developers build better software. Our tools are designed to be
          efficient, reliable, and easy to use.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
        <p className="text-lg mb-6">
          Ready to explore our products and tools? Visit our documentation or
          contact us to learn more about how we can help you achieve your
          technology goals.
        </p>
      </div>
    </div>
  );
};

export default ProductTools;
