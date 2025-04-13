import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-20 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 mt-8 sm:mt-16 text-white">
        Why?
      </h1>

      <div className="max-w-3xl mx-auto">
        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          We are an engineering and research lab on a mission to build
          technology that truly matters. At 1024 Bytes, we sit at the
          intersection of innovation and impact, crafting software solutions
          with a deep sense of purpose, laying computer bytes like bricks to
          build alternate inclusive futures.
        </p>

        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          As AI and blockchain continue to integrate into everyday life, most
          organizations focus on boosting developer productivity. That's
          valuable but, it's just the beginning. There are vast, untapped
          opportunities in agriculture, commerce, healthcare, and governance
          where these technologies can reshape how we live and work.
        </p>

        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          Our mission is to build what matters, using web and mobile
          technologies, AI, and blockchain to power real-world change.
        </p>

        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed">
          We aim to architect software that solves meaningful problems while
          staying lean, talent-driven, and obsessed with fast, high-quality
          delivery.
        </p>
      </div>
    </div>
  );
};

export default About;
