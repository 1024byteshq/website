import React from "react";

const RD: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Research & Development</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          At 1024, we are committed to pushing the boundaries of technology
          through innovative research and development. Our R&D team works on
          cutting-edge projects that shape the future of technology.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Research Areas</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="text-lg mb-2">
            Artificial Intelligence and Machine Learning
          </li>
          <li className="text-lg mb-2">Quantum Computing</li>
          <li className="text-lg mb-2">Blockchain Technology</li>
          <li className="text-lg mb-2">Cybersecurity</li>
          <li className="text-lg mb-2">Cloud Computing</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Current Projects</h2>
        <p className="text-lg mb-6">
          We are currently working on several groundbreaking projects in various
          fields. Our research focuses on developing practical solutions that
          can be applied to real-world challenges.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Collaboration</h2>
        <p className="text-lg mb-6">
          We believe in the power of collaboration. We work with academic
          institutions, industry partners, and research organizations to advance
          technology and create innovative solutions.
        </p>
      </div>
    </div>
  );
};

export default RD;
