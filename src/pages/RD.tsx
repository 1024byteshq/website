import React from "react";

const RD: React.FC = () => {
  return (
    <div className="container mt-20 mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 mt-16 text-primary">
        Research & Development
      </h1>
      <div className="max-w-none">
        <p className="text-base sm:text-lg mb-6 text-primary">
          At 1024, we are committed to pushing the boundaries of technology
          through innovative research and development. Our R&D team works on
          cutting-edge projects that shape the future of technology.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
          Our Research Areas
        </h2>
        <ul className="list-disc pl-6 mb-6 text-primary">
          <li className="text-base sm:text-lg mb-2">
            Artificial Intelligence and Machine Learning
          </li>
          <li className="text-base sm:text-lg mb-2">Quantum Computing</li>
          <li className="text-base sm:text-lg mb-2">Blockchain Technology</li>
          <li className="text-base sm:text-lg mb-2">Cybersecurity</li>
          <li className="text-base sm:text-lg mb-2">Cloud Computing</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
          Latest Research
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors border border-secondary/20">
            <h3 className="text-xl font-bold mb-4 text-primary">
              Quantum Computing Applications
            </h3>
            <p className="text-base sm:text-lg mb-4 text-primary">
              Exploring the potential of quantum computing in solving complex
              optimization problems.
            </p>
            <a
              href="https://medium.com/@1024bytes/quantum-computing-applications"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light transition-colors inline-flex items-center"
            >
              Read on Medium
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          <div className="p-6 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors border border-secondary/20">
            <h3 className="text-xl font-bold mb-4 text-primary">
              AI in Sustainable Development
            </h3>
            <p className="text-base sm:text-lg mb-4 text-primary">
              How artificial intelligence is helping achieve the UN Sustainable
              Development Goals.
            </p>
            <a
              href="https://medium.com/@1024bytes/ai-sustainable-development"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light transition-colors inline-flex items-center"
            >
              Read on Medium
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
          Research Papers
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors border border-secondary/20">
            <h3 className="text-xl font-bold mb-2 text-primary">
              Blockchain for Climate Action
            </h3>
            <p className="text-base sm:text-lg mb-4 text-primary">
              A comprehensive analysis of blockchain technology's role in
              climate change mitigation and adaptation.
            </p>
            <a
              href="https://medium.com/@1024bytes/blockchain-climate-action"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light transition-colors inline-flex items-center"
            >
              Read Paper
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
          Collaboration
        </h2>
        <p className="text-base sm:text-lg mb-6 text-primary">
          We believe in the power of collaboration. We work with academic
          institutions, industry partners, and research organizations to advance
          technology and create innovative solutions.
        </p>
      </div>
    </div>
  );
};

export default RD;
