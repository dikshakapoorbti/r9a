import { useParams } from "react-router-dom";
import React, { lazy, Suspense } from "react";

// Lazy load demo components for better performance
const AiKyc = lazy(() => import("./AiKyc.jsx"));
const AiInsights = lazy(() => import("./AiInsights.jsx"));
const AiSocialMedia = lazy(() => import("./AiSocialMedia.jsx"));
const AiRecruitment = lazy(() => import("./AiRecruitment.jsx"));
const AiSegmentation = lazy(() => import("./AiSegmentation.jsx"));
const AiReporting = lazy(() => import("./AiReporting.jsx"));

const ProjectDetailsWrapper = () => {
  const { slug } = useParams();

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
      {/* Render demo components based on project slug */}
      {slug === "ai-data-insights" && <AiInsights />}
      {slug === "ai-kyc" && <AiKyc />}
      {slug === "ai-social-media" && <AiSocialMedia />}
      {slug === "ai-recruitment" && <AiRecruitment />}
      {slug === "ai-segmentation" && <AiSegmentation />}
      {slug === "ai-reporting" && <AiReporting />}
    </Suspense>
  );
};
export default ProjectDetailsWrapper;