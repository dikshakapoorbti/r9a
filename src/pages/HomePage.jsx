import React from "react";
import { Code, Brain, Users, Rocket, ChevronRight, Mail, MapPin } from "lucide-react";
import ContactForm from "../components/contact/ContactForm.jsx";

const HomePage = ({ onScrollToSection }) => {
  const scrollTo = (sectionId) => {
    if (onScrollToSection) onScrollToSection(sectionId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero section (id="home") */}
      <section
        id="home"
        className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                  Innovate with
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    AI
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  We're a remote-first tech company specializing in cutting-edge
                  AI solutions and modern software development. Transform your
                  business with our innovative services.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("contact")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
                <button
                  onClick={() => scrollTo("projects")}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  View Projects
                </button>
              </div>
            </div>

            <div className="lg:pl-12">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 transform rotate-3 shadow-lg">
                  <div className="bg-white rounded-2xl p-6 transform -rotate-6 shadow-xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <Brain
                          className="mx-auto mb-2 text-blue-600"
                          size={32}
                        />
                        <h3 className="font-semibold text-gray-800">
                          AI Solutions
                        </h3>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <Code
                          className="mx-auto mb-2 text-purple-600"
                          size={32}
                        />
                        <h3 className="font-semibold text-gray-800">
                          Development
                        </h3>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <Users
                          className="mx-auto mb-2 text-green-600"
                          size={32}
                        />
                        <h3 className="font-semibold text-gray-800">
                          Remote Team
                        </h3>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg text-center">
                        <Rocket
                          className="mx-auto mb-2 text-orange-600"
                          size={32}
                        />
                        <h3 className="font-semibold text-gray-800">
                          Innovation
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with a remote-first
              approach, ensuring global talent and 24/7 productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI & Machine Learning",
                description:
                  "Custom AI solutions, neural networks, and intelligent automation to transform your business processes.",
              },
              {
                icon: Code,
                title: "Software Development",
                description:
                  "Full-stack development, web applications, and mobile solutions built with modern technologies.",
              },
              {
                icon: Users,
                title: "Remote Consulting",
                description:
                  "Strategic technology consulting with our distributed team of experts from around the globe.",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-12 h-12 ${
                    index === 0
                      ? "bg-blue-100"
                      : index === 1
                      ? "bg-purple-100"
                      : "bg-green-100"
                  } rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon
                    className={`${
                      index === 0
                        ? "text-blue-600"
                        : index === 1
                        ? "text-purple-600"
                        : "text-green-600"
                    }`}
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Discover our latest innovations and success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SmartAnalytics AI",
                category: "Machine Learning",
                description:
                  "Advanced predictive analytics platform that increased client revenue by 40% through intelligent data insights.",
                image: "bg-gradient-to-br from-blue-400 to-blue-600",
                stats: "40% Revenue Increase",
              },
              {
                title: "CloudSync Platform",
                category: "Web Development",
                description:
                  "Enterprise-grade cloud synchronization solution serving over 100k+ users with 99.9% uptime.",
                image: "bg-gradient-to-br from-purple-400 to-purple-600",
                stats: "100k+ Active Users",
              },
              {
                title: "AutoBot Assistant",
                category: "AI Automation",
                description:
                  "Intelligent chatbot system that automated 80% of customer service inquiries with natural language processing.",
                image: "bg-gradient-to-br from-green-400 to-green-600",
                stats: "80% Automation Rate",
              },
              {
                title: "EcoTrack Mobile",
                category: "Mobile App",
                description:
                  "Environmental tracking application with IoT integration, featured in top sustainability apps.",
                image: "bg-gradient-to-br from-orange-400 to-orange-600",
                stats: "App Store Featured",
              },
              {
                title: "Neural Vision",
                category: "Computer Vision",
                description:
                  "Real-time image recognition system for manufacturing quality control with 99.5% accuracy.",
                image: "bg-gradient-to-br from-red-400 to-red-600",
                stats: "99.5% Accuracy",
              },
              {
                title: "BlockChain Ledger",
                category: "Blockchain",
                description:
                  "Secure transaction platform processing $10M+ in digital assets with zero security breaches.",
                image: "bg-gradient-to-br from-indigo-400 to-indigo-600",
                stats: "$10M+ Processed",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`h-48 ${project.image} flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-2">
                      {project.stats}
                    </div>
                    <div className="opacity-90">{project.category}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to transform your business with cutting-edge technology?
                Let's discuss your project and explore possibilities together.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@r9a.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Remote-First Global Team</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Request a Callback
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
