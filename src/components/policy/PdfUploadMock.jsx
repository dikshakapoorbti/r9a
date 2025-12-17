import { Card } from "../common/Card";
import { Loader } from "../common/Loader";

export default function PdfUploadMock() {
  return (
    <Card title="Document Management">
      <div className="space-y-3">
        {/* Uploaded Documents */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-green-600">📄</span>
              <div>
                <p className="text-sm font-semibold text-green-900">employee_handbook_2025.pdf</p>
                <p className="text-xs text-green-700">42 pages • Indexed</p>
              </div>
            </div>
            <span className="text-green-600 font-bold text-sm">✓</span>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-green-600">📄</span>
              <div>
                <p className="text-sm font-semibold text-green-900">remote_work_policy.pdf</p>
                <p className="text-xs text-green-700">18 pages • Indexed</p>
              </div>
            </div>
            <span className="text-green-600 font-bold text-sm">✓</span>
          </div>
        </div>

        {/* Processing Document */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📄</span>
              <div>
                <p className="text-sm font-semibold text-blue-900">leave_policy_updated.pdf</p>
                <p className="text-xs text-blue-700">25 pages • Processing</p>
              </div>
            </div>
          </div>
          <Loader text="AI indexing: Creating embeddings..." />
          <div className="mt-1 text-xs text-slate-600">
            <p className="animate-pulse text-blue-600">→ Extracting 87 policy sections...</p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-slate-50 rounded-lg p-3 mt-4">
          <p className="text-xs font-semibold text-slate-700 mb-2">Knowledge Base Status</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <p className="text-slate-600">Documents</p>
              <p className="font-bold text-slate-900">25</p>
            </div>
            <div>
              <p className="text-slate-600">Coverage</p>
              <p className="font-bold text-slate-900">98%</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}