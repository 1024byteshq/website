import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const NODE_ADDRESS = "3JhJoyxSVVfsf82a9pJPQVRmFiCVn5r1pJn";

const Nodes: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(NODE_ADDRESS).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
          Lease to 1024 Node
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
          Join the LTO L1 Blockchain by leasing to our trusted node, run by the
          1024 engineering team. Earn passive rewards while supporting
          decentralization and real-world blockchain use cases.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-primary/10 mb-12">
        <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 text-center">
          Why lease with 1024 Node?
        </h3>
        <ul className="space-y-4 text-gray-300 text-sm sm:text-base list-disc list-inside">
          <li>
            🔧 Operated by experienced software engineers actively building real
            products on LTO
          </li>
          <li>
            🧠 Your lease powers new tools and LTO-Native apps which we are
            building within the LTO ecosystem
          </li>
          <li>
            💰 95% of rewards go directly to you — only 5% commission, among the
            lowest on the network
          </li>
          <li>
            🌍 Most of our team is based in Africa, where we're using LTO to
            solve real-world problems
          </li>
          <li>
            🚀 By leasing to us, you support innovation that increases demand
            and value for LTO
          </li>
          <li>
            🔒 Transparent operations and regular updates on how your lease
            fuels progress
          </li>
        </ul>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-primary/10 mb-12 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">
          How to Stake
        </h3>
        <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
          1. Get LTO from a supported exchange or DEX.
          <br />
          2. Go to your LTO wallet & choose the option to lease your LTO.
          <br />
          3. Use the node address below:
        </p>

        <div className="mb-4 overflow-x-auto">
          <code className="bg-primary/10 text-primary p-2 rounded-md select-all inline-block whitespace-nowrap">
            {NODE_ADDRESS}
          </code>
        </div>

        <button
          onClick={handleCopy}
          className="bg-primary/10 text-[#a0ff6a] px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors text-sm sm:text-base"
        >
          {copied ? (
            <span className="flex items-center justify-center gap-2">
              <CheckCircle size={18} />
              Copied!
            </span>
          ) : (
            "Copy Node Address"
          )}
        </button>
      </div>

      <div className="text-center text-xs sm:text-sm text-gray-500 px-4">
        Still have questions? Reach out to <strong>@builder1024</strong> on{" "}
        <a
          href="https://t.me/builder1024"
          className="text-primary underline hover:text-primary/80"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </div>
    </div>
  );
};

export default Nodes;
