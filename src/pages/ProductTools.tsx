import React from "react";

const ProductTools: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 mt-16 text-primary">
        Product and Tools
      </h1>
      <div className="max-w-none">
        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Fraqtion</h2>
        <p className="text-base sm:text-lg mb-6 text-primary">
          We are partnering with Fraqtion to build an open, decentralized layer
          for an on-chain future where the gap between real-world assets and
          on-chain liquidity collapses into a single, pluggable ecosystem.
        </p>
        <a
          href="https://app.fraqtion.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline"
        >
          Learn more about Fraqtion →
        </a>
      </div>
    </div>
  );
};

export default ProductTools;
