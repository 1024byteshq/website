import React from "react";

const Community: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          Bytes Circle
        </h2>

        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"></div>
          <div className="relative p-8 rounded-2xl border border-primary/10">
            <p className="text-xl text-gray-300 text-center">
              Welcome to Bytes Circle, a community where technology enthusiasts
              come together to share knowledge, discuss technical topics, and
              build meaningful connections.
            </p>
          </div>
        </div>

        {/* Membership Process */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-primary/10 mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            How to Join
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Create a Pull Request
                </h4>
                <p className="text-gray-300 mb-4">
                  Create a PR to our{" "}
                  <a
                    href="https://github.com/1024byteshq/Bytes-Circle-Community.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    Bytes Circle Community repository
                  </a>{" "}
                  and add your GitHub username.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Fill the Google Form
                </h4>
                <p className="text-gray-300 mb-4">
                  Complete the membership form to provide additional information
                  about yourself.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Get Accepted
                </h4>
                <p className="text-gray-300">
                  Once your PR is merged, you'll be officially accepted into the
                  Bytes Circle community!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* What We Do Card */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10 h-full">
              <div className="aspect-video bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">
                What We Do
              </h3>
              <p className="text-gray-300">
                We meet occasionally to dive deep into technical discussions,
                share experiences, and learn from each other. Our gatherings are
                casual and friendly, featuring drinks, snacks, and plenty of
                engaging banter.
              </p>
            </div>
          </div>

          {/* Join Us Card */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10 h-full">
              <div className="aspect-video bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">
                Join Us
              </h3>
              <p className="text-gray-300">
                Whether you're a seasoned developer, a tech enthusiast, or just
                curious about technology, Bytes Circle welcomes you. Our
                community thrives on diverse perspectives and shared learning.
              </p>
            </div>
          </div>
        </div>

        {/* Stay Connected Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"></div>
          <div className="relative p-8 rounded-2xl border border-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Stay Connected
                </h3>
                <p className="text-gray-300 mb-6">
                  Follow us for updates on upcoming meetups and community
                  events. We're always excited to welcome new members to our
                  growing community.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/1024byteshq/Bytes-Circle-Community.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    Join GitHub
                  </a>
                  <a
                    href="https://x.com/1024bytesHQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    Follow X
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
