import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Services: React.FC = () => {
  const heroRef = useScrollAnimation();
  const processRef = useScrollAnimation();

  const serviceCategories = [
    {
      title: "AI & Intelligence Systems",
      description:
        "Transform your business with intelligent automation and data-driven insights",
      services: [
        {
          title: "LLM & Agentic Systems",
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
          description:
            "Custom B2B solutions that track product signals, customer behavior, and operational metrics tailored to your specific business processes.",
          features: [
            "Custom analytics",
            "Operational insights",
            "Performance tracking",
            "Business intelligence",
          ],
        },
      ],
    },
    {
      title: "Development & Engineering",
      description: "From prototype to production-ready systems that scale",
      services: [
        {
          title: "Vibe Code to Stability",
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
          description:
            "Modern web applications built with cutting-edge technologies, from responsive frontends to robust backend systems.",
          features: [
            "React/Next.js",
            "Node.js backends",
            "Database design",
            "Cloud deployment",
          ],
        },
      ],
    },
    {
      title: "Infrastructure & Cloud",
      description: "Scalable, secure, and reliable infrastructure solutions",
      services: [
        {
          title: "Cloud Infrastructure",
          description:
            "Design and deploy scalable cloud architectures on AWS, Azure, or GCP with proper security, monitoring, and cost optimization.",
          features: [
            "Cloud architecture",
            "Auto-scaling",
            "Security hardening",
            "Cost optimization",
          ],
        },
        {
          title: "DevOps & CI/CD",
          description:
            "Streamline your development workflow with automated testing, deployment pipelines, and infrastructure as code.",
          features: [
            "CI/CD pipelines",
            "Infrastructure as code",
            "Monitoring & logging",
            "Automated testing",
          ],
        },
      ],
    },
    {
      title: "Specialized Solutions",
      description: "Industry-specific expertise and consulting services",
      services: [
        {
          title: "GovTech Solutions",
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
          description:
            "Strategic technology consulting to help you make informed decisions about architecture, technology stack, and digital transformation.",
          features: [
            "Technology strategy",
            "Architecture review",
            "Digital transformation",
            "Team guidance",
          ],
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div
        ref={heroRef.ref}
        className={`text-center mb-16 fade-in-up ${heroRef.isVisible ? "visible" : ""}`}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black">
          Engineering Systems & Solutions That Scale
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-black/80 max-w-4xl mx-auto leading-relaxed">
          From AI-powered intelligence systems to enterprise-grade
          infrastructure, we help businesses transform their technology stack
          and accelerate growth.
        </p>
      </div>

      {/* Services by Category */}
      <div className="space-y-20">
        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
                {category.title}
              </h2>
              <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="bg-white/10 border-4 border-black p-6 shadow-md hover:shadow-xl transition-all duration-300 group card-hover"
                >
                  <h3 className="text-xl font-bold mb-3 text-black group-hover:text-[#a0ff6a] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-black/80 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-black/60 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-black/70 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-[#a0ff6a] rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <div
        ref={processRef.ref}
        className={`mt-20 bg-white/10 border-4 border-black p-8 sm:p-12 fade-in-up ${processRef.isVisible ? "visible" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-black">
          How We Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#a0ff6a] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Discovery</h3>
            <p className="text-black/80">
              We analyze your current systems, understand your goals, and
              identify opportunities for improvement.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#a0ff6a] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Strategy</h3>
            <p className="text-black/80">
              We design a comprehensive solution architecture and create a
              detailed implementation roadmap.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#a0ff6a] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Execution</h3>
            <p className="text-black/80">
              We build, test, and deploy your solution with ongoing support and
              optimization.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black">
          Ready to Transform Your Technology?
        </h2>
        <p className="text-lg sm:text-xl text-black/80 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help you build the right solution for your
          business needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-block bg-[#a0ff6a] text-black font-bold py-3 px-8 rounded-full hover:text-black text-lg"
          >
            Start a Project
          </Link>
          <Link
            to="/products"
            className="inline-block border-2 border-black text-black font-bold py-3 px-8 rounded-full hover:bg-black hover:text-white transition-colors text-lg"
          >
            View Our Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
