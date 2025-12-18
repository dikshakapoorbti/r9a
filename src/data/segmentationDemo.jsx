export const customerSegments = [
  {
    name: "VIP Champions",
    size: 8500,
    percentage: 8.5,
    avgValue: "$12,500",
    traits: ["High spend", "Frequent purchases", "Brand advocates"],
    conversionRate: "85%",
    color: "bg-pink-500",
    recommendation: "Exclusive loyalty rewards, early access to new products"
  },
  {
    name: "Rising Stars",
    size: 15200,
    percentage: 15.2,
    avgValue: "$4,800",
    traits: ["Growing spend", "Increasing frequency", "High potential"],
    conversionRate: "68%",
    color: "bg-purple-500",
    recommendation: "Personalized upsells, targeted product recommendations"
  },
  {
    name: "Loyal Regulars",
    size: 28300,
    percentage: 28.3,
    avgValue: "$2,200",
    traits: ["Consistent buyers", "Medium spend", "Low churn risk"],
    conversionRate: "45%",
    color: "bg-blue-500",
    recommendation: "Subscription offers, bundle deals, seasonal campaigns"
  },
  {
    name: "At-Risk",
    size: 19800,
    percentage: 19.8,
    avgValue: "$1,800",
    traits: ["Declining activity", "Past purchasers", "High churn risk"],
    conversionRate: "22%",
    color: "bg-orange-500",
    recommendation: "Re-engagement campaigns, discount incentives, surveys"
  },
  {
    name: "Dormant",
    size: 28200,
    percentage: 28.2,
    avgValue: "$800",
    traits: ["No recent purchases", "Inactive 90+ days", "Win-back needed"],
    conversionRate: "8%",
    color: "bg-slate-500",
    recommendation: "Aggressive win-back offers, A/B test messaging"
  }
];

export const campaignPerformance = [
  {
    segment: "VIP Champions",
    campaign: "Holiday VIP Preview",
    sent: 8500,
    opened: 7225,
    converted: 6141,
    revenue: "$76,762",
    roi: "1250%"
  },
  {
    segment: "Rising Stars",
    campaign: "Personalized Upsell",
    sent: 15200,
    opened: 10336,
    converted: 7029,
    revenue: "$33,739",
    roi: "680%"
  },
  {
    segment: "At-Risk",
    campaign: "Come Back 20% Off",
    sent: 19800,
    opened: 4356,
    converted: 965,
    revenue: "$17,370",
    roi: "290%"
  }
];

export const segmentInsights = [
  {
    icon: "🎯",
    title: "Precision Targeting",
    value: "3x",
    description: "Higher conversion rate vs. mass campaigns"
  },
  {
    icon: "💰",
    title: "Revenue Impact",
    value: "$950K",
    description: "Additional annual revenue from segmentation"
  },
  {
    icon: "📊",
    title: "Customer Clusters",
    value: "5",
    description: "Distinct behavioral segments identified"
  },
  {
    icon: "⚡",
    title: "Processing Speed",
    value: "10 min",
    description: "Analyze 100K customers with ML models"
  }
];

export const realTimeData = [
  {
    customer: "C_47382",
    previousSegment: "Loyal Regulars",
    newSegment: "Rising Stars",
    reason: "Purchase frequency increased 40% in last 30 days",
    action: "Send personalized upsell campaign",
    time: "Just now"
  },
  {
    customer: "C_91203",
    previousSegment: "Loyal Regulars",
    newSegment: "At-Risk",
    reason: "No purchases in 60 days, decreasing engagement",
    action: "Trigger re-engagement email with 15% discount",
    time: "2 min ago"
  },
  {
    customer: "C_55841",
    previousSegment: "At-Risk",
    newSegment: "Loyal Regulars",
    reason: "Responded to win-back campaign, made 2 purchases",
    action: "Add to subscription campaign funnel",
    time: "5 min ago"
  }
];
