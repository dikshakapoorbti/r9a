import { useParams } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import PROJECTS from "../components/constants/project.constant.js";

// Lazy load heavy demo components for better performance
const AiPolicyBot = lazy(() => import("./AiPolicyBot.jsx"));
const AiKyc = lazy(() => import("./AiKyc.jsx"));
const AiInsights = lazy(() => import("./AiInsights.jsx"));
const ProjectDetailsPage = lazy(() => import("./ProjectDetailsPage.jsx"));

const ProjectDetailsWrapper = ({ onBackToHome }) => {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  // Loading fallback component
  const LoadingFallback = () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-slate-600">Loading...</p>
      </div>
    </div>
  );

  return (
    <Suspense fallback={<LoadingFallback />}>
      {/* 🔹 Render AI demos based on slug */}
      {slug === "ai-data-insights" && <AiInsights />}
      {slug === "ai-policy-bot" && <AiPolicyBot />}
      {slug === "ai-kyc" && <AiKyc />}

      {/* 🔹 Default: normal project details page */}
      {slug !== "ai-data-insights" && slug !== "ai-policy-bot" && slug !== "ai-kyc" && (
        <ProjectDetailsPage
          project={project}
          onBackToHome={onBackToHome}
        />
      )}
    </Suspense>
  );
};
export default ProjectDetailsWrapper;