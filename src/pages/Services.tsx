import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Service {
  title: string;
  description: string;
  features: string[];
  category: string;
}

const Services: React.FC = () => {
  const heroRef = useScrollAnimation();
  const processRef = useScrollAnimation();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allServices: Service[] = [
    {
      title: "LLM & Agentic Systems",
      category: "AI & Intelligence Systems",
      description:
        "Build context-aware AI agents, internal copilots, and intelligent workflows with memory, vector search, and embedded logic that adapt to your business needs.",
      features: [
        "Custom AI agents",
        "Vector databases",
        "Memory systems",
        "Workflow automation",
      ],
    },
    {
      title: "Internal Intelligence Systems",
      category: "AI & Intelligence Systems",
      description:
        "Custom B2B solutions that track product signals, customer behavior, and operational metrics tailored to your specific business processes.",
      features: [
        "Custom analytics",
        "Operational insights",
        "Performance tracking",
        "Business intelligence",
      ],
    },
    {
      title: "Vibe Code to Stability",
      category: "Development & Engineering",
      description:
        "Transform unstable prototypes into production-ready systems. We refactor, optimize, and prepare your codebase for enterprise-scale deployment.",
      features: [
        "Code refactoring",
        "Performance optimization",
        "Scalability planning",
        "Production deployment",
      ],
    },
    {
      title: "Custom B2B Solutions",
      category: "Development & Engineering",
      description:
        "Build tailored enterprise software that integrates seamlessly with existing workflows, from CRM systems to complex data pipelines.",
      features: [
        "Enterprise integration",
        "Custom workflows",
        "API development",
        "System architecture",
      ],
    },
    {
      title: "Mobile Development",
      category: "Development & Engineering",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      features: [
        "Native iOS/Android",
        "Cross-platform apps",
        "UI/UX design",
        "App store deployment",
      ],
    },
    {
      title: "Web Development",
      category: "Development & Engineering",
      description:
        "Modern web applications built with cutting-edge technologies, from responsive frontends to robust backend systems.",
      features: [
        "Modern frontend frameworks",
        "Backend development",
        "Database design",
        "Cloud deployment",
      ],
    },
    {
      title: "Cloud Infrastructure",
      category: "Infrastructure & Cloud",
      description:
        "Design and deploy scalable cloud architectures with proper security, monitoring, and cost optimization across major cloud platforms.",
      features: [
        "Cloud architecture",
        "Auto-scaling",
        "Security hardening",
        "Cost optimization",
      ],
    },
    {
      title: "DevOps & CI/CD",
      category: "Infrastructure & Cloud",
      description:
        "Streamline your development workflow with automated testing, deployment pipelines, and infrastructure as code.",
      features: [
        "CI/CD pipelines",
        "Infrastructure as code",
        "Monitoring & logging",
        "Automated testing",
      ],
    },
    {
      title: "GovTech Solutions",
      category: "Specialized Solutions",
      description:
        "Secure, compliant government technology solutions that meet strict regulatory requirements and improve citizen services.",
      features: [
        "Security compliance",
        "Regulatory adherence",
        "Citizen services",
        "Data governance",
      ],
    },
    {
      title: "Technical Consulting",
      category: "Specialized Solutions",
      description:
        "Strategic technology consulting to help you make informed decisions about architecture, technology stack, and digital transformation.",
      features: [
        "Technology strategy",
        "Architecture review",
        "Digital transformation",
        "Team guidance",
      ],
    },
  ];

  // Group services by category for the list
  const servicesByCategory = allServices.reduce(
    (acc, service) => {
      if (!acc[service.category]) {
        acc[service.category] = [];
      }
      acc[service.category].push(service);
      return acc;
    },
    {} as Record<string, Service[]>
  );

  // Set first service as selected by default
  React.useEffect(() => {
    if (allServices.length > 0 && !selectedService) {
      setSelectedService(allServices[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div
        ref={heroRef.ref}
        className={`text-center mb-20 fade-in-up ${heroRef.isVisible ? "visible" : ""}`}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black">
          Engineering Systems & Solutions That Scale
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-black/70 max-w-4xl mx-auto leading-relaxed">
          From AI-powered intelligence systems to enterprise-grade
          infrastructure, we help businesses transform their technology stack
          and accelerate growth.
        </p>
      </div>

      {/* Services List and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {/* Services List - Mobile: Full width, Desktop: Left column */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 max-h-[500px] overflow-y-auto shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-black">Our Services</h2>
          <div className="space-y-4">
            {Object.entries(servicesByCategory).map(([category, services]) => (
              <div key={category} className="space-y-2">
                <h3 className="text-sm font-semibold text-black/60 uppercase tracking-wide mb-3">
                  {category}
                </h3>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedService(service);
                        // On mobile, open modal; on desktop, just update selection
                        if (window.innerWidth < 1024) {
                          setIsModalOpen(true);
                        }
                      }}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                        selectedService?.title === service.title
                          ? "border-[#aa9ff1] bg-[#aa9ff1]/10 shadow-sm"
                          : "border-black/10 hover:border-[#aa9ff1]/50 bg-white hover:shadow-sm"
                      }`}
                    >
                      <h4 className="font-semibold text-black">
                        {service.title}
                      </h4>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Details - Desktop only */}
        <div className="hidden lg:block bg-white border border-black/10 rounded-2xl p-8 shadow-sm">
          {selectedService ? (
            <div className="fade-in-up visible">
              <div className="mb-4">
                <span className="text-sm font-semibold text-black/60 uppercase tracking-wide">
                  {selectedService.category}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                {selectedService.title}
              </h2>
              <p className="text-lg text-black/80 mb-8 leading-relaxed">
                {selectedService.description}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-black">Key Features</h3>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-base text-black/80 flex items-start"
                    >
                      <span className="w-2 h-2 bg-[#aa9ff1] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-black/60">
                Select a service from the list to view details
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Modal */}
      {isModalOpen && selectedService && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 lg:hidden"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white border border-black/10 rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-semibold text-black/60 uppercase tracking-wide">
                {selectedService.category}
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-black hover:text-black/70 text-2xl font-bold leading-none"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-black">
              {selectedService.title}
            </h2>
            <p className="text-base text-black/80 mb-6 leading-relaxed">
              {selectedService.description}
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-black">Key Features</h3>
              <ul className="space-y-3">
                {selectedService.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-sm text-black/80 flex items-start"
                  >
                    <span className="w-2 h-2 bg-[#aa9ff1] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Process Section */}
      <div
        ref={processRef.ref}
        className={`mt-20 bg-white border border-black/10 rounded-2xl p-8 sm:p-12 fade-in-up shadow-sm ${processRef.isVisible ? "visible" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-black">
          How We Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#aa9ff1] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Discovery</h3>
            <p className="text-black/70">
              We analyze your current systems, understand your goals, and
              identify opportunities for improvement.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#aa9ff1] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Strategy</h3>
            <p className="text-black/70">
              We design a comprehensive solution architecture and create a
              detailed implementation roadmap.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#aa9ff1] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Execution</h3>
            <p className="text-black/70">
              We build, test, and deploy your solution with ongoing support and
              optimization.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black">
          Ready to Transform Your Technology?
        </h2>
        <p className="text-lg sm:text-xl text-black/70 mb-10 max-w-2xl mx-auto">
          Let's discuss how we can help you build the right solution for your
          business needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-block bg-[#aa9ff1] text-white font-semibold py-4 px-10 rounded-full hover:bg-[#aa9ff1]/90 transition-all duration-300 text-lg shadow-sm hover:shadow-md"
          >
            Start a Project
          </Link>
          <Link
            to="/products"
            className="inline-block border-2 border-black/20 text-black font-semibold py-4 px-10 rounded-full hover:bg-black/5 hover:border-black/40 transition-all duration-300 text-lg"
          >
            View Our Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
