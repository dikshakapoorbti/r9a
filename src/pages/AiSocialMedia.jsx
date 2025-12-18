import DemoLayout from "../components/layouts/DemoLayout";
import { Card } from "../components/common/Card";
import { platformMetrics, scheduledPosts, recentComments, contentCalendar } from "../data/socialMediaDemo";
import PROJECTS from "../components/constants/project.constant";

export default function AiSocialMedia() {
  const project = PROJECTS.find(p => p.slug === "ai-social-media");

  const maxEngagement = Math.max(...platformMetrics.map(p => p.engagement));

  return (
    <DemoLayout
      title="AI Social Media Manager with n8n"
      subtitle="Automate content creation, scheduling, and engagement across all platforms with 90% time savings."
      project={project}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Platform Performance Dashboard */}
        <Card title="📊 Platform Performance (Last 30 Days)">
          <div className="space-y-4">
            {platformMetrics.map(platform => {
              const percentage = (platform.engagement / maxEngagement) * 100;
              return (
                <div key={platform.platform}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700">{platform.platform}</span>
                    <div className="text-right">
                      <span className="text-sm font-bold text-slate-900">{platform.engagement.toLocaleString()}</span>
                      <span className="text-xs text-green-600 ml-2 font-semibold">{platform.growth}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="flex-1 bg-slate-200 rounded-full h-3">
                      <div
                        className="bg-purple-500 h-3 rounded-full transition-all"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-slate-500 min-w-[60px]">{platform.posts} posts</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-purple-600">138</p>
                <p className="text-xs text-slate-600">Total Posts</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">64.8K</p>
                <p className="text-xs text-slate-600">Total Engagement</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Automated Responses */}
        <Card title="💬 Auto-Responses (Real-time)">
          <div className="space-y-3 max-h-[350px] overflow-y-auto">
            {recentComments.map((comment, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-purple-600">{comment.platform}</span>
                  <span className="text-xs text-slate-500">{comment.timestamp}</span>
                </div>
                <div className="mb-2">
                  <p className="text-xs font-semibold text-slate-700">{comment.user}</p>
                  <p className="text-sm text-slate-600 italic">"{comment.comment}"</p>
                </div>
                <div className="bg-white rounded p-2 border-l-4 border-purple-500">
                  <p className="text-xs font-semibold text-purple-700 mb-1">🤖 AI Response:</p>
                  <p className="text-sm text-slate-700">{comment.aiResponse}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200">
            <p className="text-sm text-slate-700"><strong>Auto-response Rate:</strong> 80%</p>
            <p className="text-sm text-slate-700"><strong>Avg Response Time:</strong> 3 minutes</p>
          </div>
        </Card>

        {/* Scheduled Posts */}
        <Card title="📅 Upcoming Scheduled Posts">
          <div className="space-y-3">
            {scheduledPosts.map((post, idx) => {
              const engagementColors = {
                "Very High": "bg-green-100 text-green-700",
                "High": "bg-blue-100 text-blue-700",
                "Medium": "bg-orange-100 text-orange-700"
              };
              return (
                <div key={idx} className="border border-slate-200 rounded-lg p-3 bg-white hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-purple-600">{post.platform}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 font-semibold">
                      {post.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 mb-2 line-clamp-2">{post.content}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">⏰ {post.time}</span>
                    <span className={`px-2 py-1 rounded-full font-semibold ${engagementColors[post.engagement_prediction]}`}>
                      {post.engagement_prediction} Engagement
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200 text-center">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700">
              + Schedule New Post
            </button>
          </div>
        </Card>

        {/* Content Calendar */}
        <Card title="📆 This Week's Content Calendar">
          <div className="space-y-3">
            {contentCalendar.map((day, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-center min-w-[60px]">
                  <p className="text-xs text-slate-600 font-semibold">{day.date.split(' ')[0]}</p>
                  <p className="text-2xl font-bold text-purple-600">{day.date.split(' ')[1]}</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-slate-700">{day.count} posts scheduled</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {day.topics.map((topic, tidx) => (
                      <span key={tidx} className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200">
            <p className="text-sm text-slate-700"><strong>Total Posts This Week:</strong> 19</p>
            <p className="text-sm text-slate-700"><strong>AI-Generated:</strong> 100%</p>
            <p className="text-sm text-slate-700"><strong>Time Saved:</strong> 18 hours</p>
          </div>
        </Card>
      </div>

      {/* Key Metrics Summary */}
      <div className="mt-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
        <h3 className="text-xl font-bold text-slate-900 mb-4">📈 Automation Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-600">90%</p>
            <p className="text-sm text-slate-600">Time Saved</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">40%</p>
            <p className="text-sm text-slate-600">Engagement Increase</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">100+</p>
            <p className="text-sm text-slate-600">Posts/Month</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-600">$60K</p>
            <p className="text-sm text-slate-600">Annual Savings</p>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}
