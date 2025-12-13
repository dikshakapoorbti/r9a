import React from "react";
import { ChevronRight, Star, Award, Target } from "lucide-react";

const CareersPage = ({ onApplyNow, onBackToHome }) => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of a innovative team that's shaping the future
            of technology. We believe in talent over location.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">
              Summer Internship Program 2025
            </h2>
            <div className="flex items-center space-x-4 text-blue-100">
              <span className="flex items-center">
                <Star size={16} className="mr-1" />  Position
              </span>
              <span className="flex items-center">
                <Award size={16} className="mr-1" /> 6-12 Weeks
              </span>
              <span className="flex items-center">
                <Target size={16} className="mr-1" /> Full-time
              </span>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What You'll Do
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight
                      size={16}
                      className="text-blue-600 mt-1 mr-2 flex-shrink-0"
                    />
                    Work on real AI and software development projects
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={16}
                      className="text-blue-600 mt-1 mr-2 flex-shrink-0"
                    />
                    Collaborate with our global team
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={16}
                      className="text-blue-600 mt-1 mr-2 flex-shrink-0"
                    />
                    Learn cutting-edge technologies and methodologies
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={16}
                      className="text-blue-600 mt-1 mr-2 flex-shrink-0"
                    />
                    Contribute to open-source projects
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={16}
                      className="text-blue-600 mt-1 mr-2 flex-shrink-0"
                    />
                    Present your work to senior leadership
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Requirements
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      Basic Aptitude
                    </h4>
                    <p className="text-gray-600">
                      Strong problem-solving skills and logical thinking
                      ability. We value curiosity and willingness to learn over
                      perfect knowledge.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      Coding Skills
                    </h4>
                    <p className="text-gray-600">
                      Familiarity with at least one programming language
                      (Python, JavaScript, Java, or similar). Portfolio projects
                      are a plus!
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      Culture Compatibility
                    </h4>
                    <p className="text-gray-600">
                      Self-motivated, excellent communication skills, and
                      collaborative environment. We value
                      diversity and inclusion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What We Offer
              </h3>
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
                onClick={onApplyNow}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </button>
              <p className="text-gray-500 text-sm mt-2">
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onBackToHome}
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
