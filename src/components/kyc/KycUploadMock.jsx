import { Card } from "../common/Card";
import { Loader } from "../common/Loader";

export default function KycUploadMock() {
  return (
    <Card title="Document Upload & Processing">
      <div className="space-y-4">
        {/* Uploaded Documents */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">📄</span>
              <div>
                <p className="text-sm font-semibold text-green-900">passport_john_doe.pdf</p>
                <p className="text-xs text-green-700">Uploaded • 2.3 MB</p>
              </div>
            </div>
            <span className="text-green-600 font-bold">✓</span>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">🤳</span>
              <div>
                <p className="text-sm font-semibold text-green-900">selfie_verification.jpg</p>
                <p className="text-xs text-green-700">Uploaded • 1.8 MB</p>
              </div>
            </div>
            <span className="text-green-600 font-bold">✓</span>
          </div>
        </div>

        {/* Processing Status */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <Loader text="AI Processing: OCR extraction in progress..." />
          <div className="mt-2 space-y-1 text-xs text-slate-600">
            <p>✓ Document type identified: Passport</p>
            <p>✓ Extracting personal information...</p>
            <p className="animate-pulse text-blue-600">→ Verifying authenticity...</p>
          </div>
        </div>
      </div>
    </Card>
  );
}