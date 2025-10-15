import React from "react";

const Products: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 mt-8 sm:mt-16 text-black">
        Product Highlights
      </h1>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Fraqtion Finance */}
        <div className="border-2 border-black bg-[#92e363]/80 p-6 sm:p-8 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
            Fraqtion Finance
          </h2>
          <p className="text-base sm:text-lg text-black/90 leading-relaxed mb-4">
            Fraqtion Finance is building a gateway between real-world assets and
            digital participation. We enable businesses to list real-world
            assets as tokenized opportunities on-chain, while users can
            participate directly using crypto and manage their holdings through
            a seamless dashboard experience. Our mission is to simplify
            real-world asset participation on the African continent through
            transparency, automation, and accessibility via blockchain
            technology.
          </p>
          <a
            href="https://fraqtion.finance"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline hover:text-white transition-colors text-sm sm:text-base font-medium"
          >
            Learn more about Fraqtion →
          </a>
        </div>

        {/* Anyonecanvibe */}
        <div className="border-2 border-black bg-[#92e363]/80 p-6 sm:p-8 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
            Anyonecanvibe
          </h2>
          <p className="text-base sm:text-lg text-black/90 leading-relaxed mb-4">
            Anyonecanvibe is a tool that can help anyone compose prompts which
            they can then take to any code tool of choice to implement. Whether
            you're a beginner or an experienced developer, this tool simplifies
            the process of creating effective prompts for AI coding assistants
            and other development tools.
          </p>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline hover:text-white transition-colors text-sm sm:text-base font-medium"
          >
            Learn more about Anyonecanvibe →
          </a>
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
