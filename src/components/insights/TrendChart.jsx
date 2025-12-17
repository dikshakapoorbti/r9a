import { Card } from "../common/Card";
import { salesData } from "../../data/insightsDemo";


export function TrendChart() {
return (
<Card title="Revenue Forecast (AI Predicted)">
<div className="space-y-2 text-sm text-slate-600">
{salesData.map((d) => (
<div key={d.month} className="flex justify-between">
<span>{d.month}</span>
<span>${d.revenue.toLocaleString()}</span>
</div>
))}
</div>
<p className="mt-4 text-xs text-slate-500">
AI Insight: Revenue expected to grow ~12% driven by Product A demand in East region.
</p>
</Card>
);
}