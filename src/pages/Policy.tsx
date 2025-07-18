import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-20 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-black mb-8">Privacy Policy</h1>
      <div className="text-black/90 space-y-6 max-w-3xl">
        <p className="text-black/80">
          1024bytes (“we”, “our”, or “us”) is committed to protecting your
          privacy. This policy outlines how we collect, use, and protect your
          information when you use our website or services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 text-black/80">
          1. Information We Collect
        </h2>
        <p className="text-black/80">
          We may collect information like your name, email address, project
          inquiries, and technical usage data through analytics tools.
        </p>

        <h2 className="text-2xl font-semibold mt-8 text-black/80">
          2. How We Use Your Information
        </h2>
        <p className="text-black/80">
          To communicate with you, improve our services, and understand how
          users interact with our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 text-black/80">
          3. Third-Party Services
        </h2>
        <p className="text-black/80">
          We may use tools like Google Analytics or Vercel to monitor usage.
          These services may collect anonymized data via cookies or similar
          tech.
        </p>

        <h2 className="text-2xl font-semibold mt-8 text-black/80">
          4. Your Rights
        </h2>
        <p className="text-black/80">
          You can request access, correction, or deletion of your personal
          information by contacting us.
        </p>

        <h2 className="text-2xl font-semibold mt-8 text-black/80">
          5. Contact
        </h2>
        <p className="text-black/80">
          For questions about this policy, email us at{" "}
          <a
            href="mailto:hello@1024bytes.xyz"
            className="underline text-black/80"
          >
            hello@1024bytes.xyz
          </a>
          .
        </p>

        <p className="text-sm text-black/60">Last updated: July 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
