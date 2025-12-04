import React, { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact: React.FC = () => {
  const heroRef = useScrollAnimation();
  const emailRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    description: "",
  });

  //const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email subject based on reason
    const subjectMap = {
      partnership: "Partnership Inquiry - 1024 Bytes",
      project: "Project Consultation Request - 1024 Bytes",
      inquiry: "General Inquiry - 1024 Bytes",
    };

    const subject =
      subjectMap[formData.reason as keyof typeof subjectMap] ||
      "Consultation Request - 1024 Bytes";

    // Create email body
    const emailBody = `Hello 1024 Bytes Team,

I would like to request a consultation regarding: ${formData.reason}

Name: ${formData.name}
Email: ${formData.email}

Description:
${formData.description || "No additional details provided."}

Please contact me to discuss this further.

Best regards,
${formData.name}`;

    // Create mailto link
    const mailtoLink = `mailto:build@1024bytes.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", reason: "", description: "" });
    }, 5000);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Heading */}
      <div
        ref={heroRef.ref}
        className={`text-center mt-10 mb-12 sm:mb-16 fade-in-up ${heroRef.isVisible ? "visible" : ""}`}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black inline-block px-6 py-3 break-words">
          Get in Touch
        </h1>
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-black/70 max-w-xl mx-auto px-2">
          Whether you're building, investing, or exploring partnerships... drop
          us a line or request a callback.
        </p>
      </div>

      {/* Email Card */}
      <div
        ref={emailRef.ref}
        className={`max-w-md w-full mx-auto border border-black/10 rounded-2xl p-8 sm:p-10 bg-white hover:shadow-lg transition-all duration-300 card-hover email-card fade-in-up shadow-sm ${emailRef.isVisible ? "visible" : ""}`}
      >
        <a
          href="mailto:build@1024bytes.io"
          className="block text-center text-sm sm:text-base md:text-xl lg:text-2xl font-mono text-[#aa9ff1] hover:text-[#aa9ff1]/80 transition-colors break-words"
        >
          build@1024bytes.io
        </a>
      </div>

      {/* Callback Request Form */}
      <div
        ref={formRef.ref}
        className={`mt-16 max-w-2xl mx-auto fade-in-up ${formRef.isVisible ? "visible" : ""}`}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Request a Consultation
          </h2>
          <p className="text-lg text-black/80">
            We will contact you for a free consultation
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-[#aa9ff1]/10 border border-[#aa9ff1] rounded-2xl p-8 text-center shadow-sm">
            <h3 className="text-xl font-bold text-black mb-2">
              Email Client Opened!
            </h3>
            <p className="text-black/70">
              Your email client should have opened with a pre-filled message.
              Please send the email to complete your consultation request.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-3 border border-black/20 rounded-xl bg-white text-black placeholder-black/40 focus:outline-none focus:border-[#aa9ff1] focus:ring-2 focus:ring-[#aa9ff1]/20 transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-3 border border-black/20 rounded-xl bg-white text-black placeholder-black/40 focus:outline-none focus:border-[#aa9ff1] focus:ring-2 focus:ring-[#aa9ff1]/20 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="reason"
                className="block text-sm font-medium text-black mb-2"
              >
                Reason *
              </label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 border border-black/20 rounded-xl bg-white text-black focus:outline-none focus:border-[#aa9ff1] focus:ring-2 focus:ring-[#aa9ff1]/20 transition-all duration-300"
              >
                <option value="">Select a reason</option>
                <option value="partnership">Partnership</option>
                <option value="project">Project</option>
                <option value="inquiry">General Inquiry</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-black mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-5 py-3 border border-black/20 rounded-xl bg-white text-black placeholder-black/40 focus:outline-none focus:border-[#aa9ff1] focus:ring-2 focus:ring-[#aa9ff1]/20 transition-all duration-300 resize-none"
                placeholder="Tell us about your project or inquiry..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#aa9ff1] text-white font-semibold py-4 px-10 rounded-full hover:bg-[#aa9ff1]/90 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Open Email Your Client To Send
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
