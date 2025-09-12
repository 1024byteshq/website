import React from "react";

const Products: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 mt-8 sm:mt-16 text-black">
        Product Highlights
      </h1>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Fraqtion Intelligence */}
        <div className="border-2 border-black bg-[#92e363]/80 p-6 sm:p-8 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <img
              src="/assets/fraqtion.png"
              alt="Fraqtion Intelligence"
              className="w-full lg:w-1/3 object-cover "
            />
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                Fraqtion Intelligence
              </h2>
              <p className="text-base sm:text-lg text-black/90 leading-relaxed mb-4">
                Fraqtion Intelligence is a modular AI platform for discovering
                insights and simulating strategies. Built for analysts,
                founders, and decision-makers, it turns complex data like social
                feeds, reviews, websites, spreadsheets, APIs, etc into dynamic
                dashboards and AI-powered summaries. Users activate “pellets”
                (insight modules), select a persona, and explore a shared data
                lake to surface signals that truly matter.
              </p>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:text-white transition-colors text-sm sm:text-base font-medium"
              >
                Learn more about Fraqtion →
              </a>
            </div>
          </div>
        </div>

        {/* Evolvables */}
        {/* <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-[#9E6BC7]">
            Evolvables
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-black/90 leading-relaxed">
            Evolvables is an AI-powered collaborative art protocol for
            coordinating human creativity into proof-of-art for powering
            on-chain utilities.
          </p>
          <a
            href="https://evolvables.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white/80 underline text-sm sm:text-base"
          >
            Learn more about Evolvables →
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Products;
