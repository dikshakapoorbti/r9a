import { Card } from "../common/Card";

export default function KycResultMock() {
  return (
    <Card title="AI Verification Results">
      <div className="space-y-4">
        {/* Extracted Data */}
        <div className="bg-slate-50 rounded-lg p-3 text-sm">
          <p className="font-semibold text-slate-900 mb-2">Extracted Information:</p>
          <div className="space-y-1 text-xs text-slate-700">
            <p><strong>Name:</strong> John Michael Doe</p>
            <p><strong>DOB:</strong> 15 Mar 1990</p>
            <p><strong>ID Number:</strong> P8765432</p>
            <p><strong>Nationality:</strong> United States</p>
          </div>
        </div>

        {/* Verification Checks */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-700">Document Authenticity</span>
            <span className="text-green-600 font-semibold">✓ Verified</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-700">Facial Match (98.7%)</span>
            <span className="text-green-600 font-semibold">✓ Passed</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-700">Liveness Detection</span>
            <span className="text-green-600 font-semibold">✓ Confirmed</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-700">Watchlist Check</span>
            <span className="text-green-600 font-semibold">✓ Clear</span>
          </div>
        </div>

        {/* Risk Score */}
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-green-900">Risk Score</p>
              <p className="text-xs text-green-700">AI Confidence: 99.2%</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600">LOW</p>
              <p className="text-xs text-green-700">12/100</p>
            </div>
          </div>
        </div>

        {/* Final Decision */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-3 text-center">
          <p className="font-bold">✓ APPROVED FOR ONBOARDING</p>
          <p className="text-xs mt-1 opacity-90">Verification completed in 4.2 seconds</p>
        </div>
      </div>
    </Card>
  );
}