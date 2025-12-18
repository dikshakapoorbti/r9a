export const topCandidates = [
  {
    name: "Sarah Chen",
    role: "Senior Software Engineer",
    matchScore: 95,
    experience: "8 years",
    keySkills: ["React", "Node.js", "AWS", "Python"],
    status: "Interview Scheduled",
    interviewTime: "Dec 20, 2:00 PM"
  },
  {
    name: "Michael Roberts",
    role: "Senior Software Engineer",
    matchScore: 92,
    experience: "7 years",
    keySkills: ["TypeScript", "GraphQL", "Docker", "Kubernetes"],
    status: "Screening Complete",
    interviewTime: "Pending"
  },
  {
    name: "Priya Sharma",
    role: "Senior Software Engineer",
    matchScore: 88,
    experience: "6 years",
    keySkills: ["Java", "Spring Boot", "Microservices", "MongoDB"],
    status: "Resume Screened",
    interviewTime: "Pending"
  }
];

export const pipelineStats = [
  { stage: "Applied", count: 487, percentage: 100 },
  { stage: "Screened", count: 126, percentage: 26 },
  { stage: "Interview", count: 34, percentage: 7 },
  { stage: "Offer", count: 8, percentage: 1.6 }
];

export const scheduledInterviews = [
  {
    candidate: "Sarah Chen",
    role: "Senior SWE",
    time: "Today, 2:00 PM",
    interviewers: ["Alex Kim", "Jordan Lee"],
    round: "Technical Round",
    status: "Confirmed"
  },
  {
    candidate: "David Wilson",
    role: "Product Manager",
    time: "Tomorrow, 10:30 AM",
    interviewers: ["Morgan Davis", "Casey Brown"],
    round: "PM Interview",
    status: "Confirmed"
  },
  {
    candidate: "Emily Zhang",
    role: "UX Designer",
    time: "Tomorrow, 3:00 PM",
    interviewers: ["Riley Park"],
    round: "Portfolio Review",
    status: "Pending Confirmation"
  }
];

export const recentActivities = [
  {
    action: "Resume Screened",
    candidate: "Marcus Johnson",
    role: "DevOps Engineer",
    score: 89,
    time: "2 min ago",
    result: "Moved to Interview"
  },
  {
    action: "Interview Scheduled",
    candidate: "Sarah Chen",
    role: "Senior SWE",
    score: 95,
    time: "5 min ago",
    result: "Dec 20 at 2:00 PM"
  },
  {
    action: "Offer Sent",
    candidate: "James Park",
    role: "Data Scientist",
    score: 94,
    time: "15 min ago",
    result: "Awaiting Response"
  },
  {
    action: "Batch Processed",
    candidate: "50 resumes",
    role: "Multiple Roles",
    score: null,
    time: "1 hour ago",
    result: "12 qualified candidates"
  }
];

export const hiringMetrics = {
  avgTimeToHire: 14,
  previousTimeToHire: 45,
  resumesProcessed: 487,
  interviewsScheduled: 34,
  offersExtended: 8,
  timeSaved: "30 hrs/week"
};
