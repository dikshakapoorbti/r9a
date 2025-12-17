import DemoLayout from "../components/layouts/DemoLayout";
import { Card } from "../components/common/Card";
import { salesData, churnData } from "../data/insightsDemo";
import PROJECTS from "../components/constants/project.constant";

export default function AiInsights() {
  const project = PROJECTS.find(p => p.slug === "ai-data-insights");

  const maxRevenue = Math.max(...salesData.map(d => d.revenue));

  return (
    <DemoLayout
      title="AI Data Insights & Churn Prediction"
      subtitle="AI-powered analytics for revenue forecasting and churn prediction."
      project={project}
    >
      <div className="grid md:grid-cols-1 gap-6">
        {/* Q&A Interface */}
        <Card title="💬 AI Analytics Assistant">
          <div className="space-y-4 max-h-[600px] overflow-y-auto">
            {/* Question 1 */}
            <div className="flex gap-2">
              <div className="bg-slate-100 rounded-lg p-3 max-w-[75%]">
                <p className="text-xs text-slate-600 mb-1">Business Analyst • 10:15 AM</p>
                <p className="text-sm text-slate-900">What's our revenue trend for Q1?</p>
              </div>
            </div>

            {/* Answer 1 with Chart */}
            <div className="flex gap-2 justify-end">
              <div className="bg-slate-700 text-white rounded-lg p-4 max-w-[90%]">
                <p className="text-xs text-slate-300 mb-2">AI Analytics • 10:15 AM</p>
                <p className="text-sm mb-3">Based on Q1 data analysis, your revenue shows strong growth:</p>

                {/* Embedded Chart */}
                <div className="bg-slate-800 rounded-lg p-4 mb-3 border border-slate-600">
                  <div className="space-y-3">
                    {salesData.map((d, index) => {
                      const percentage = (d.revenue / maxRevenue) * 100;
                      const growth = index > 0 ? ((d.revenue - salesData[index - 1].revenue) / salesData[index - 1].revenue * 100).toFixed(1) : 0;
                      return (
                        <div key={d.month}>
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-sm font-semibold text-slate-200">{d.month}</span>
                            <div className="text-right">
                              <span className="text-sm font-bold text-white">${(d.revenue / 1000).toFixed(0)}K</span>
                              {index > 0 && (
                                <span className="text-xs text-green-400 ml-2 font-semibold">▲ {growth}%</span>
                              )}
                            </div>
                          </div>
                          <div className="w-full bg-slate-600 rounded-full h-3">
                            <div
                              className="bg-blue-500 h-3 rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <p className="text-sm"><strong>Total Q1 Revenue:</strong> ${(salesData.reduce((sum, d) => sum + d.revenue, 0) / 1000).toFixed(0)}K</p>
                <p className="text-sm"><strong>Growth Rate:</strong> +25% quarter-over-quarter</p>
                <p className="text-xs mt-2 text-slate-300">📊 Source: sales_data_2025_q1.csv</p>
              </div>
            </div>

            {/* Question 2 */}
            <div className="flex gap-2">
              <div className="bg-slate-100 rounded-lg p-3 max-w-[75%]">
                <p className="text-xs text-slate-600 mb-1">Business Analyst • 10:16 AM</p>
                <p className="text-sm text-slate-900">Which customers are at risk of churning?</p>
              </div>
            </div>

            {/* Answer 2 with Risk Analysis */}
            <div className="flex gap-2 justify-end">
              <div className="bg-slate-700 text-white rounded-lg p-4 max-w-[90%]">
                <p className="text-xs text-slate-300 mb-2">AI Analytics • 10:16 AM</p>
                <p className="text-sm mb-3">Analyzed 1,000+ customers and identified 47 at high/medium risk. Here are the top 3 requiring immediate attention:</p>

                {/* Risk Cards */}
                <div className="space-y-2.5">
                  {churnData.map(c => {
                    const riskColor = c.risk === "High"
                      ? "bg-red-900 border-red-700"
                      : c.risk === "Medium"
                      ? "bg-orange-900 border-orange-700"
                      : "bg-green-900 border-green-700";
                    const barColor = c.risk === "High"
                      ? "bg-red-500"
                      : c.risk === "Medium"
                      ? "bg-orange-500"
                      : "bg-green-500";
                    return (
                      <div key={c.customer} className={`${riskColor} rounded-lg p-3 border`}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-bold text-white">{c.customer}</span>
                          <span className="text-xs font-bold px-2 py-1 bg-slate-800 rounded">
                            {c.risk} Risk
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-xs mb-1.5">
                          <span className="text-slate-200">Churn Probability</span>
                          <span className="font-bold text-white">{c.probability}</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div
                            className={`${barColor} h-2 rounded-full`}
                            style={{ width: c.probability }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-3 pt-3 border-t border-slate-500">
                  <p className="text-sm"><strong>Recommendation:</strong> Focus on C004 (High Risk) - schedule immediate intervention call</p>
                  <p className="text-sm"><strong>Potential Revenue at Risk:</strong> $180K</p>
                  <p className="text-sm"><strong>Expected Save Rate:</strong> 85% with proactive engagement</p>
                </div>

                <p className="text-xs mt-2 text-slate-300">📊 Source: customer_engagement_metrics.csv</p>
              </div>
            </div>

            {/* Question 3 */}
            <div className="flex gap-2">
              <div className="bg-slate-100 rounded-lg p-3 max-w-[75%]">
                <p className="text-xs text-slate-600 mb-1">Business Analyst • 10:18 AM</p>
                <p className="text-sm text-slate-900">What's the forecast for May revenue?</p>
              </div>
            </div>

            {/* Answer 3 with Prediction */}
            <div className="flex gap-2 justify-end">
              <div className="bg-slate-700 text-white rounded-lg p-4 max-w-[90%]">
                <p className="text-xs text-slate-300 mb-2">AI Analytics • 10:18 AM</p>
                <p className="text-sm">Based on current growth patterns and seasonal trends:</p>

                <div className="bg-slate-800 rounded-lg p-4 my-3 border border-slate-600">
                  <p className="text-3xl font-bold text-center mb-1 text-green-400">$420K</p>
                  <p className="text-xs text-center text-slate-300">Predicted May Revenue</p>
                  <div className="mt-3 pt-3 border-t border-slate-600">
                    <div className="grid grid-cols-2 gap-3 text-sm text-center">
                      <div>
                        <p className="text-xs text-slate-400">Confidence</p>
                        <p className="font-bold text-lg text-white">94%</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">vs Apr</p>
                        <p className="font-bold text-lg text-green-400">+7.7%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm mb-2"><strong>Key Factors:</strong></p>
                <ul className="text-sm space-y-1 ml-4 list-disc">
                  <li>Consistent 12.5% month-over-month growth</li>
                  <li>Strong Q1 performance (+25% QoQ)</li>
                  <li>Seasonal uptick expected in May</li>
                </ul>

                <p className="text-xs mt-2 text-slate-300">📊 Model: ARIMA Time Series + ML Ensemble</p>
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
                placeholder="Ask about revenue trends, churn predictions, forecasts..."
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
              <button className="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm font-semibold hover:bg-slate-800">
                Analyze
              </button>
            </div>
          </div>
        </Card>
      </div>
    </DemoLayout>
  );
}
