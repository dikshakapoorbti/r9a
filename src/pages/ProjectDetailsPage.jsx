import React from "react";
import { ArrowLeft, TrendingUp, Cloud, Bot, Leaf, Eye, Link } from "lucide-react";

// MVP Demo Components
const SmartAnalyticsDemo = () => (
  <div className="bg-white p-6 rounded-lg border">
    <h3 className="text-lg font-semibold mb-4">Data Visualization Demo</h3>
    <p className="text-gray-600 mb-4">
      This demo showcases a comprehensive dashboard for predictive analytics. The screenshot would display interactive charts and graphs visualizing data trends, forecast predictions, and key performance indicators. Users can explore different data dimensions through filters and drill-down capabilities. The vision is to empower businesses with intuitive, real-time insights that drive strategic decision-making and operational optimization.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <div className="bg-blue-50 p-4 rounded">
        <div className="text-2xl font-bold text-blue-600">Growth</div>
        <div className="text-sm text-gray-600">Predicted Trends</div>
      </div>
      <div className="bg-green-50 p-4 rounded">
        <div className="text-2xl font-bold text-green-600">Revenue</div>
        <div className="text-sm text-gray-600">Forecast Insights</div>
      </div>
      <div className="bg-purple-50 p-4 rounded">
        <div className="text-2xl font-bold text-purple-600">Accuracy</div>
        <div className="text-sm text-gray-600">Model Performance</div>
      </div>
    </div>
    <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded flex items-center justify-center">
      <TrendingUp className="text-blue-600" size={48} />
    </div>
  </div>
);

const CloudSyncDemo = () => (
  <div className="bg-white p-6 rounded-lg border">
    <h3 className="text-lg font-semibold mb-4">File Sync Simulation</h3>
    <p className="text-gray-600 mb-4">
      This demo simulates the file synchronization process across multiple devices and platforms. The screenshot displays real-time sync status, file transfer progress, and conflict resolution indicators. It shows how files are seamlessly synchronized between cloud storage and local devices. The vision is to provide a unified file management experience that ensures data accessibility and consistency across all user devices and locations.
    </p>
    <div className="space-y-3">
      {[
        { file: "document.pdf", status: "Synced", progress: 100 },
        { file: "image.jpg", status: "Syncing", progress: 65 },
        { file: "data.xlsx", status: "Pending", progress: 0 },
      ].map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <Cloud className="text-blue-600" size={20} />
          <div className="flex-1">
            <div className="text-sm font-medium">{item.file}</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
          <span className={`text-xs px-2 py-1 rounded ${
            item.status === 'Synced' ? 'bg-green-100 text-green-800' :
            item.status === 'Syncing' ? 'bg-yellow-100 text-yellow-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {item.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const AutoBotDemo = () => (
  <div className="bg-white p-6 rounded-lg border">
    <h3 className="text-lg font-semibold mb-4">Chatbot Interface Demo</h3>
    <p className="text-gray-600 mb-4">
      This demo presents the conversational interface of our AI chatbot system. The screenshot displays a clean chat window with natural language interactions between the bot and users. It shows message bubbles, typing indicators, and contextual responses. The vision is to create intelligent assistants that understand user intent, provide accurate information, and handle complex queries with human-like conversation flow.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg h-64 overflow-y-auto">
      <div className="space-y-3">
        <div className="flex justify-start">
          <div className="bg-blue-100 p-3 rounded-lg max-w-xs">
            <p className="text-sm">Hello! How can I help you today?</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-green-100 p-3 rounded-lg max-w-xs">
            <p className="text-sm">I need help with my order</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-blue-100 p-3 rounded-lg max-w-xs">
            <p className="text-sm">I'd be happy to assist you with your order. What's your order number?</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-4 flex space-x-2">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 px-3 py-2 border rounded-lg"
        disabled
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg" disabled>
        Send
      </button>
    </div>
  </div>
);

const EcoTrackDemo = () => (
  <div className="bg-white p-6 rounded-lg border">
    <h3 className="text-lg font-semibold mb-4">Environmental Tracking Demo</h3>
    <p className="text-gray-600 mb-4">
      This demo illustrates the environmental impact tracking features of our mobile app. The screenshot shows a dashboard with sustainability metrics, progress indicators, and personalized goals. It demonstrates how users can monitor their environmental contributions through gamified interfaces. The vision is to create engaging tools that motivate individuals and communities to adopt sustainable practices and track their collective impact on the planet.
    </p>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="text-center">
        <div className="text-3xl font-bold text-green-600">Trees</div>
        <div className="text-sm text-gray-600">Environmental Impact</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600">CO2</div>
        <div className="text-sm text-gray-600">Carbon Footprint</div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm">Daily Progress</span>
        <span className="text-sm font-medium">Activity Goals</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div className="bg-green-600 h-3 rounded-full" style={{ width: '75%' }}></div>
      </div>
      <div className="text-xs text-gray-600 text-right">Progress Tracking</div>
    </div>
  </div>
);

const NeuralVisionDemo = () => (
  <div className="bg-white p-6 rounded-lg border">
    <h3 className="text-lg font-semibold mb-4">Image Recognition Demo</h3>
    <p className="text-gray-600 mb-4">
      This demo shows the computer vision interface for quality control. The screenshot displays an upload area for images and a results panel with analysis outcomes. It demonstrates real-time processing capabilities with visual feedback on detected features. The vision is to revolutionize manufacturing quality assurance through automated, intelligent inspection that reduces human error and increases production efficiency.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-100 p-4 rounded-lg text-center">
        <Eye className="mx-auto mb-2 text-blue-600" size={32} />
        <p className="text-sm text-gray-600">Upload an image to analyze</p>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded text-sm" disabled>
          Choose File
        </button>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">Recognition Results</h4>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Quality Score:</span>
            <span className="font-medium text-green-600">High</span>
          </div>
          <div className="flex justify-between">
            <span>Defects Found:</span>
            <span className="font-medium text-red-600">None</span>
          </div>
          <div className="flex justify-between">
            <span>Processing Time:</span>
            <span className="font-medium">Fast</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BlockChainDemo = () => (
  <div className="bg-white p-6 rounded-lg border">
    <h3 className="text-lg font-semibold mb-4">Transaction Ledger Demo</h3>
    <div className="space-y-3">
      {[
        { id: 'TXN-001', amount: '2.5 BTC', status: 'Confirmed', time: '2 min ago' },
        { id: 'TXN-002', amount: '150 ETH', status: 'Pending', time: '5 min ago' },
        { id: 'TXN-003', amount: '50,000 USDT', status: 'Confirmed', time: '8 min ago' },
      ].map((txn, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
          <div className="flex items-center space-x-3">
            <Link className="text-blue-600" size={16} />
            <div>
              <div className="text-sm font-medium">{txn.id}</div>
              <div className="text-xs text-gray-600">{txn.time}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">{txn.amount}</div>
            <span className={`text-xs px-2 py-1 rounded ${
              txn.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {txn.status}
            </span>
          </div>
        </div>
      ))}
    </div>
    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg" disabled>
      Add New Transaction
    </button>
  </div>
);

const ProjectDetailsPage = ({ project, onBackToHome }) => {
  if (!project) return null;

  const getDemoComponent = () => {
    switch (project.title) {
      case 'SmartAnalytics AI':
        return <SmartAnalyticsDemo />;
      case 'CloudSync Platform':
        return <CloudSyncDemo />;
      case 'AutoBot Assistant':
        return <AutoBotDemo />;
      case 'EcoTrack Mobile':
        return <EcoTrackDemo />;
      case 'Neural Vision':
        return <NeuralVisionDemo />;
      case 'BlockChain Ledger':
        return <BlockChainDemo />;
      default:
        return <div>Demo not available</div>;
    }
  };

  const getProjectReport = () => {
    const reports = {
      'SmartAnalytics AI': { //will add the new one details here as component
        overview: 'A comprehensive machine learning platform that leverages advanced predictive analytics to provide actionable business insights. It integrates multiple data sources and uses sophisticated algorithms to forecast trends, identify patterns, and optimize decision-making processes across various industries.',
        technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'AWS SageMaker'],
        challenges: 'Handling large-scale data processing and ensuring model accuracy across diverse datasets while maintaining computational efficiency.',
        results: 'Delivered significant value to clients through data-driven decision making and improved operational efficiency.'
      },
      'CloudSync Platform': {
        overview: 'Enterprise-grade cloud synchronization solution enabling seamless file sharing and collaboration across distributed teams. It provides real-time synchronization, secure access controls, and cross-platform compatibility for enhanced productivity.',
        technologies: ['React', 'Node.js', 'AWS S3', 'WebSocket', 'Docker'],
        challenges: 'Ensuring data consistency and real-time synchronization across global users while maintaining security and performance.',
        results: 'Successfully enabled seamless collaboration for distributed teams with reliable data synchronization.'
      },
      'AutoBot Assistant': {
        overview: 'Intelligent chatbot system powered by natural language processing for automated customer service. It understands user intent, provides contextual responses, and handles complex queries with human-like conversation flow.',
        technologies: ['Python', 'NLP', 'Dialogflow', 'Node.js', 'MongoDB'],
        challenges: 'Understanding context and maintaining conversation flow in complex scenarios while ensuring accurate and helpful responses.',
        results: 'Improved customer service efficiency through intelligent automation and natural language interactions.'
      },
      'EcoTrack Mobile': {
        overview: 'Mobile application for environmental tracking with IoT integration and sustainability metrics. It collects real-time environmental data, provides personalized insights, and promotes sustainable behaviors through gamification.',
        technologies: ['React Native', 'IoT', 'Firebase', 'Google Maps API'],
        challenges: 'Real-time data collection and accurate environmental impact calculations while ensuring user-friendly mobile experience.',
        results: 'Successfully promoted environmental awareness and sustainable practices through innovative mobile technology.'
      },
      'Neural Vision': {
        overview: 'Computer vision system for manufacturing quality control using deep learning algorithms. It performs real-time image analysis, defect detection, and quality assessment to ensure product consistency and reduce waste.',
        technologies: ['Python', 'OpenCV', 'TensorFlow', 'CUDA', 'Edge Computing'],
        challenges: 'Achieving reliable performance in real-time processing with limited computational resources while maintaining high detection accuracy.',
        results: 'Enhanced manufacturing quality control through automated inspection and defect detection systems.'
      },
      'BlockChain Ledger': {
        overview: 'Secure blockchain platform for transparent and immutable transaction recording. It provides decentralized ledger technology for secure digital asset management, smart contract execution, and transparent verification processes.',
        technologies: ['Solidity', 'Ethereum', 'Web3.js', 'Smart Contracts', 'IPFS'],
        challenges: 'Ensuring transaction security and scalability for high-volume processing while maintaining decentralization principles.',
        results: 'Established secure and transparent digital asset management with immutable transaction recording.'
      }
    };
    return reports[project.title] || { overview: 'Report not available', technologies: [], challenges: '', results: '' };
  };

  const report = getProjectReport();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBackToHome}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
              project.category === 'Machine Learning' ? 'bg-blue-100 text-blue-800' :
              project.category === 'Web Development' ? 'bg-purple-100 text-purple-800' :
              project.category === 'AI Automation' ? 'bg-green-100 text-green-800' :
              project.category === 'Mobile App' ? 'bg-orange-100 text-orange-800' :
              project.category === 'Computer Vision' ? 'bg-red-100 text-red-800' :
              'bg-indigo-100 text-indigo-800'
            }`}>
              {project.category}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
            <p className="text-gray-600 text-lg">{project.description}</p>
            <div className="mt-4 text-2xl font-bold text-blue-600">{project.stats}</div>
          </div>
        </div>

        {/* Project Report */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Report</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Overview</h3>
              <p className="text-gray-600 mb-6">{report.overview}</p>

              <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {report.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Challenges & Solutions</h3>
              <p className="text-gray-600 mb-6">{report.challenges}</p>

              <h3 className="text-lg font-semibold mb-3">Results</h3>
              <p className="text-gray-600">{report.results}</p>
            </div>
          </div>
        </div>

        {/* MVP Demo */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">MVP Demo</h2>
          {getDemoComponent()}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
