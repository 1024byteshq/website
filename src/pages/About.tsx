import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About 1024</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          1024 is a research and engineering company dedicated to pushing the
          boundaries of technology. Our team of experts combines academic
          excellence with practical industry experience to deliver innovative
          solutions that shape the future.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p className="text-lg mb-6">
          We strive to advance technology through rigorous research and
          practical engineering solutions. Our mission is to bridge the gap
          between academic research and real-world applications, creating value
          for our clients and society at large.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="text-lg mb-2">
            Excellence in Research and Development
          </li>
          <li className="text-lg mb-2">Innovation and Creativity</li>
          <li className="text-lg mb-2">Ethical Technology Development</li>
          <li className="text-lg mb-2">Collaboration and Knowledge Sharing</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
        <p className="text-lg mb-6">
          Our team consists of researchers, engineers, and industry experts who
          bring diverse perspectives and expertise to every project. We believe
          in continuous learning and staying at the forefront of technological
          advancement.
        </p>
      </div>
    </div>
  );
};

export default About;
