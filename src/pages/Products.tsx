import React from "react";

const Products: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 mt-8 sm:mt-16 text-black text-center">
        Product Highlights
      </h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Fraqtion Finance */}
        <div className="border border-black/10 bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Fraqtion Finance
          </h2>
          <p className="text-base sm:text-lg text-black/70 leading-relaxed mb-6">
            Fraqtion Finance connects African businesses with retail investors
            to facilitate trade contract financing. Businesses receive upfront
            capital for their operations through fractional funding from
            multiple investors, while investors gain access to vetted,
            revenue-generating opportunities across the African market.
          </p>
          <a
            href="https://fraqtion.finance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#aa9ff1] hover:text-[#aa9ff1]/80 transition-colors text-sm sm:text-base font-medium"
          >
            Learn more about Fraqtion →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
