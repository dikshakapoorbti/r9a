import { Card } from "../common/Card";

export default function PolicyChatMock() {
  return (
    <Card title="AI Chat Assistant">
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {/* Previous Chat */}
        <div className="flex gap-2">
          <div className="bg-slate-100 rounded-lg p-3 max-w-[80%]">
            <p className="text-xs text-slate-600 mb-1">Sarah Chen • 2:34 PM</p>
            <p className="text-sm text-slate-900">What is the remote work policy for international travel?</p>
          </div>
        </div>

        <div className="flex gap-2 justify-end">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-3 max-w-[80%]">
            <p className="text-xs opacity-90 mb-1">AI Assistant • 2:34 PM</p>
            <p className="text-sm">According to the Remote Work Policy (Section 4.2), employees can work internationally for up to 30 days per year with manager approval. You must notify HR 2 weeks in advance and ensure you're working during overlap hours with your team's timezone.</p>
            <p className="text-xs mt-2 opacity-80">📄 Source: remote_work_policy.pdf, Page 12</p>
          </div>
        </div>

        {/* Current Query */}
        <div className="flex gap-2">
          <div className="bg-slate-100 rounded-lg p-3 max-w-[80%]">
            <p className="text-xs text-slate-600 mb-1">Sarah Chen • 2:35 PM</p>
            <p className="text-sm text-slate-900">How many paid leave days do I get annually?</p>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex gap-2 justify-end">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-3 max-w-[80%]">
            <p className="text-xs opacity-90 mb-1">AI Assistant • 2:35 PM</p>
            <p className="text-sm">Based on the Employee Handbook, full-time employees receive:</p>
            <ul className="text-sm mt-2 space-y-1 ml-4 list-disc">
              <li>15 days paid vacation leave</li>
              <li>10 days sick leave</li>
              <li>5 personal days</li>
              <li>12 public holidays</li>
            </ul>
            <p className="text-sm mt-2">Leave accrual starts after 90-day probation period.</p>
            <p className="text-xs mt-2 opacity-80">📄 Source: employee_handbook_2025.pdf, Pages 8-9</p>
          </div>
        </div>

        {/* Typing Indicator */}
        <div className="flex gap-2">
          <div className="bg-slate-100 rounded-lg p-3">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
            </div>
          </div>
        </div>
      </div>

      {/* Input Box */}
      <div className="mt-4 pt-3 border-t border-slate-200">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask about any company policy..."
            className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled
          />
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-semibold">
            Send
          </button>
        </div>
      </div>
    </Card>
  );
}