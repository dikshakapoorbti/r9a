export const reportQueue = [
  {
    id: "RPT_001",
    query: "Show Q4 sales by region",
    source: "sales_data_q4.xlsx",
    status: "Completed",
    time: "45 seconds",
    format: "PowerPoint"
  },
  {
    id: "RPT_002",
    query: "Generate monthly expense report with trends",
    source: "expenses_2025.csv",
    status: "Processing",
    time: "Estimated 30s",
    format: "PDF"
  },
  {
    id: "RPT_003",
    query: "Customer acquisition cost analysis",
    source: "marketing_spend_sheet",
    status: "Queued",
    time: "Pending",
    format: "Excel"
  }
];

export const q4SalesData = [
  { region: "North America", sales: 2850000, growth: "+18%", target: 2500000 },
  { region: "Europe", sales: 1920000, growth: "+22%", target: 1800000 },
  { region: "Asia Pacific", sales: 3100000, growth: "+35%", target: 2800000 },
  { region: "Latin America", sales: 890000, growth: "+12%", target: 850000 }
];

export const aiInsightsGenerated = [
  {
    icon: "🎯",
    insight: "Asia Pacific exceeded target by 11% - strongest performing region in Q4",
    type: "Positive",
    action: "Allocate additional marketing budget to APAC in Q1 2026"
  },
  {
    icon: "📈",
    insight: "All regions exceeded sales targets, with overall growth of 23% vs. Q3",
    type: "Positive",
    action: "Share regional success strategies in next leadership meeting"
  },
  {
    icon: "⚠️",
    insight: "Latin America showing slower growth (12%) compared to other regions",
    type: "Warning",
    action: "Review LATAM pricing strategy and competitive positioning"
  }
];

export const dataSourceStats = [
  { source: "Excel Files", count: 342, lastSync: "2 min ago" },
  { source: "Google Sheets", count: 128, lastSync: "5 min ago" },
  { source: "CSV Uploads", count: 89, lastSync: "1 hour ago" },
  { source: "SQL Database", count: 15, lastSync: "Real-time" }
];

export const recentReports = [
  {
    title: "Q4 2025 Sales Performance",
    createdBy: "AI Report Generator",
    timestamp: "2 min ago",
    dataPoints: "24,580 rows",
    insights: 5,
    charts: 8
  },
  {
    title: "December Expense Analysis",
    createdBy: "AI Report Generator",
    timestamp: "1 hour ago",
    dataPoints: "8,920 rows",
    insights: 3,
    charts: 6
  },
  {
    title: "Marketing ROI Dashboard",
    createdBy: "AI Report Generator",
    timestamp: "3 hours ago",
    dataPoints: "15,340 rows",
    insights: 7,
    charts: 12
  }
];

export const automationMetrics = {
  reportsGenerated: 847,
  timeSaved: "25 hrs/week",
  errorRate: "0.02%",
  avgProcessingTime: "42 seconds",
  dataSourcesIntegrated: 12,
  activeUsers: 156
};
