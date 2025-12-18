import DemoLayout from "../components/layouts/DemoLayout";
import { Card } from "../components/common/Card";
import { customerSegments, campaignPerformance, segmentInsights, realTimeData } from "../data/segmentationDemo";
import PROJECTS from "../components/constants/project.constant";

export default function AiSegmentation() {
  const project = PROJECTS.find(p => p.slug === "ai-segmentation");

  const totalCustomers = customerSegments.reduce((sum, seg) => sum + seg.size, 0);

  return (
    <DemoLayout
      title="AI Customer Segmentation Engine"
      subtitle="AI-powered customer clustering and personalized marketing with 3x higher conversion rates."
      project={project}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Customer Segments Overview */}
        <Card title="👥 Customer Segments (100K Total Customers)">
          <div className="space-y-4">
            {customerSegments.map((segment, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${segment.color}`}></div>
                    <h4 className="font-bold text-slate-900">{segment.name}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-slate-900">{segment.size.toLocaleString()}</p>
                    <p className="text-xs text-slate-500">{segment.percentage}%</p>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`${segment.color} h-2 rounded-full`}
                      style={{ width: `${segment.percentage * 3}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="text-sm">
                    <span className="text-slate-600">Avg Value:</span>
                    <span className="font-bold text-slate-900 ml-1">{segment.avgValue}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-slate-600">Conv Rate:</span>
                    <span className="font-bold text-green-600 ml-1">{segment.conversionRate}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-2">
                  {segment.traits.map((trait, tidx) => (
                    <span key={tidx} className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-full">
                      {trait}
                    </span>
                  ))}
                </div>

                <div className="mt-2 pt-2 border-t border-slate-200">
                  <p className="text-xs text-slate-700">
                    <strong>💡 Strategy:</strong> {segment.recommendation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Campaign Performance */}
        <Card title="📊 Targeted Campaign Performance">
          <div className="space-y-4">
            {campaignPerformance.map((campaign, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-bold text-slate-900">{campaign.campaign}</p>
                    <p className="text-xs text-slate-600">{campaign.segment}</p>
                  </div>
                  <span className="text-lg font-bold text-green-600">{campaign.roi}</span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-2">
                  <div className="text-center bg-white rounded p-2">
                    <p className="text-xs text-slate-600">Sent</p>
                    <p className="text-sm font-bold text-slate-900">{campaign.sent.toLocaleString()}</p>
                  </div>
                  <div className="text-center bg-white rounded p-2">
                    <p className="text-xs text-slate-600">Opened</p>
                    <p className="text-sm font-bold text-blue-600">{campaign.opened.toLocaleString()}</p>
                    <p className="text-xs text-slate-500">{((campaign.opened / campaign.sent) * 100).toFixed(0)}%</p>
                  </div>
                  <div className="text-center bg-white rounded p-2">
                    <p className="text-xs text-slate-600">Converted</p>
                    <p className="text-sm font-bold text-green-600">{campaign.converted.toLocaleString()}</p>
                    <p className="text-xs text-slate-500">{((campaign.converted / campaign.opened) * 100).toFixed(0)}%</p>
                  </div>
                </div>

                <div className="bg-white rounded p-2 text-center">
                  <p className="text-xs text-slate-600">Revenue Generated</p>
                  <p className="text-xl font-bold text-pink-600">{campaign.revenue}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center bg-green-50 rounded p-3 border border-green-200">
                <p className="text-2xl font-bold text-green-600">$127.8K</p>
                <p className="text-xs text-slate-600">Total Campaign Revenue</p>
              </div>
              <div className="text-center bg-pink-50 rounded p-3 border border-pink-200">
                <p className="text-2xl font-bold text-pink-600">710%</p>
                <p className="text-xs text-slate-600">Average ROI</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Real-time Segment Changes */}
        <Card title="⚡ Real-time Segment Movement">
          <div className="space-y-3 max-h-[450px] overflow-y-auto">
            {realTimeData.map((data, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold text-slate-900">{data.customer}</p>
                  <span className="text-xs text-slate-500">{data.time}</span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 bg-slate-200 text-slate-700 rounded-full">
                    {data.previousSegment}
                  </span>
                  <span className="text-slate-400">→</span>
                  <span className="text-xs px-2 py-1 bg-pink-100 text-pink-700 rounded-full font-semibold">
                    {data.newSegment}
                  </span>
                </div>

                <div className="bg-white rounded p-2 mb-2">
                  <p className="text-xs text-slate-700">
                    <strong>Reason:</strong> {data.reason}
                  </p>
                </div>

                <div className="bg-blue-50 rounded p-2 border-l-4 border-blue-500">
                  <p className="text-xs text-blue-800">
                    <strong>🎯 Auto-Action:</strong> {data.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200">
            <p className="text-sm text-slate-700"><strong>Movements Today:</strong> 847 customers</p>
            <p className="text-sm text-slate-700"><strong>Automated Actions:</strong> 100% triggered</p>
          </div>
        </Card>

        {/* Key Metrics */}
        <Card title="📈 Segmentation Impact Metrics">
          <div className="grid grid-cols-2 gap-4">
            {segmentInsights.map((insight, idx) => (
              <div key={idx} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-4 border-2 border-pink-200 text-center">
                <div className="text-3xl mb-2">{insight.icon}</div>
                <p className="text-2xl font-bold text-pink-600 mb-1">{insight.value}</p>
                <p className="text-xs font-semibold text-slate-700 mb-1">{insight.title}</p>
                <p className="text-xs text-slate-600">{insight.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-700">ML Model Accuracy:</span>
              <span className="text-sm font-bold text-slate-900">94%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-700">Segments Updated:</span>
              <span className="text-sm font-bold text-slate-900">Real-time</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-700">Campaign Automation:</span>
              <span className="text-sm font-bold text-slate-900">100%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Summary Banner */}
      <div className="mt-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border-2 border-pink-200">
        <h3 className="text-xl font-bold text-slate-900 mb-4">🎯 Business Impact Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-pink-600">3x</p>
            <p className="text-sm text-slate-600">Conversion Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-600">$950K</p>
            <p className="text-sm text-slate-600">Annual Revenue</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">100K</p>
            <p className="text-sm text-slate-600">Customers Analyzed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">10 min</p>
            <p className="text-sm text-slate-600">Processing Time</p>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}
