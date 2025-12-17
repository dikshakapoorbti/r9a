import { Card } from "../common/Card";


export function KpiCards() {
return (
<div className="grid grid-cols-3 gap-6 mb-8">
<Card>
<p className="text-sm text-slate-500">Revenue Growth</p>
<h2 className="text-2xl font-bold text-green-600">+12%</h2>
</Card>
<Card>
<p className="text-sm text-slate-500">Churn Reduction</p>
<h2 className="text-2xl font-bold text-blue-600">-18%</h2>
</Card>
<Card>
<p className="text-sm text-slate-500">Enterprise Share</p>
<h2 className="text-2xl font-bold">45%</h2>
</Card>
</div>
);
}