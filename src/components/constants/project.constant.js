const PROJECTS = [
  {
    title: "AI Data Insights & Churn Prediction",
    slug: "ai-data-insights",
    type: "demo",
    description: "Predict customer churn with 95% accuracy and forecast revenue trends using advanced machine learning",
    category: "AI Analytics",
    stats: "95% Accuracy",
    image: "bg-gradient-to-br from-blue-500 to-blue-700",
    objectives: [
      "Identify at-risk customers early with AI-powered churn probability scoring",
      "Forecast monthly revenue trends with 94% confidence to support strategic business planning",
      "Analyze 1,000+ customer records to prioritize high-risk accounts for immediate intervention"
    ],
    businessUseCase: "This AI-powered platform transforms raw customer data into actionable insights for subscription-based businesses. By analyzing customer behavior patterns, transaction history, and engagement metrics, the system identifies at-risk customers before they churn. The revenue forecasting module helps finance teams predict cash flow and plan resource allocation. Marketing teams can use churn predictions to create targeted retention campaigns, while customer success teams can prioritize outreach to high-risk accounts.",
    executiveSummary: "Leverage advanced machine learning algorithms to predict customer churn and forecast revenue trends. This platform provides actionable insights that help businesses proactively retain customers and optimize revenue streams through data-driven decision making.",
    useCase: "Ideal for SaaS companies, subscription services, and enterprises seeking to reduce customer attrition. The system analyzes historical customer behavior, transaction patterns, and engagement metrics to identify at-risk customers before they churn. Revenue forecasting helps in strategic planning and resource allocation.",
    techStack: ["Python 3.10", "TensorFlow 2.x", "Scikit-learn", "Pandas", "NumPy", "FastAPI", "React.js", "PostgreSQL", "Redis", "Apache Kafka", "Docker", "AWS (S3, EC2, RDS)"],
    techStackLayers: [
      { layer: "Data Storage", technologies: "PostgreSQL, Redis, AWS S3" },
      { layer: "Data Processing", technologies: "Python, Pandas, NumPy" },
      { layer: "ML Models", technologies: "TensorFlow, Scikit-learn, XGBoost" },
      { layer: "Backend APIs", technologies: "FastAPI, Python" },
      { layer: "Frontend", technologies: "React.js" },
      { layer: "Message Queue", technologies: "Apache Kafka" },
      { layer: "Deployment", technologies: "Docker, AWS (EC2, RDS)" }
    ],
    hldLayers: {
      dataSources: [
        "CRM system (Customer data, interaction history)",
        "Billing system (Payment records, subscription plans)",
        "Product analytics (Usage metrics, feature adoption)",
        "Support ticketing system (Customer issues, resolution time)"
      ],
      dataProcessing: [
        "Data cleansing & normalization (handling missing values, outliers)",
        "Feature engineering (creating churn indicators, engagement scores)",
        "Time-series aggregations (monthly trends, rolling averages)",
        "Data pipeline orchestration with Apache Kafka"
      ],
      analyticsAI: [
        "Churn prediction using ensemble ML models (Random Forest, XGBoost)",
        "Revenue forecasting with time-series analysis (ARIMA, Prophet)",
        "Customer segmentation (RFM analysis, clustering)",
        "Anomaly detection for unusual behavior patterns"
      ],
      visualization: [
        "Interactive dashboards showing churn risk scores",
        "Revenue trend charts with forecasts",
        "Real-time KPI monitoring (MRR, CAC, LTV)",
        "Automated email alerts for high-risk customers"
      ]
    },
    sampleDataset: "Demo uses anonymized data from 1,000+ customers spanning 12 months. Dataset includes customer demographics, subscription plans, usage metrics, support tickets, payment history, and engagement scores. Monthly revenue data ranges from $280K to $390K with seasonal trends.",
    keyInsights: [
      "Customer C004 has 76% churn risk - high priority for immediate intervention with personalized retention offer",
      "Revenue trending upward with 25% growth from Jan to Apr, suggesting successful product-market fit",
      "Seasonal patterns detected: Q1 shows strongest growth, useful for planning marketing campaigns"
    ],
    businessValue: [
      "Save $150K+ annually by reducing churn through early identification and targeted retention",
      "Improve forecasting accuracy by 40%, enabling better resource planning and investor confidence",
      "Increase customer lifetime value by 25% through proactive engagement with at-risk accounts"
    ],
    nextSteps: [
      "Integrate real-time data streaming for instant churn alerts via Kafka",
      "Add customer segmentation models to create personalized retention strategies",
      "Expand model to predict customer lifetime value (CLV) alongside churn probability",
      "Develop mobile dashboard app for executives to monitor key metrics on the go"
    ],
    hld: {
      components: [
        "Data ingestion pipeline for customer metrics and transaction data",
        "ML models for churn prediction using ensemble methods (Random Forest, XGBoost)",
        "Time-series forecasting engine for revenue prediction",
        "Interactive dashboard with real-time analytics",
        "Alert system for high-risk customer identification"
      ],
      technologies: ["Python", "TensorFlow", "Pandas", "React", "FastAPI", "PostgreSQL"],
      architecture: "Microservices architecture with separate services for data processing, ML inference, and web interface. Real-time data pipeline using event streaming for immediate insights."
    }
  },
  {
    title: "AI Policy & Document Assistant",
    slug: "ai-policy-bot",
    type: "demo",
    description: "Instant answers from company policies with 90% query automation, reducing HR support workload by 60%",
    category: "AI Automation",
    stats: "24/7 Support",
    image: "bg-gradient-to-br from-purple-500 to-purple-700",
    objectives: [
      "Answer 90% of employee policy queries accurately without human intervention",
      "Reduce response time from 24 hours to under 3 seconds with 24/7 availability",
      "Index 25+ policy documents for instant retrieval with source citations"
    ],
    businessUseCase: "Large organizations struggle with employees finding relevant policy information scattered across multiple documents. This AI assistant ingests all company policies, handbooks, and procedures, making them instantly searchable through natural conversation. Employees ask questions like 'What's the remote work policy?' and receive accurate, sourced answers immediately. HR teams gain analytics on frequently asked questions to identify documentation gaps.",
    executiveSummary: "Transform how employees access company policies and documentation with an intelligent AI assistant. This solution reduces support ticket volume by 60% while providing instant, accurate answers from your organization's knowledge base, ensuring consistent policy interpretation across the company.",
    useCase: "Perfect for HR departments, compliance teams, and large organizations with extensive policy documentation. Employees can query policies in natural language and receive immediate, contextual answers. Reduces dependency on HR staff for routine policy questions and ensures 24/7 availability of policy information.",
    techStack: ["LangChain", "OpenAI GPT-4", "Python 3.10", "React.js", "Node.js", "ChromaDB", "PostgreSQL", "AWS S3", "Docker", "Redis"],
    techStackLayers: [
      { layer: "Data Storage", technologies: "ChromaDB (Vector DB), PostgreSQL, AWS S3" },
      { layer: "Data Processing", technologies: "Python, LangChain (Document processing)" },
      { layer: "AI Models", technologies: "OpenAI GPT-4, Embedding models" },
      { layer: "Backend APIs", technologies: "Node.js, Python" },
      { layer: "Frontend", technologies: "React.js" },
      { layer: "Cache Layer", technologies: "Redis" },
      { layer: "Deployment", technologies: "Docker, AWS" }
    ],
    hldLayers: {
      dataSources: [
        "Company policy documents (PDF, DOCX)",
        "Employee handbooks",
        "HR guidelines and procedures",
        "Compliance documentation"
      ],
      dataProcessing: [
        "Document parsing and text extraction",
        "Text chunking for optimal context windows",
        "Embedding generation for semantic search",
        "Vector database indexing and storage"
      ],
      analyticsAI: [
        "Semantic search using vector similarity",
        "Context retrieval with relevance scoring",
        "LLM-based answer generation (GPT-4)",
        "Query intent classification and routing"
      ],
      visualization: [
        "Conversational chat interface",
        "Source citation with page references",
        "Admin analytics dashboard (query trends)",
        "Document management interface"
      ]
    },
    sampleDataset: "Demo includes 25+ sample company policy documents covering HR policies, IT security guidelines, leave policies, expense reimbursement, code of conduct, and remote work guidelines. Documents range from 5 to 50 pages with varying formats and structures.",
    keyInsights: [
      "90% of employee queries are answered accurately without human intervention",
      "Average response time reduced from 24 hours (email to HR) to under 3 seconds",
      "Most frequently asked topics: remote work policies (35%), leave policies (28%), expense reimbursement (22%)"
    ],
    businessValue: [
      "Reduce HR support workload by 60%, saving 20+ hours per week for strategic initiatives",
      "Save $80K annually in HR operational costs through automation",
      "Ensure consistent policy interpretation across global offices and departments"
    ],
    nextSteps: [
      "Multi-language support for global organizations (Spanish, French, German, Mandarin)",
      "Integration with Slack and Microsoft Teams for in-app policy queries",
      "Advanced analytics dashboard showing policy usage trends and knowledge gaps",
      "Mobile app for on-the-go policy access during business travel"
    ],
    hld: {
      components: [
        "Document processing pipeline for PDF/DOCX ingestion",
        "Vector database for semantic search (ChromaDB/Pinecone)",
        "LLM integration for natural language understanding",
        "Conversational interface with context retention",
        "Admin panel for document management and analytics"
      ],
      technologies: ["LangChain", "OpenAI API", "React", "Node.js", "Vector DB", "AWS S3"],
      architecture: "RAG (Retrieval Augmented Generation) architecture where documents are chunked, embedded, and stored in vector database. User queries trigger semantic search to retrieve relevant context, which is then passed to LLM for generating accurate responses."
    }
  },
  {
    title: "AI-Powered KYC Verification",
    slug: "ai-kyc",
    type: "demo",
    description: "Automate identity verification with 99% fraud detection, reducing onboarding time from days to minutes",
    category: "AI Security",
    stats: "99% Detection",
    image: "bg-gradient-to-br from-green-500 to-green-700",
    objectives: [
      "Complete identity verification in under 5 minutes with 99.2% AI confidence",
      "Detect forged documents with 99.2% accuracy using computer vision analysis",
      "Achieve 98.7% facial match accuracy with liveness detection to prevent spoofing"
    ],
    businessUseCase: "Financial institutions face the dual challenge of thorough identity verification and fast customer onboarding. This AI-powered KYC system automates the entire verification process—from document upload to risk assessment. Customers upload their ID and take a selfie; the system extracts data via OCR, verifies document authenticity, matches the face, checks against sanctions lists, and assigns a risk score. High-risk cases are flagged for manual review while low-risk customers are onboarded instantly.",
    executiveSummary: "Streamline customer onboarding with automated KYC verification that combines document analysis, facial recognition, and risk assessment. Reduce verification time from days to minutes while maintaining compliance with regulatory requirements and achieving 99% fraud detection accuracy.",
    useCase: "Essential for financial institutions, fintech companies, and regulated businesses requiring identity verification. Automates document verification (ID cards, passports, utility bills), performs liveness detection, cross-references against watchlists, and assigns risk scores. Reduces manual review time and improves customer experience.",
    techStack: ["Python 3.10", "OpenCV", "TensorFlow", "Tesseract OCR", "Face Recognition API", "React.js", "Node.js", "MongoDB", "AWS Rekognition", "Docker", "Blockchain (Hyperledger)"],
    techStackLayers: [
      { layer: "Data Storage", technologies: "MongoDB, AWS S3 (Documents)" },
      { layer: "Data Processing", technologies: "Python, OpenCV, Tesseract OCR" },
      { layer: "AI Models", technologies: "TensorFlow, AWS Rekognition, Face Recognition API" },
      { layer: "Backend APIs", technologies: "Node.js, Python, Third-party verification APIs" },
      { layer: "Frontend", technologies: "React.js" },
      { layer: "Audit Trail", technologies: "Blockchain (Hyperledger)" },
      { layer: "Deployment", technologies: "Docker, AWS" }
    ],
    hldLayers: {
      dataSources: [
        "Identity documents (Passport, driver's license, national ID)",
        "Selfie images for facial verification",
        "Sanctions and watchlist databases",
        "Historical fraud patterns database"
      ],
      dataProcessing: [
        "Image preprocessing and enhancement (OpenCV)",
        "OCR extraction of document text (Tesseract)",
        "Document template matching and validation",
        "Facial feature extraction and encoding"
      ],
      analyticsAI: [
        "Document forgery detection using computer vision",
        "Facial matching with liveness detection",
        "Risk scoring using multi-factor analysis",
        "Anomaly detection for suspicious patterns"
      ],
      visualization: [
        "Document upload interface with progress tracking",
        "Real-time verification status dashboard",
        "Detailed verification results with confidence scores",
        "Compliance reporting and audit trail viewer"
      ]
    },
    sampleDataset: "Demo includes 500+ synthetic identity documents (passports, driver's licenses, national IDs) from various countries. Dataset contains both authentic and forged documents for testing fraud detection. Includes diverse demographics with various lighting conditions and document qualities.",
    keyInsights: [
      "99.2% accuracy in detecting forged documents using AI-powered authenticity verification",
      "Average verification time reduced from 72 hours to 4.5 minutes per customer",
      "Facial matching achieves 99.8% accuracy with liveness detection preventing spoofing attacks"
    ],
    businessValue: [
      "Save $250K annually by automating 90% of manual KYC reviews",
      "Prevent fraud losses estimated at $500K+ per year through advanced forgery detection",
      "Ensure regulatory compliance with AML/KYC requirements and avoid $1M+ in potential fines"
    ],
    nextSteps: [
      "Add support for 50+ additional document types from 100+ countries",
      "Implement advanced anti-spoofing with 3D depth sensing and eye movement tracking",
      "Build API integrations with major banking cores and CRM systems",
      "Create compliance reporting dashboard for audit trails and regulatory submissions"
    ],
    hld: {
      components: [
        "Document OCR and validation engine",
        "Facial recognition with liveness detection",
        "AI-based forgery detection for documents",
        "Risk scoring algorithm using multiple data points",
        "Integration with third-party verification APIs",
        "Audit trail and compliance reporting"
      ],
      technologies: ["Computer Vision", "OCR (Tesseract)", "Face Recognition APIs", "Python", "React", "MongoDB", "Blockchain for audit"],
      architecture: "Multi-stage verification pipeline: 1) Document upload and OCR, 2) Document authenticity verification, 3) Facial matching, 4) Database cross-referencing, 5) Risk scoring, 6) Manual review queue for edge cases. All stages logged for compliance and audit purposes."
    }
  }
];

export default PROJECTS;
