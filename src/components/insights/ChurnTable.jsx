import { Card } from "../common/Card";
import { churnData } from "../../data/insightsDemo";


export function ChurnTable() {
return (
<Card title="Customer Churn Prediction">
<table className="w-full text-sm">
<thead className="text-slate-500">
<tr>
<th align="left">Customer</th>
<th align="left">Probability</th>
<th align="left">Risk</th>
</tr>
</thead>
<tbody>
{churnData.map((c) => (
<tr key={c.customer} className="border-t">
<td>{c.customer}</td>
<td>{c.probability}</td>
<td>{c.risk}</td>
</tr>
))}
</tbody>
</table>
</Card>
);
}