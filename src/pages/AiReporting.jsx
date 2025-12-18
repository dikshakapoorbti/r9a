import DemoLayout from "../components/layouts/DemoLayout";
import { Card } from "../components/common/Card";
import { reportQueue, q4SalesData, aiInsightsGenerated, dataSourceStats, recentReports, automationMetrics } from "../data/reportingDemo";
import PROJECTS from "../components/constants/project.constant";

export default function AiReporting() {
  const project = PROJECTS.find(p => p.slug === "ai-reporting");

  const maxSales = Math.max(...q4SalesData.map(r => r.sales));
  const totalSales = q4SalesData.reduce((sum, r) => sum + r.sales, 0);

  return (
    <DemoLayout
      title="AI Reporting Automation with Excel & Sheets"
      subtitle="Transform spreadsheets into polished reports with AI-powered insights in under 5 minutes."
      project={project}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Report Generation Queue */}
        <Card title="⚙️ Active Report Generation Queue">
          <div className="space-y-3">
            {reportQueue.map((report, idx) => {
              const statusColors = {
                "Completed": "bg-green-100 text-green-700 border-green-300",
                "Processing": "bg-blue-100 text-blue-700 border-blue-300",
                "Queued": "bg-orange-100 text-orange-700 border-orange-300"
              };
              return (
                <div key={idx} className={`border-2 rounded-lg p-3 ${statusColors[report.status]}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-bold text-slate-900">{report.id}</p>
                      <p className="text-sm text-slate-700 italic">"{report.query}"</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-white font-semibold">
                      {report.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="text-slate-600">Source:</p>
                      <p className="font-semibold text-slate-900">{report.source}</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Time:</p>
                      <p className="font-semibold text-slate-900">{report.time}</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Format:</p>
                      <p className="font-semibold text-slate-900">{report.format}</p>
                    </div>
                  </div>
                  {report.status === "Processing" && (
                    <div className="mt-2">
                      <div className="w-full bg-white rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200">
            <button className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-semibold hover:bg-teal-700">
              + Create New Report from Natural Language
            </button>
          </div>
        </Card>

        {/* Sample Generated Report - Q4 Sales */}
        <Card title="📊 Auto-Generated Report: Q4 Sales by Region">
          <div className="space-y-4">
            {q4SalesData.map((region, idx) => {
              const percentage = (region.sales / maxSales) * 100;
              const targetMet = region.sales >= region.target;
              return (
                <div key={idx} className="border border-slate-200 rounded-lg p-3 bg-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700">{region.region}</span>
                    <div className="text-right">
                      <span className="text-lg font-bold text-slate-900">${(region.sales / 1000000).toFixed(2)}M</span>
                      <span className="text-xs text-green-600 ml-2 font-semibold">{region.growth}</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="bg-teal-500 h-3 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Target: ${(region.target / 1000000).toFixed(2)}M</span>
                    <span className={`px-2 py-1 rounded-full font-semibold ${
                      targetMet ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}>
                      {targetMet ? "✓ Target Met" : "Below Target"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center bg-teal-50 rounded p-3 border border-teal-200">
                <p className="text-2xl font-bold text-teal-600">${(totalSales / 1000000).toFixed(1)}M</p>
                <p className="text-xs text-slate-600">Total Q4 Sales</p>
              </div>
              <div className="text-center bg-green-50 rounded p-3 border border-green-200">
                <p className="text-2xl font-bold text-green-600">+23%</p>
                <p className="text-xs text-slate-600">vs Q3 2025</p>
              </div>
            </div>
          </div>
        </Card>

        {/* AI-Generated Insights */}
        <Card title="🧠 AI-Generated Insights & Recommendations">
          <div className="space-y-3">
            {aiInsightsGenerated.map((item, idx) => {
              const typeColors = {
                "Positive": "border-green-300 bg-green-50",
                "Warning": "border-orange-300 bg-orange-50",
                "Critical": "border-red-300 bg-red-50"
              };
              return (
                <div key={idx} className={`border-2 rounded-lg p-3 ${typeColors[item.type]}`}>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-sm font-semibold text-slate-900 flex-1">{item.insight}</p>
                  </div>
                  <div className="bg-white rounded p-2 border-l-4 border-teal-500">
                    <p className="text-xs text-slate-700">
                      <strong>💡 Recommended Action:</strong> {item.action}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200">
            <p className="text-sm text-slate-700"><strong>AI Model:</strong> GPT-4 with custom financial analysis</p>
            <p className="text-sm text-slate-700"><strong>Insight Generation:</strong> Automatic with every report</p>
          </div>
        </Card>

        {/* Data Sources Connected */}
        <Card title="🔗 Connected Data Sources">
          <div className="space-y-3">
            {dataSourceStats.map((source, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div>
                  <p className="font-semibold text-slate-900">{source.source}</p>
                  <p className="text-xs text-slate-600">{source.count} files/sheets connected</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-semibold">Active</span>
                  </div>
                  <p className="text-xs text-slate-500">Synced: {source.lastSync}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200">
            <p className="text-sm text-slate-700"><strong>Total Data Points:</strong> 2.4M rows processed</p>
            <p className="text-sm text-slate-700"><strong>Auto-Sync:</strong> Every 5 minutes</p>
          </div>
        </Card>

        {/* Recent Reports */}
        <Card title="📄 Recently Generated Reports">
          <div className="space-y-3 max-h-[350px] overflow-y-auto">
            {recentReports.map((report, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg p-3 bg-white hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-bold text-slate-900">{report.title}</p>
                    <p className="text-xs text-slate-600">{report.createdBy}</p>
                  </div>
                  <span className="text-xs text-slate-500">{report.timestamp}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-slate-50 rounded p-2 text-center">
                    <p className="font-bold text-slate-900">{report.dataPoints}</p>
                    <p className="text-slate-600">Data Points</p>
                  </div>
                  <div className="bg-teal-50 rounded p-2 text-center">
                    <p className="font-bold text-teal-600">{report.insights}</p>
                    <p className="text-slate-600">AI Insights</p>
                  </div>
                  <div className="bg-blue-50 rounded p-2 text-center">
                    <p className="font-bold text-blue-600">{report.charts}</p>
                    <p className="text-slate-600">Charts</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Automation Metrics */}
        <Card title="📈 Automation Performance Metrics">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-4 border-2 border-teal-200 text-center">
              <p className="text-3xl font-bold text-teal-600">{automationMetrics.reportsGenerated}</p>
              <p className="text-xs text-slate-700 font-semibold">Reports Generated</p>
              <p className="text-xs text-slate-600">This Month</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border-2 border-green-200 text-center">
              <p className="text-3xl font-bold text-green-600">{automationMetrics.timeSaved}</p>
              <p className="text-xs text-slate-700 font-semibold">Time Saved</p>
              <p className="text-xs text-slate-600">Per Week</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border-2 border-blue-200 text-center">
              <p className="text-3xl font-bold text-blue-600">{automationMetrics.avgProcessingTime}</p>
              <p className="text-xs text-slate-700 font-semibold">Avg Processing</p>
              <p className="text-xs text-slate-600">Per Report</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-4 border-2 border-orange-200 text-center">
              <p className="text-3xl font-bold text-orange-600">{automationMetrics.errorRate}</p>
              <p className="text-xs text-slate-700 font-semibold">Error Rate</p>
              <p className="text-xs text-slate-600">Near Zero</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-700">Active Users:</span>
              <span className="text-sm font-bold text-slate-900">{automationMetrics.activeUsers}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-700">Data Sources:</span>
              <span className="text-sm font-bold text-slate-900">{automationMetrics.dataSourcesIntegrated}</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Summary Banner */}
      <div className="mt-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 border-2 border-teal-200">
        <h3 className="text-xl font-bold text-slate-900 mb-4">⚡ Reporting Automation Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-teal-600">95%</p>
            <p className="text-sm text-slate-600">Automated</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">25 hrs</p>
            <p className="text-sm text-slate-600">Saved/Week</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">5 min</p>
            <p className="text-sm text-slate-600">Report Time</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-600">$75K</p>
            <p className="text-sm text-slate-600">Annual Savings</p>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}
