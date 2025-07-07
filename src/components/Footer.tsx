import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 text-center z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <span className="text-white text-sm sm:text-base">1024 Bytes</span>
          <div className="flex items-center gap-4">
            <a
              href="#/policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white text-sm sm:text-base transition-colors"
            >
              Policy
            </a>
            <a
              href="https://github.com/1024byteshq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white text-sm sm:text-base transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://x.com/1024bytesHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white text-sm sm:text-base transition-colors"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
