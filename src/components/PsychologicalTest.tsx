import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadarChart } from "@/components/ui/RadarChart";
import { getPlanDescription, getRecommendedPlans } from "@/lib/plans";
import {
  getTestAttemptsRemaining,
  saveTestScoreToFirebase,
} from "@/lib/test-helpers";
import { questions } from "@/lib/utils";
import { axiosInstance } from "@/utils/axiosInstance";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  const [testAttempts, setTestAttempts] = useState<{
    remaining: number;
    testsToday: number;
    canTakeTest: boolean;
  } | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [showLimitExhaustedModal, setShowLimitExhaustedModal] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("firebaseToken");
    if (!token) {
      navigate("/login");
      return;
    }

    // Fetch test attempts remaining
    const fetchAttempts = async () => {
      const attempts = await getTestAttemptsRemaining();
      if (attempts) {
        setTestAttempts(attempts);
        if (!attempts.canTakeTest) {
          // Show the modal and don't allow any interaction
          setShowLimitExhaustedModal(true);
          setIsAuthLoading(false);
          return;
        }
        setIsAuthLoading(false);
      } else {
        // Session might be expired
        toast.error("Session expired. Please login again.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        localStorage.removeItem("firebaseToken");
        localStorage.removeItem("firebaseUid");
        navigate("/login");
        return;
      }
    };

    fetchAttempts();
  }, [navigate]);

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

  const getSuggestedPlans = (category: string) => {
    const planData = getPlanDescription(category);
    const plans = getRecommendedPlans(category, totalScore);
    return { ...planData, plans };
  };

  const submitTest = async () => {
    // SAFETY CHECK: Ensure user can still take the test
    if (!testAttempts || !testAttempts.canTakeTest) {
      setShowLimitExhaustedModal(true);
      return;
    }

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

      // Save test score to Firebase
      const testResult = {
        message: generatedText,
        score: {
          total: score,
          max: 125,
          percentage: category.percentage,
          status: category.status,
        },
        blockAnalysis: data.blockAnalysis || [],
      };
      await saveTestScoreToFirebase(testResult);

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

      // Save test score to Firebase even on error
      const testResult = {
        message: category.message,
        score: {
          total: score,
          max: 125,
          percentage: category.percentage,
          status: category.status,
        },
        blockAnalysis: localAnalysis,
      };
      await saveTestScoreToFirebase(testResult);

      setShowResults(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (showLimitExhaustedModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <Card className="max-w-md w-full bg-white/98 backdrop-blur-md p-8 shadow-2xl rounded-2xl animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Warning Icon */}
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Daily Limit Exhausted
              </h2>
              <p className="text-gray-600 text-lg font-semibold">
                You've exhausted your daily limit.
              </p>
            </div>

            {/* Message */}
            <p className="text-gray-600 text-base leading-relaxed">
              You have completed your maximum allowed tests for today (2/2).
              Please try again tomorrow to take another test.
            </p>

            {/* Button */}
            <Button
              onClick={() => {
                navigate("/", { replace: true });
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-12 rounded-lg shadow-lg shadow-red-200 transition-all hover:-translate-y-0.5 active:translate-y-0 mt-4"
            >
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (isAuthLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-orange-500 flex items-center justify-center">
        <Card className="max-w-md w-full bg-white/95 backdrop-blur-sm p-8 shadow-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Validating Session...
          </h2>
          <p className="text-gray-600">
            Please wait while we verify your credentials.
          </p>
        </Card>
      </div>
    );
  }

  // ADDITIONAL SAFETY CHECK: If attempts are loaded but user can't take test, show modal
  if (testAttempts && !testAttempts.canTakeTest && !showLimitExhaustedModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <Card className="max-w-md w-full bg-white/98 backdrop-blur-md p-8 shadow-2xl rounded-2xl animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Warning Icon */}
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Daily Limit Exhausted
              </h2>
              <p className="text-gray-600 text-lg font-semibold">
                You've exhausted your daily limit.
              </p>
            </div>

            {/* Message */}
            <p className="text-gray-600 text-base leading-relaxed">
              You have completed your maximum allowed tests for today (2/2).
              Please try again tomorrow to take another test.
            </p>

            {/* Button */}
            <Button
              onClick={() => {
                navigate("/", { replace: true });
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-12 rounded-lg shadow-lg shadow-red-200 transition-all hover:-translate-y-0.5 active:translate-y-0 mt-4"
            >
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

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

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 p-6 rounded-xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200/20 rounded-full -mr-12 -mt-12"></div>
                <h3 className="font-bold text-blue-900 mb-3 text-lg flex items-center gap-2">
                  <span className="text-2xl">
                    {getSuggestedPlans(scoreCategory).icon}
                  </span>
                  {getSuggestedPlans(scoreCategory).title}
                </h3>
                <p className="text-sm text-blue-800 mb-6 leading-relaxed">
                  {getSuggestedPlans(scoreCategory).description}
                </p>

                {/* Display recommended plans in grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {getSuggestedPlans(scoreCategory).plans.map((plan) => (
                    <div
                      key={plan.id}
                      className="bg-white/90 p-4 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
                    >
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-blue-900 text-sm">
                            {plan.name}
                          </p>
                          <span className="text-base font-bold text-blue-600">
                            ₹{plan.price}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-1">
                          {plan.besFor}
                        </p>
                      </div>
                      <p className="text-xs text-gray-700 mb-3 line-clamp-2">
                        {plan.description}
                      </p>
                      <div className="text-xs text-gray-600">
                        <ul className="list-disc list-inside space-y-0.5">
                          {plan.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="line-clamp-1">
                              {feature}
                            </li>
                          ))}
                          {plan.features.length > 3 && (
                            <li>+ {plan.features.length - 3} more</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Explore Plans Button */}
                <button
                  onClick={() => navigate("/pricing")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  Explore All Plans
                </button>
              </div>

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
          <div className="flex justify-between items-center mb-4">
            <Button variant="ghost" onClick={() => navigate("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            {testAttempts && (
              <div className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                Test Attempts: {testAttempts.remaining}/2
              </div>
            )}
          </div>
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
            SS Journey METER: Preparation का DNA Test
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
