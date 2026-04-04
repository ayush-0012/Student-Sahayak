import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadarChart } from "@/components/ui/RadarChart";
import { axiosInstance } from "@/utils/axiosInstance";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

// Define the questions based on the SS METER document
const questions = [
  {
    id: 1,
    block: "Data Precision & Operational Tracking",
    text: "The Syllabus Progress Meter: Can you state the exact percentage (e.g., 62%) of the syllabus you have mastered, or are you just 'finishing books'?",
    options: [
      {
        label: "Yes, I use a syllabus-completion tracker",
        value: "A",
        points: 5,
      },
      {
        label: "I know which subjects are done, but not the percentage",
        value: "B",
        points: 2,
      },
      {
        label: "I'm just moving from one chapter to the next",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 2,
    block: "Data Precision & Operational Tracking",
    text: "The Backlog Metric: Do you know the exact number of hours or chapters currently sitting in your 'Backlog,' or is it just a vague 'mountain' in your head?",
    options: [
      {
        label: "Yes, I have a clear, written backlog list",
        value: "A",
        points: 5,
      },
      { label: "I have a rough idea of what's pending", value: "B", points: 2 },
      { label: "No idea, I just know I'm far behind", value: "C", points: 0 },
    ],
  },
  {
    id: 3,
    block: "Data Precision & Operational Tracking",
    text: "The 30-Day Consistency Log: In the last 30 days, do you know the exact number of days you hit your target study hours?",
    options: [
      { label: "Yes, I have a consistency tracker/log", value: "A", points: 5 },
      {
        label: "I think it was most days, but I'm not sure",
        value: "B",
        points: 2,
      },
      { label: "I don't track my days at all", value: "C", points: 0 },
    ],
  },
  {
    id: 4,
    block: "Data Precision & Operational Tracking",
    text: "The Daily Velocity Test: Do you know exactly which subjects are weak and which are strong?",
    options: [
      { label: "Yes, I have calculated", value: "A", points: 5 },
      { label: "I have a general sense", value: "B", points: 2 },
      { label: "No, I never thought to measure it", value: "C", points: 0 },
    ],
  },
  {
    id: 5,
    block: "Data Precision & Operational Tracking",
    text: "The Decision Fatigue: Do you spend more than 5 minutes every morning deciding 'What to study today'? (Are you regularly making a schedule?)",
    options: [
      {
        label: "Zero minutes. My schedule is fixed 24 hours in advance",
        value: "A",
        points: 5,
      },
      { label: "10-15 minutes of shuffling books", value: "B", points: 2 },
      {
        label: "I decide based on what I feel like studying at that moment",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 6,
    block: "Data Precision & Operational Tracking",
    text: "The Feedback Frequency: How often does a superior strategist review your daily study logs to point out where you are leaking time?",
    options: [
      { label: "Daily", value: "A", points: 5 },
      { label: "Once a month or after a mock test", value: "B", points: 2 },
      {
        label: "Never. No one reviews my study patterns",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 7,
    block: "Memory Mastery & Retrieval Science",
    text: "The Revision 'Due Date': Do you have a 'Revision Tracker' that tells you exactly which topic is due for its 3rd or 7th-day review today?",
    options: [
      {
        label: "Yes, my revision is automated/scheduled",
        value: "A",
        points: 5,
      },
      {
        label: "I revise whenever I feel I'm forgetting something",
        value: "B",
        points: 2,
      },
      {
        label: "I only revise when I finish the entire subject",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 8,
    block: "Memory Mastery & Retrieval Science",
    text: "The Active Recall Audit (Memory Management): At the end of your day, do you perform a 'Blind Active Recall' (closing your eyes and mapping out everything you learned), or do you just rely on 'Re-reading' your notes?",
    options: [
      {
        label: "Yes, I spend 30 minutes daily on pure Active Recall",
        value: "A",
        points: 5,
      },
      {
        label: "I do it occasionally for difficult topics",
        value: "B",
        points: 2,
      },
      {
        label: "I don't do recall; I just re-read my notes/highlighted text",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 9,
    block: "Memory Mastery & Retrieval Science",
    text: "The Recovery Strategy: Do you have a fixed 'Power Down' routine to ensure your brain enters deep sleep for memory consolidation, or do you scroll until you fall asleep?",
    options: [
      {
        label: "Strict no-screen policy 1 hour before bed",
        value: "A",
        points: 5,
      },
      {
        label: "I check my phone 'one last time' in bed",
        value: "B",
        points: 2,
      },
      {
        label: "I fall asleep while watching videos/scrolling",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 10,
    block: "Cognitive Health & Focus Control",
    text: "The 'Deep Work' Threshold: Can you sit for 90 minutes straight without touching your phone, water, or leaving your chair?",
    options: [
      {
        label: "Yes, I consistently hit 90-120 minute blocks",
        value: "A",
        points: 5,
      },
      { label: "I get distracted every 30-45 minutes", value: "B", points: 2 },
      { label: "I check my phone every 10-15 minutes", value: "C", points: 0 },
    ],
  },
  {
    id: 11,
    block: "Cognitive Health & Focus Control",
    text: "The 'Doom-Scrolling' Tax: How many minutes of your day are lost to 'Brain-Rot' content (Instagram Reels, YouTube Shorts, or endless Blog scrolling)?",
    options: [
      {
        label:
          "Zero. My phone is locked during study hours and I have deleted entertainment apps",
        value: "A",
        points: 5,
      },
      {
        label: "I scroll for 30–60 minutes daily, usually as a 'break'",
        value: "B",
        points: 2,
      },
      {
        label: "2+ hours daily. I find myself scrolling reflexively",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 12,
    block: "Cognitive Health & Focus Control",
    text: "The Cerebral Hygiene Protocol: Do you perform 'Cerebral Hygiene' (meditation, deep breathing, or silence) to clear the mental clutter, or is your brain a 'dumping ground'?",
    options: [
      {
        label: "Yes, I spend 10–15 minutes daily in silence/meditation",
        value: "A",
        points: 5,
      },
      {
        label: "I try to sit quietly only when I am extremely stressed",
        value: "B",
        points: 2,
      },
      {
        label: "Never. If I'm not studying, I am consuming content",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 13,
    block: "Bio-Mechanical & Physical Optimization",
    text: "The Postural Oxygen Tax: Do you maintain a straight spine with a neck angle of less than 15 degrees, or is your head tilted at 45+ degrees (The 'Text-Neck')?",
    options: [
      {
        label: "My books are on a stand at eye level; my spine is neutral",
        value: "A",
        points: 5,
      },
      {
        label: "I try to sit straight, but after 30 minutes, I slouch",
        value: "B",
        points: 2,
      },
      {
        label: "I study lying on the bed or slouched on a sofa",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 14,
    block: "Bio-Mechanical & Physical Optimization",
    text: "The 'Environmental Peak' Awareness: Do you know your exact 'Peak Productivity Variable' (Temperature, Lighting, Sound) where your brain hits a Flow State?",
    options: [
      {
        label: "Yes, I have a 'Focus Bunker' with optimized light/zero noise",
        value: "A",
        points: 5,
      },
      {
        label: "I have a fixed desk, but I get distracted by family/lighting",
        value: "B",
        points: 2,
      },
      {
        label: "I study in random places (bed, dining table, balcony)",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 15,
    block: "Bio-Mechanical & Physical Optimization",
    text: "The 'Physical Reset' Rule: Do you perform at least 30–40 minutes of high-intensity physical activity to flush out cortisol?",
    options: [
      {
        label: "Yes, I complete my 4000-step sprint/workout 5-6 days a week",
        value: "A",
        points: 5,
      },
      { label: "I walk or play occasionally", value: "B", points: 2 },
      { label: "Zero physical activity", value: "C", points: 0 },
    ],
  },
  {
    id: 16,
    block: "Bio-Mechanical & Physical Optimization",
    text: "The 'Fuel' & Diet Tracking: Do you track your intake of junk food/processed sugar, knowing that high-glycemic foods cause 'brain fog'?",
    options: [
      {
        label: "I log my meals and strictly follow a 'Clean Fuel' policy",
        value: "A",
        points: 5,
      },
      {
        label: "I try to eat healthy but don't track junk",
        value: "B",
        points: 2,
      },
      { label: "I eat whatever is available", value: "C", points: 0 },
    ],
  },
  {
    id: 17,
    block: "Tactical Testing & Strategic Support",
    text: "The Mock Test Frequency: Have you given a full-length mock test in the last 7 days?",
    options: [
      { label: "Yes, without fail", value: "A", points: 5 },
      {
        label: "No, I'll start when the syllabus is 80% done",
        value: "B",
        points: 2,
      },
      {
        label: "I'm terrified of mock tests and avoid them",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 18,
    block: "Tactical Testing & Strategic Support",
    text: "The Competitive 'Rank' Awareness: Do you know how your daily output compares to the top 1% of aspirants?",
    options: [
      {
        label: "Yes, I have a leaderboard/peer-group comparison",
        value: "A",
        points: 5,
      },
      {
        label: "I have a vague idea from a few friends",
        value: "B",
        points: 2,
      },
      { label: "No, I study in total isolation", value: "C", points: 0 },
    ],
  },
  {
    id: 19,
    block: "Mental Resilience & Expert Guidance",
    text: "The 24/7 Expert Gap: Do you have a dedicated mentor available 24/7 who can resolve a preparation related doubt the moment it strikes?",
    options: [
      { label: "Yes, I have 24/7 on-call/chat support", value: "A", points: 5 },
      {
        label: "I have a teacher, but I have to wait for the next class",
        value: "B",
        points: 2,
      },
      {
        label: "No, I have to find answers on Google/YouTube myself",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 20,
    block: "Mental Resilience & Expert Guidance",
    text: "The Mental De-clutter (Journaling): Do you practice daily Journaling to offload your exam anxiety and 'What if' thoughts?",
    options: [
      {
        label: "I journal every night to clear my mental cache",
        value: "A",
        points: 5,
      },
      {
        label: "I write things down only when I'm very stressed",
        value: "B",
        points: 2,
      },
      {
        label: "I don't journal; I just try to ignore the stress",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 21,
    block: "Mental Resilience & Expert Guidance",
    text: "The 'Hardship' Perspective: When you face a very difficult topic that you cannot understand, what is your internal dialogue?",
    options: [
      {
        label: "'This is a challenge. If I solve this, I will be ahead.'",
        value: "A",
        points: 5,
      },
      {
        label: "'I'll try to do the basics and move on.'",
        value: "B",
        points: 2,
      },
      {
        label: "'I'm not smart enough for this subject.'",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 22,
    block: "Mental Resilience & Expert Guidance",
    text: "The Accountability Mirror: When you are inconsistent, who or what do you blame most often?",
    options: [
      {
        label: "I blame my lack of discipline and fix it immediately",
        value: "A",
        points: 5,
      },
      {
        label: "I blame the situation but try to improve",
        value: "B",
        points: 2,
      },
      {
        label: "I blame the teachers, competition, or luck",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 23,
    block: "Mental Resilience & Expert Guidance",
    text: "Do you know exactly why you need to remain consistent for this month specifically? Do you see how these 30 days connect to your final success, or are you just 'counting days'?",
    options: [
      {
        label:
          "Yes, I have mapped my monthly targets to my life goals; I know why every hour matters",
        value: "A",
        points: 5,
      },
      {
        label:
          "I try to be consistent because I know I should, but I lose track of the 'Why' easily",
        value: "B",
        points: 2,
      },
      { label: "No", value: "C", points: 0 },
    ],
  },
  {
    id: 24,
    block: "General",
    text: "How much you are confused about your sources?",
    options: [
      { label: "I stick to my sources.", value: "A", points: 5 },
      { label: "I changes frequently.", value: "B", points: 2 },
      { label: "I still do not know.", value: "C", points: 0 },
    ],
  },
  {
    id: 25,
    block: "General",
    text: "Do you give weekly test?",
    options: [
      { label: "Every week", value: "A", points: 5 },
      { label: "Not regular.", value: "B", points: 2 },
      { label: "Hardly any.", value: "C", points: 0 },
    ],
  },
];

interface Answer {
  questionId: number;
  selectedOption: string;
  points: number;
}

export default function PsychologicalTest() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: Answer }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [scoreCategory, setScoreCategory] = useState("");
  const [blockAnalysis, setBlockAnalysis] = useState<any[]>([]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (option: (typeof currentQuestion.options)[0]) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: {
        questionId: currentQuestion.id,
        selectedOption: option.value,
        points: option.points,
      },
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      submitTest();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let total = 0;
    Object.values(answers).forEach((answer) => {
      total += answer.points;
    });
    return total;
  };

  const getScoreCategory = (score: number) => {
    const percentage = (score / 125) * 100; // Max score is 25 questions × 5 = 125

    if (score >= 104) {
      // 83% - 100%
      return {
        status: "Elite Strategist",
        message:
          "You are in the top 1%. Your system is elite. You just need to maintain this 'Operational Excellence' until the final exam.",
        percentage: percentage.toFixed(0),
      };
    } else if (score >= 63) {
      // 50% - 82%
      return {
        status: "Average Aspirant",
        message:
          "You are working hard, but your Operational Inefficiency is leaking energy. You are wasting nearly 30% of your potential every day due to lack of systems.",
        percentage: percentage.toFixed(0),
      };
    } else {
      // Below 50%
      return {
        status: "High Risk of Failure",
        message:
          "Warning: Your current method is mathematically destined to fail. You are 'Pretend-Studying' without tracking, biology, or support.",
        percentage: percentage.toFixed(0),
      };
    }
  };

  const submitTest = async () => {
    setIsLoading(true);

    // Calculate score
    const score = calculateScore();
    const category = getScoreCategory(score);
    setTotalScore(score);
    setScoreCategory(category.status);

    try {
      // Prepare the data for backend API
      const questionsWithAnswers = questions.map((q) => {
        const answer = answers[q.id];
        return {
          question: q.text,
          block: q.block,
          answer: answer ? answer.selectedOption : "Not answered",
          points: answer ? answer.points : 0,
        };
      });

      const payload = {
        answers: questionsWithAnswers,
        totalScore: score,
        maxScore: 125,
        percentage: category.percentage,
        status: category.status,
      };

      console.log("📦 Payload:", JSON.stringify(payload));

      // Call backend API
      const response = await axiosInstance.post("/api/analyze-test", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;
      const generatedText = data.message || "Something went wrong.";

      setAiResponse(generatedText);
      if (data.blockAnalysis) {
        setBlockAnalysis(data.blockAnalysis);
      }
      setShowResults(true);
    } catch (error) {
      console.error("Error submitting test:", error);
      // Even if AI fails, show the score
      setAiResponse(category.message);

      // Calculate local block analysis as fallback
      const localAnalysis = Object.values(
        questions.reduce((acc: any, q) => {
          if (!acc[q.block]) {
            acc[q.block] = { block: q.block, scored: 0, total: 0 };
          }
          const answer = answers[q.id];
          acc[q.block].scored += answer ? answer.points : 0;
          acc[q.block].total += 5; // Each question is 5 pts max
          return acc;
        }, {})
      ).map((item: any) => ({
        ...item,
        percentage: ((item.scored / item.total) * 100).toFixed(0),
      }));
      setBlockAnalysis(localAnalysis);

      setShowResults(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (showResults) {
    const category = getScoreCategory(totalScore);
    const percentage = category.percentage;

    return (
      <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-orange-500 flex items-start md:items-center justify-center py-16 px-2 md:px-6 md:py-24 pt-24 md:pt-32">
        <Card className="w-full max-w-[1400px] bg-white/95 backdrop-blur-sm p-6 md:p-10 shadow-2xl relative">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
              <div className="w-full mb-8">
                <h2 className="text-3xl font-bold mb-2 text-gray-800 tracking-tight">
                  Your Sahayak Score
                </h2>
                <div className="text-7xl font-black text-red-600 my-4 drop-shadow-sm">
                  {totalScore}/125
                </div>
                <div className="text-xl font-bold text-gray-600 mb-2">
                  {percentage}% - {scoreCategory}
                </div>
                <div className="w-64 mx-auto bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      totalScore >= 104
                        ? "bg-green-600"
                        : totalScore >= 63
                          ? "bg-orange-500"
                          : "bg-red-600"
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>

              {blockAnalysis && blockAnalysis.length > 0 && (
                <div className="w-full flex flex-col items-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                    <span className="w-8 h-px bg-gray-300"></span>
                    Your Preparation DNA Web
                    <span className="w-8 h-px bg-gray-300"></span>
                  </h3>
                  <div className="w-full max-w-2xl flex justify-center">
                    <RadarChart data={blockAnalysis} size={520} />
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Reality Hit and Gaps */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="p-6 rounded-xl bg-red-50 border border-red-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">
                  The Reality Hit
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "{getScoreCategory(totalScore).message}"
                </p>
              </div>

              {blockAnalysis && blockAnalysis.length > 0 && (
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-100 shadow-sm">
                    <h4 className="font-bold text-emerald-800 mb-3 flex items-center text-base">
                      <span className="mr-2 text-xl">🔥</span> Top Strengths
                    </h4>
                    <ul className="space-y-2 text-sm text-emerald-700">
                      {blockAnalysis
                        .filter((b) => Number(b.percentage) >= 70)
                        .map((b, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            <span>
                              {b.block}{" "}
                              <span className="font-bold">
                                ({b.percentage}%)
                              </span>
                            </span>
                          </li>
                        ))}
                      {blockAnalysis.filter((b) => Number(b.percentage) >= 70)
                        .length === 0 && (
                        <li className="italic text-gray-500">
                          Keep grinding to build your first major strength!
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="p-5 rounded-xl bg-red-50 border border-red-100 shadow-sm">
                    <h4 className="font-bold text-red-800 mb-3 flex items-center text-base">
                      <span className="mr-2 text-xl">⚠️</span> Critical Gaps
                    </h4>
                    <ul className="space-y-2 text-sm text-red-700">
                      {blockAnalysis
                        .filter((b) => Number(b.percentage) < 50)
                        .map((b, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                            <span>
                              {b.block}{" "}
                              <span className="font-bold">
                                ({b.percentage}%)
                              </span>
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-100 p-6 rounded-xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200/20 rounded-full -mr-12 -mt-12"></div>
                <h3 className="font-bold text-orange-900 mb-2 text-lg">
                  Ready to Transform?
                </h3>
                <p className="text-sm text-orange-800 mb-5 leading-relaxed">
                  Hard work without a system is just exhaustion. Get a
                  <span className="font-bold"> Challenge Plan</span> that tracks
                  your backlogs and fixes your consistency.
                </p>
                <Button
                  onClick={() => navigate("/register")}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-12 rounded-lg shadow-lg shadow-red-200 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  Start Your Transformation
                </Button>
              </div>
            </div>
          </div>

          <hr className="mt-2 mb-8 border-gray-200" />

          {aiResponse &&
            aiResponse !== getScoreCategory(totalScore).message && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                  <span className="mr-2">🧬</span> Personalized DNA Analysis
                </h3>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-inner">
                  <div className="prose prose-sm md:prose-base max-w-none text-gray-700 leading-relaxed">
                    <ReactMarkdown
                      components={{
                        h1: ({ ...props }) => (
                          <h1
                            className="text-2xl font-bold mb-4 text-gray-900"
                            {...props}
                          />
                        ),
                        h2: ({ ...props }) => (
                          <h2
                            className="text-xl font-bold mb-3 text-gray-800"
                            {...props}
                          />
                        ),
                        h3: ({ ...props }) => (
                          <h3
                            className="text-lg font-bold mb-2 text-gray-800"
                            {...props}
                          />
                        ),
                        p: ({ ...props }) => (
                          <p className="mb-4 last:mb-0" {...props} />
                        ),
                        ul: ({ ...props }) => (
                          <ul
                            className="list-disc pl-5 mb-4 space-y-2"
                            {...props}
                          />
                        ),
                        li: ({ ...props }) => <li className="" {...props} />,
                        strong: ({ ...props }) => (
                          <strong
                            className="font-bold text-red-600"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {aiResponse}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            )}

          <div className="flex justify-center mt-12 mb-2">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="text-gray-500 hover:text-red-600 hover:bg-red-50 flex items-center gap-2 group transition-all px-8 rounded-full"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold">Back to Home</span>
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-orange-500 flex items-center justify-center py-12 px-4 pt-24 md:pt-32">
      <Card className="max-w-3xl w-full bg-white/95 backdrop-blur-sm p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
            SS METER: Preparation DNA Test
          </h1>
          <p className="text-center text-gray-600 mb-4">
            Block:{" "}
            <span className="font-semibold">{currentQuestion.block}</span>
          </p>
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-red-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-center text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            {currentQuestion.text}
          </h2>

          {/* Answer options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  answers[currentQuestion.id]?.selectedOption === option.value
                    ? "border-red-600 bg-red-50 shadow-md"
                    : "border-gray-300 hover:border-red-400 hover:bg-gray-50"
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-800 flex-1">
                    {option.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            variant="outline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          <Button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id] || isLoading}
            className="bg-red-600 hover:bg-red-700"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : currentQuestionIndex === questions.length - 1 ? (
              "Submit & Get Results"
            ) : (
              <>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
}
