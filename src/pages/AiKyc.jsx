import DemoLayout from "../components/layouts/DemoLayout";
import KycUploadMock from "../components/kyc/KycUploadMock";
import KycResultMock from "../components/kyc/KycResultMock";
import PROJECTS from "../components/constants/project.constant";

export default function AiKyc() {
  const project = PROJECTS.find(p => p.slug === "ai-kyc");

  return (
    <DemoLayout
      title="AI-Powered KYC Verification"
      subtitle="Automated identity verification with AI-driven risk scoring."
      project={project}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <KycUploadMock />
        <KycResultMock />
      </div>
    </DemoLayout>
  );
}