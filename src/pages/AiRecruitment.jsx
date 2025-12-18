import DemoLayout from "../components/layouts/DemoLayout";
import { Card } from "../components/common/Card";
import { topCandidates, pipelineStats, scheduledInterviews, recentActivities, hiringMetrics } from "../data/recruitmentDemo";
import PROJECTS from "../components/constants/project.constant";

export default function AiRecruitment() {
  const project = PROJECTS.find(p => p.slug === "ai-recruitment");

  return (
    <DemoLayout
      title="AI Recruitment Automation System"
      subtitle="Automate resume screening, interview scheduling, and onboarding - reducing hiring time by 70%."
      project={project}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Top Candidates */}
        <Card title="🏆 Top Matched Candidates">
          <div className="space-y-3">
            {topCandidates.map((candidate, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-slate-900">{candidate.name}</h4>
                    <p className="text-xs text-slate-600">{candidate.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-indigo-600">{candidate.matchScore}%</span>
                    </div>
                    <p className="text-xs text-slate-500">Match Score</p>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-indigo-500 h-2 rounded-full"
                      style={{ width: `${candidate.matchScore}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-2">
                  {candidate.keySkills.map((skill, sidx) => (
                    <span key={sidx} className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600">💼 {candidate.experience}</span>
                  <span className={`px-2 py-1 rounded-full font-semibold ${
                    candidate.status === "Interview Scheduled"
                      ? "bg-green-100 text-green-700"
                      : candidate.status === "Screening Complete"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-orange-100 text-orange-700"
                  }`}>
                    {candidate.status}
                  </span>
                </div>
                {candidate.interviewTime !== "Pending" && (
                  <div className="mt-2 pt-2 border-t border-slate-200">
                    <p className="text-xs text-indigo-600 font-semibold">📅 {candidate.interviewTime}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200 text-center">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700">
              View All 126 Screened Candidates
            </button>
          </div>
        </Card>

        {/* Candidate Pipeline */}
        <Card title="📊 Hiring Pipeline (Senior Software Engineer)">
          <div className="space-y-4">
            {pipelineStats.map((stage, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-slate-700">{stage.stage}</span>
                  <div className="text-right">
                    <span className="text-lg font-bold text-slate-900">{stage.count}</span>
                    <span className="text-xs text-slate-500 ml-2">({stage.percentage}%)</span>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-4">
                  <div
                    className={`h-4 rounded-full ${
                      idx === 0 ? "bg-blue-500" :
                      idx === 1 ? "bg-indigo-500" :
                      idx === 2 ? "bg-purple-500" :
                      "bg-green-500"
                    }`}
                    style={{ width: `${stage.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-2xl font-bold text-green-600">{hiringMetrics.avgTimeToHire}</p>
                <p className="text-xs text-slate-600">Days to Hire</p>
                <p className="text-xs text-green-600 font-semibold">↓ 70% faster</p>
              </div>
              <div className="text-center bg-indigo-50 rounded-lg p-3 border border-indigo-200">
                <p className="text-2xl font-bold text-indigo-600">95%</p>
                <p className="text-xs text-slate-600">AI Accuracy</p>
                <p className="text-xs text-indigo-600 font-semibold">vs 75% manual</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Scheduled Interviews */}
        <Card title="📅 Upcoming Interviews (Auto-Scheduled)">
          <div className="space-y-3">
            {scheduledInterviews.map((interview, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-bold text-slate-900">{interview.candidate}</p>
                    <p className="text-xs text-slate-600">{interview.role}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    interview.status === "Confirmed"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}>
                    {interview.status}
                  </span>
                </div>
                <div className="mb-2">
                  <p className="text-sm text-indigo-600 font-semibold">⏰ {interview.time}</p>
                  <p className="text-xs text-slate-600">🎯 {interview.round}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">Interviewers:</span>
                  <div className="flex gap-1">
                    {interview.interviewers.map((interviewer, iidx) => (
                      <span key={iidx} className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                        {interviewer}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200">
            <p className="text-sm text-slate-700"><strong>Scheduling Accuracy:</strong> 98% (zero conflicts)</p>
            <p className="text-sm text-slate-700"><strong>Total Interviews This Week:</strong> 12</p>
          </div>
        </Card>

        {/* Recent Activities */}
        <Card title="⚡ Real-time Activity Feed">
          <div className="space-y-2 max-h-[400px] overflow-y-auto">
            {recentActivities.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3 p-2 bg-slate-50 rounded border border-slate-200">
                <div className="mt-1">
                  {activity.action === "Resume Screened" && <span className="text-xl">📄</span>}
                  {activity.action === "Interview Scheduled" && <span className="text-xl">📅</span>}
                  {activity.action === "Offer Sent" && <span className="text-xl">💼</span>}
                  {activity.action === "Batch Processed" && <span className="text-xl">⚙️</span>}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">{activity.action}</p>
                  <p className="text-xs text-slate-600">{activity.candidate} • {activity.role}</p>
                  {activity.score && (
                    <p className="text-xs text-indigo-600 font-semibold">Match Score: {activity.score}%</p>
                  )}
                  <p className="text-xs text-green-600 font-semibold">{activity.result}</p>
                </div>
                <span className="text-xs text-slate-500 whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Key Metrics Summary */}
      <div className="mt-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
        <h3 className="text-xl font-bold text-slate-900 mb-4">📈 Recruitment Automation Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-600">70%</p>
            <p className="text-sm text-slate-600">Faster Hiring</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">95%</p>
            <p className="text-sm text-slate-600">AI Accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-600">30 hrs</p>
            <p className="text-sm text-slate-600">Saved/Week</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-600">$180K</p>
            <p className="text-sm text-slate-600">Annual Savings</p>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}
