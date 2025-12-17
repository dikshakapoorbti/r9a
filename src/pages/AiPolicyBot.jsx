import DemoLayout from "../components/layouts/DemoLayout";
import PdfUploadMock from "../components/policy/PdfUploadMock";
import PolicyChatMock from "../components/policy/PolicyChatMock";
import PROJECTS from "../components/constants/project.constant";

export default function AiPolicyBot() {
  const project = PROJECTS.find(p => p.slug === "ai-policy-bot");

  return (
    <DemoLayout
      title="AI Policy & Document Assistant"
      subtitle="Instant, accurate answers from company policies, reducing support load."
      project={project}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <PdfUploadMock />
        <PolicyChatMock />
      </div>
    </DemoLayout>
  );
}