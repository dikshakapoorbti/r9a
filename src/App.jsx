import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Code, Brain, Users, Rocket, ChevronRight, Star, Award, Target } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');

  // Handle scroll for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    if (currentPage === 'home') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentPage]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const Logo = () => (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">R</span>
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Retrospecta
      </span>
    </div>
  );

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => {setCurrentPage('home'); scrollToSection('home');}}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'home' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'projects' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'contact' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => setCurrentPage('careers')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'careers' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Careers
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  setCurrentPage('home'); 
                  setActiveSection('home');
                  scrollToSection('home');
                }}
                className="px-3 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setActiveSection('projects');
                  scrollToSection('projects');
                }}
                className="px-3 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setActiveSection('contact');
                  scrollToSection('contact');
                }}
                className="px-3 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  setCurrentPage('careers');
                  setActiveSection('');
                }}
                className="px-3 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md"
              >
                Careers
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const ContactForm = () => {
    const [formData, setFormData] = useState({
      email: '',
      phone: '',
      company: '',
      message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({ email: '', phone: '', company: '', message: '' });
    };

    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Your Company Name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Tell us about your project requirements..."
          />
        </div>
        
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          {isSubmitted ? 'Request Sent! We\'ll call you soon.' : 'Request Callback'}
        </button>
        
        {isSubmitted && (
          <div className="text-center text-green-600 font-medium">
            Thank you! We'll contact you within 24 hours.
          </div>
        )}
      </div>
    );
  };

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                  Innovate with
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  We're a remote-first tech company specializing in cutting-edge AI solutions and modern software development. Transform your business with our innovative services.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
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
                        <Brain className="mx-auto mb-2 text-blue-600" size={32} />
                        <h3 className="font-semibold text-gray-800">AI Solutions</h3>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <Code className="mx-auto mb-2 text-purple-600" size={32} />
                        <h3 className="font-semibold text-gray-800">Development</h3>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <Users className="mx-auto mb-2 text-green-600" size={32} />
                        <h3 className="font-semibold text-gray-800">Remote Team</h3>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg text-center">
                        <Rocket className="mx-auto mb-2 text-orange-600" size={32} />
                        <h3 className="font-semibold text-gray-800">Innovation</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with a remote-first approach, ensuring global talent and 24/7 productivity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI & Machine Learning",
                description: "Custom AI solutions, neural networks, and intelligent automation to transform your business processes.",
                color: "blue"
              },
              {
                icon: Code,
                title: "Software Development",
                description: "Full-stack development, web applications, and mobile solutions built with modern technologies.",
                color: "purple"
              },
              {
                icon: Users,
                title: "Remote Consulting",
                description: "Strategic technology consulting with our distributed team of experts from around the globe.",
                color: "green"
              }
            ].map((service, index) => (
              <div key={index} className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className={`w-12 h-12 ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-purple-100' : 'bg-green-100'} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`${index === 0 ? 'text-blue-600' : index === 1 ? 'text-purple-600' : 'text-green-600'}`} size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Discover our latest innovations and success stories</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SmartAnalytics AI",
                category: "Machine Learning",
                description: "Advanced predictive analytics platform that increased client revenue by 40% through intelligent data insights.",
                image: "bg-gradient-to-br from-blue-400 to-blue-600",
                stats: "40% Revenue Increase"
              },
              {
                title: "CloudSync Platform",
                category: "Web Development",
                description: "Enterprise-grade cloud synchronization solution serving over 100k+ users with 99.9% uptime.",
                image: "bg-gradient-to-br from-purple-400 to-purple-600",
                stats: "100k+ Active Users"
              },
              {
                title: "AutoBot Assistant",
                category: "AI Automation",
                description: "Intelligent chatbot system that automated 80% of customer service inquiries with natural language processing.",
                image: "bg-gradient-to-br from-green-400 to-green-600",
                stats: "80% Automation Rate"
              },
              {
                title: "EcoTrack Mobile",
                category: "Mobile App",
                description: "Environmental tracking application with IoT integration, featured in top sustainability apps.",
                image: "bg-gradient-to-br from-orange-400 to-orange-600",
                stats: "App Store Featured"
              },
              {
                title: "Neural Vision",
                category: "Computer Vision",
                description: "Real-time image recognition system for manufacturing quality control with 99.5% accuracy.",
                image: "bg-gradient-to-br from-red-400 to-red-600",
                stats: "99.5% Accuracy"
              },
              {
                title: "BlockChain Ledger",
                category: "Blockchain",
                description: "Secure transaction platform processing $10M+ in digital assets with zero security breaches.",
                image: "bg-gradient-to-br from-indigo-400 to-indigo-600",
                stats: "$10M+ Processed"
              }
            ].map((project, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className={`h-48 ${project.image} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-2">{project.stats}</div>
                    <div className="opacity-90">{project.category}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to transform your business with cutting-edge technology? Let's discuss your project and explore possibilities together.
              </p>
              
              <div className="space-y-6">
                {/* <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div> */}
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@retrospecta.com</p>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Request a Callback</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const CareersPage = () => (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of a remote-first, innovative team that's shaping the future of technology. We believe in talent over location.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Summer Internship Program 2025</h2>
            <div className="flex items-center space-x-4 text-blue-100">
              <span className="flex items-center"><Star size={16} className="mr-1" /> Remote Position</span>
              <span className="flex items-center"><Award size={16} className="mr-1" /> 12 Weeks</span>
              <span className="flex items-center"><Target size={16} className="mr-1" /> Full-time</span>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Do</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Work on real AI and software development projects
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Collaborate with our global remote team
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Learn cutting-edge technologies and methodologies
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Contribute to open-source projects
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Present your work to senior leadership
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Basic Aptitude</h4>
                    <p className="text-gray-600">Strong problem-solving skills and logical thinking ability. We value curiosity and willingness to learn over perfect knowledge.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Coding Skills</h4>
                    <p className="text-gray-600">Familiarity with at least one programming language (Python, JavaScript, Java, or similar). Portfolio projects are a plus!</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Culture Compatibility</h4>
                    <p className="text-gray-600">Self-motivated, excellent communication skills, and thrives in a remote, collaborative environment. We value diversity and inclusion.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Offer</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>• Competitive stipend</div>
                <div>• Flexible working hours</div>
                <div>• Mentorship program</div>
                <div>• Latest tech equipment</div>
                <div>• Professional development</div>
                <div>• Full-time job opportunity</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button 
                onClick={() => {setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100);}}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </button>
              <p className="text-gray-500 text-sm mt-2">
                Application deadline: Oct 31, 2025
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {currentPage === 'home' ? <HomePage /> : <CareersPage />}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">R</span>
                  </div>
                  <span className="text-xl font-bold text-white">
                    Retrospecta
                  </span>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Transforming businesses with innovative AI solutions and cutting-edge software development. Remote-first, globally connected.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => {setCurrentPage('home'); scrollToSection('home');}} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => {setCurrentPage('home'); setTimeout(() => scrollToSection('projects'), 100);}} className="hover:text-white transition-colors">Projects</button></li>
                <li><button onClick={() => {setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100);}} className="hover:text-white transition-colors">Contact</button></li>
                <li><button onClick={() => setCurrentPage('careers')} className="hover:text-white transition-colors">Careers</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>retrospectasolutionsprivatelim@gmail.com</li>
                <li>Remote-First Global</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Retrospecta Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;