import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-20 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-black mb-8">Privacy Policy</h1>
      <div className="text-black/90 space-y-6 max-w-3xl">
        <p className="text-black/80">
          1024 Bytes ("we", "our", or "us") is committed to protecting your
          privacy. This policy outlines how we collect, use, and protect your
          information when you use our website, services, or engage with us for
          AI & Intelligence Systems, Enterprise Development, Cloud
          Infrastructure, and Specialized Solutions including GovTech.
        </p>

        <h2 className="text-2xl font-semibold mt-8 text-black/80">
          1. Information We Collect
        </h2>
        <p className="text-black/80">We may collect information including:</p>
        <ul className="list-disc pl-6 text-black/80 space-y-2">
          <li>
            <b>Contact Information:</b> Name, email address, phone number,
            company details
          </li>
          <li>
            <b>Project Information:</b> Project inquiries, technical
            requirements, business objectives
          </li>
          <li>
            <b>Technical Data:</b> System specifications, usage patterns,
            performance metrics
          </li>
          <li>
            <b>Communication Records:</b> Consultation notes, project
            discussions, feedback
          </li>
          <li>
            <b>Website Analytics:</b> Usage data through tools like Google
            Analytics
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 text-black/80">
          2. How We Use Your Information
        </h2>
        <p className="text-black/80">We use your information to:</p>
        <ul className="list-disc pl-6 text-black/80 space-y-2">
          <li>
            <b>Provide Services:</b> Deliver AI systems, enterprise development,
            cloud infrastructure, and specialized solutions
          </li>
          <li>
            <b>Project Management:</b> Plan, execute, and maintain your
            technical solutions
          </li>
          <li>
            <b>Communication:</b> Respond to inquiries, provide consultations,
            and project updates
          </li>
          <li>
            <b>Service Improvement:</b> Enhance our offerings and develop new
            capabilities
          </li>
          <li>
            <b>Compliance:</b> Meet regulatory requirements, especially for
            GovTech solutions
          </li>
          <li>
            <b>Analytics:</b> Understand platform usage and optimize user
            experience
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 text-black/80">
          3. Third-Party Services
        </h2>
        <p className="text-black/80">
          We may use third-party services including:
        </p>
        <ul className="list-disc pl-6 text-black/80 space-y-2">
          <li>
            <b>Analytics:</b> Google Analytics, Vercel Analytics for website
            usage monitoring
          </li>
          <li>
            <b>Cloud Services:</b> AWS, Azure, GCP for infrastructure and data
            processing
          </li>
          <li>
            <b>Communication:</b> Email services, project management tools
          </li>
          <li>
            <b>Development:</b> Code repositories, CI/CD platforms, monitoring
            tools
          </li>
        </ul>
        <p className="text-black/80 mt-4">
          These services may collect anonymized data via cookies or similar
          technologies. We ensure all third-party integrations comply with
          applicable privacy regulations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 text-black/80">
          4. Your Rights
        </h2>
        <p className="text-black/80">You have the right to:</p>
        <ul className="list-disc pl-6 text-black/80 space-y-2">
          <li>
            <b>Access:</b> Request copies of your personal information
          </li>
          <li>
            <b>Correction:</b> Update or correct inaccurate information
          </li>
          <li>
            <b>Deletion:</b> Request deletion of your personal data (subject to
            legal obligations)
          </li>
          <li>
            <b>Portability:</b> Receive your data in a structured,
            machine-readable format
          </li>
          <li>
            <b>Objection:</b> Object to processing of your personal information
          </li>
        </ul>
        <p className="text-black/80 mt-4">
          To exercise these rights, contact us at the email below. We will
          respond within 30 days.
        </p>

        <h2 className="text-2xl font-semibold mt-8 text-black/80">
          5. Contact
        </h2>
        <p className="text-black/80">
          For questions about this policy or to exercise your rights, email us
          at{" "}
          <a
            href="mailto:build@1024bytes.io"
            className="underline text-black/80"
          >
            build@1024bytes.io
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-8 text-black/80">
          6. Data Security & Compliance
        </h2>
        <p className="text-black/80">
          We implement appropriate technical and organizational measures to
          protect your data. For GovTech and enterprise clients, we adhere to
          relevant compliance frameworks including SOC 2, ISO 27001, and
          government security requirements as applicable.
        </p>

        <h2 className="text-2xl font-semibold mt-8 text-black/80">
          7. Policy Updates
        </h2>
        <p className="text-black/80">
          We may update this policy periodically. Significant changes will be
          communicated via email or website notice. Continued use of our
          services constitutes acceptance of the updated policy.
        </p>

        <p className="text-sm text-black/60 mt-8">Last updated: January 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
