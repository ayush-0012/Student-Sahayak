import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Define the questions
const questions = [
  {
    id: 1,
    phase: "The Routine & Efficiency Trap",
    text: "Honestly, do you know the exact percentage of your syllabus you have completed, or are you just 'finishing chapters'?",
  },
  {
    id: 2,
    phase: "The Routine & Efficiency Trap",
    text: "Do you track your daily performance in two halves, or do you just realize at 11 PM that the whole day was a waste?",
  },
  {
    id: 3,
    phase: "The Routine & Efficiency Trap",
    text: "Why are you still inconsistent even after paying for a library or coaching? Do you think a new chair or a new room will magically fix your discipline?",
  },
  {
    id: 4,
    phase: "The Routine & Efficiency Trap",
    text: "Do you have a written schedule for tomorrow, or are you going to wake up and let YouTube/Instagram decide your mood for the day?",
  },
  {
    id: 5,
    phase: "The Routine & Efficiency Trap",
    text: "How many 'Backlogs' have you created in the last 30 days? Be honest—are you studying or just burying yourself under a mountain of pending work?",
  },
  {
    id: 6,
    phase: "The Physical & Mental Decay",
    text: "Do you realize your 45-degree neck angle and poor sitting posture are reducing oxygen flow to your brain, making you tired in just 2 hours?",
  },
  {
    id: 7,
    phase: "The Physical & Mental Decay",
    text: "How many hours of 'Brain-Rot' (Reels/Shorts) did you consume yesterday? Do you think your brain can focus on a complex theorem after being flooded with 15-second dopamine hits?",
  },
  {
    id: 8,
    phase: "The Physical & Mental Decay",
    text: "Are you genuinely efficient, or are you just 'sitting with books' for 8 hours to satisfy your guilt while your mind is somewhere else?",
  },
  {
    id: 9,
    phase: "The Physical & Mental Decay",
    text: "When was the last time you meditated for 10 minutes to calm your exam anxiety, or is your mind a constant storm of 'What if I fail'?",
  },
  {
    id: 10,
    phase: "The Strategic Failure",
    text: "How many times have you revised the topic you read last Monday? If the answer is 'Zero', you've already forgotten 70% of it. Is this how a topper prepares?",
  },
  {
    id: 11,
    phase: "The Strategic Failure",
    text: "Do you actually know your weak areas, or are you just repeatedly studying the 'Easy' chapters because they make you feel good?",
  },
  {
    id: 12,
    phase: "The Strategic Failure",
    text: "Do you have a mentor who is actually more intelligent than you, or are you just taking advice from friends who are as lost and scared as you are?",
  },
  {
    id: 13,
    phase: "The Strategic Failure",
    text: "Are you giving a Weekly Full-Length Test? If not, how do you know you're on the right track? Are you waiting for the final exam day to find out you're not ready?",
  },
  {
    id: 14,
    phase: "The Heavy Hits (Emotional Closer)",
    text: "You are 20+ years old. Are you still taking money from your parents for your basic expenses while you spend half your day procrastinating?",
  },
  {
    id: 15,
    phase: "The Heavy Hits (Emotional Closer)",
    text: "Every time you pick up your phone to scroll, do you realize you are pushing your family's dreams back by another year?",
  },
  {
    id: 16,
    phase: "The Heavy Hits (Emotional Closer)",
    text: "Are you really sure that this time you can make your parents proud? Or are you just preparing another set of 'logical excuses' for when the results come out?",
  },
  {
    id: 17,
    phase: "The Heavy Hits (Emotional Closer)",
    text: "Deep down, do you actually believe you are on the path to success, or are you just pretending to study so nobody asks you difficult questions?",
  },
];

export default function PsychologicalTest() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: answer });
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

  const submitTest = async () => {
    setIsLoading(true);
    try {
      // Prepare the data for Gemini API
      const questionsWithAnswers = questions.map((q) => ({
        question: q.text,
        phase: q.phase,
        answer: answers[q.id] || "Not answered",
      }));

      // Call Gemini API
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_GEMINI_API_KEY
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are a brutally honest reality-check analyst. Your job is NOT to motivate or encourage. Your job is to hold up a mirror and show the student exactly where they are failing. Based on their answers, provide a RAW, UNFILTERED reality check that:

1. Points out EXACTLY what they're doing wrong based on their responses
2. Compares them to successful students who are doing it RIGHT
3. Makes them realize they are FALLING BEHIND while others are moving ahead
4. Shows them the harsh truth: they are wasting their parents' money and time
5. Uses phrases like "While you're..., your competitors are...", "You're not fooling anyone", "Let's be honest..."
6. NO sugar-coating, NO motivational fluff, NO "you can do it" nonsense
7. Make them feel the weight of their current situation
8. End with: "The question isn't whether you need help. The question is whether you'll admit it before it's too late."

Here are the student's responses:

${questionsWithAnswers
  .map((qa) => `Phase: ${qa.phase}\nQ: ${qa.question}\nA: ${qa.answer}\n`)
  .join("\n")}

Provide a harsh reality check in 3-4 paragraphs. Be direct. Be raw. Make them uncomfortable with the truth.`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const generatedText =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Let's be honest here. You just spent time answering 17 questions about your study habits, and if you were truly confident in your system, you wouldn't have taken this test. The reality is simple: while you're scrolling through reels, sitting with books without actually studying, and creating backlogs, your competitors are executing a system that's making them winners. They're not hoping for results - they're engineering them.\n\nYou're 20+ years old, still dependent on your parents' money, and instead of building a future, you're building excuses. Every 'tomorrow I'll start' is another day your dreams die a little. Every time you say 'I'm trying my best' while procrastinating, you're lying to yourself and everyone who believes in you.\n\nThe harsh truth? You don't have a study problem. You have a system problem. And no amount of motivation videos or new notebooks will fix that. You need structure. You need accountability. You need to stop pretending and start performing. Student Sahayak offers that system for ₹275 - less than what you probably spend on food delivery in a week.\n\nThe question isn't whether you need help. The question is whether you'll admit it before it's too late.";

      setAiResponse(generatedText);
      setShowResults(true);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setAiResponse(
        "Let's be honest here. You just spent time answering 17 questions about your study habits, and if you were truly confident in your system, you wouldn't have taken this test. The reality is simple: while you're scrolling through reels, sitting with books without actually studying, and creating backlogs, your competitors are executing a system that's making them winners. They're not hoping for results - they're engineering them.\n\nYou're 20+ years old, still dependent on your parents' money, and instead of building a future, you're building excuses. Every 'tomorrow I'll start' is another day your dreams die a little. Every time you say 'I'm trying my best' while procrastinating, you're lying to yourself and everyone who believes in you.\n\nThe harsh truth? You don't have a study problem. You have a system problem. And no amount of motivation videos or new notebooks will fix that. You need structure. You need accountability. You need to stop pretending and start performing. Student Sahayak offers that system for ₹275 - less than what you probably spend on food delivery in a week.\n\nThe question isn't whether you need help. The question is whether you'll admit it before it's too late."
      );
      setShowResults(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-orange-500 flex items-center justify-center py-12 px-4 pt-24 md:pt-32">
        <Card className="max-w-3xl w-full bg-white/95 backdrop-blur-sm p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Your Personalized Insights
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 whitespace-pre-line leading-relaxed">
              {aiResponse}
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <h3 className="font-bold text-yellow-800 mb-2">
                Ready to Transform Your Journey?
              </h3>
              <p className="text-yellow-700">
                Hard work without a system is just exhaustion. For ₹275, get a
                Challenge Plan that tracks your backlogs, fixes your
                consistency, and gives you a path to earn your own money so you
                can stop being a burden on your parents.
              </p>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <Button
                onClick={() => navigate("/register")}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                size="lg"
              >
                Start Your Transformation - Register Now
              </Button>
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="flex-1"
                size="lg"
              >
                Back to Home
              </Button>
            </div>
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
            The Reality Check Questionnaire
          </h1>
          <p className="text-center text-gray-600 mb-4">
            Phase:{" "}
            <span className="font-semibold">{currentQuestion.phase}</span>
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
            {["Yes", "No", "Sometimes", "Not Sure"].map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  answers[currentQuestion.id] === option
                    ? "border-red-600 bg-red-50 shadow-md"
                    : "border-gray-300 hover:border-red-400 hover:bg-gray-50"
                }`}
              >
                <span className="font-medium text-gray-800">{option}</span>
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
