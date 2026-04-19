export interface Plan {
  id: string;
  name: string;
  description: string;
  type: "normal" | "tracker" | "challenge" | "ssc-revision" | "upsc-weekend";
  price: number;
  duration: string;
  features: string[];
  besFor: string;
  icon: string;
}

export const allPlans: Plan[] = [
  {
    id: "normal-30",
    name: "Normal Plan - 30 Days",
    description:
      "Full access to all mentoring features including accountability, psychological, and academic support",
    type: "normal",
    price: 250,
    duration: "30 Days",
    features: [
      "Schedule system",
      "Backlog Tracker",
      "Revision Tracker",
      "Rating System",
      "Badges",
      "Paid Internship Role",
      "Deep Profile Analysis",
      "Syllabus Tracker",
      "Academic Mentor",
      "Accountability Mentor",
      "Psychological Mentor",
      "Leaderboard",
    ],
    besFor: "Starting users wanting full mentoring support",
    icon: "📚",
  },
  {
    id: "normal-90",
    name: "Normal Plan - 90 Days",
    description:
      "Extended 90-day full access with continuous mentoring across all dimensions",
    type: "normal",
    price: 700,
    duration: "90 Days",
    features: [
      "Schedule system",
      "Backlog Tracker",
      "Revision Tracker",
      "Rating System",
      "Badges",
      "Paid Internship Role",
      "Deep Profile Analysis",
      "Syllabus Tracker",
      "Academic Mentor",
      "Accountability Mentor",
      "Psychological Mentor",
      "Leaderboard",
    ],
    besFor: "Serious students needing extended structured support",
    icon: "📚",
  },
  {
    id: "normal-180",
    name: "Normal Plan - 180 Days",
    description:
      "Full 6-month comprehensive journey with complete mentoring ecosystem",
    type: "normal",
    price: 1400,
    duration: "180 Days",
    features: [
      "Schedule system",
      "Backlog Tracker",
      "Revision Tracker",
      "Rating System",
      "Badges",
      "Paid Internship Role",
      "Deep Profile Analysis",
      "Syllabus Tracker",
      "Academic Mentor",
      "Accountability Mentor",
      "Psychological Mentor",
      "Leaderboard",
    ],
    besFor: "Long-term preparation with maximum mentoring support",
    icon: "📚",
  },
  {
    id: "tracker-30",
    name: "Tracker Plan - 30 Days",
    description:
      "Focused tracking system to master your syllabus with surgical precision",
    type: "tracker",
    price: 99,
    duration: "30 Days",
    features: [
      "Schedule System",
      "Revision Tracker",
      "Syllabus Tracker",
      "Backlog Tracker",
    ],
    besFor: "Students who need simple tracking without mentoring",
    icon: "📊",
  },
  {
    id: "tracker-180",
    name: "Tracker Plan - 180 Days",
    description:
      "6-month precision tracking to rebuild your preparation system",
    type: "tracker",
    price: 499,
    duration: "180 Days",
    features: [
      "Schedule System",
      "Revision Tracker",
      "Syllabus Tracker",
      "Backlog Tracker",
    ],
    besFor: "Budget-conscious students wanting long-term tracking",
    icon: "📊",
  },
  {
    id: "challenge-30",
    name: "30-Day Challenge",
    description:
      "Gamified challenge with daily targets, rewards, and penalties. Complete 30 days with consistency for ₹500 reward",
    type: "challenge",
    price: 500,
    duration: "30 Days",
    features: [
      "Daily target system",
      "Consistency tracking",
      "Rewards for completion",
      "-₹50 penalty per missed day",
      "Clear failure limit (miss 4+ days = no reward)",
      "Real-time reward tracking",
    ],
    besFor: "High-motivation students who thrive under competition",
    icon: "🏆",
  },
  {
    id: "challenge-45",
    name: "45-Day Challenge",
    description:
      "Extended gamified challenge with higher rewards and stricter consistency requirements. Complete for ₹750 reward",
    type: "challenge",
    price: 750,
    duration: "45 Days",
    features: [
      "Daily target system",
      "Consistency tracking",
      "Rewards for completion",
      "-₹50 penalty per missed day",
      "Clear failure limit (miss 5+ days = no reward)",
      "Progressive difficulty",
    ],
    besFor: "Highly motivated students with proven discipline",
    icon: "🏆",
  },
  {
    id: "challenge-90",
    name: "90-Day Challenge",
    description:
      "Ultimate accountability challenge with substantial rewards. Complete 90 days for ₹2000 reward",
    type: "challenge",
    price: 2000,
    duration: "90 Days",
    features: [
      "Daily target system",
      "Extreme consistency tracking",
      "Rewards for completion (₹2000)",
      "-₹50 penalty per missed day",
      "Clear failure limit (miss 7+ days = no reward)",
      "Maximum accountability",
    ],
    besFor: "Elite performers seeking maximum transformation with high stakes",
    icon: "🏆",
  },
  {
    id: "ssc-revision-30",
    name: "SSC Revision - 30 Days",
    description:
      "Intensive SSC-specific revision program with 45 mins daily sessions (Mon-Sat)",
    type: "ssc-revision",
    price: 2500,
    duration: "30 Days",
    features: [
      "45 mins/day revision sessions",
      "Monday-Saturday schedule",
      "SSC-specific content focus",
      "Live sessions & recordings",
      "Daily practice questions",
    ],
    besFor: "SSC aspirants needing focused revision program",
    icon: "📖",
  },
  {
    id: "upsc-weekend-3m",
    name: "UPSC Weekend Plan - 3 Months",
    description:
      "Weekend-focused UPSC preparation with comprehensive coverage in 3 months",
    type: "upsc-weekend",
    price: 7000,
    duration: "3 Months",
    features: [
      "Weekend sessions",
      "UPSC-focused curriculum",
      "Optional weekday support",
      "Current affairs coverage",
      "Answer writing practice",
    ],
    besFor: "UPSC aspirants with weekday work commitments",
    icon: "🎯",
  },
  {
    id: "upsc-weekend-6m",
    name: "UPSC Weekend Plan - 6 Months",
    description:
      "Extended 6-month weekend UPSC program with comprehensive preparation",
    type: "upsc-weekend",
    price: 13500,
    duration: "6 Months",
    features: [
      "Weekend sessions",
      "UPSC-focused curriculum",
      "Optional weekday support",
      "Current affairs coverage",
      "Answer writing practice",
      "Comprehensive test series",
    ],
    besFor: "Serious UPSC aspirants wanting extended preparation",
    icon: "🎯",
  },
];

export function getRecommendedPlans(
  scoreCategory: string,
  testScore: number
): Plan[] {
  const recommendations: Plan[] = [];

  switch (scoreCategory) {
    case "Elite Strategist":
      // Already performing well - suggest maintenance plan
      recommendations.push(
        allPlans.find((p) => p.id === "challenge-90")!,
        allPlans.find((p) => p.id === "normal-30")!,
        allPlans.find((p) => p.id === "tracker-30")!
      );
      break;

    case "Average Aspirant":
      // Working hard but losing efficiency - suggest accountability & tracking
      recommendations.push(
        allPlans.find((p) => p.id === "challenge-45")!,
        allPlans.find((p) => p.id === "normal-90")!,
        allPlans.find((p) => p.id === "tracker-180")!
      );
      break;

    case "High Risk of Failure":
      // Need immediate intensive support
      recommendations.push(
        allPlans.find((p) => p.id === "normal-180")!,
        allPlans.find((p) => p.id === "challenge-90")!,
        allPlans.find((p) => p.id === "tracker-30")!
      );
      break;

    default:
      recommendations.push(
        allPlans.find((p) => p.id === "normal-90")!,
        allPlans.find((p) => p.id === "tracker-30")!
      );
  }

  return recommendations;
}

export function getPlanDescription(scoreCategory: string): {
  title: string;
  description: string;
  icon: string;
} {
  switch (scoreCategory) {
    case "Elite Strategist":
      return {
        icon: "🏆",
        title: "Maintenance & Excellence Plan",
        description:
          "You're in the top 1%! Our Challenge Plan keeps you accountable and competitive. The Normal Plan ensures continuous mentoring support to maintain your elite status.",
      };
    case "Average Aspirant":
      return {
        icon: "⚡",
        title: "Breakthrough Plan",
        description:
          "You're working hard but losing 30% of your potential due to system gaps. Our Challenge Plan rebuilds your consistency, while the Normal Plan provides mentoring to close your efficiency gaps.",
      };
    case "High Risk of Failure":
      return {
        icon: "🚨",
        title: "Emergency Turnaround Plan",
        description:
          "Your current method won't work. You need intensive support immediately. Our comprehensive Normal Plan offers full mentoring (academic, accountability, psychological) plus the Challenge Plan for accountability.",
      };
    default:
      return {
        icon: "💪",
        title: "Personalized Plan",
        description:
          "Get a personalized plan that tracks your progress and connects you with mentors.",
      };
  }
}
