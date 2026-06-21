import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { axiosInstance } from "@/utils/axiosInstance";
import { Check, Star } from "lucide-react";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import RefundPolicy from "./RefundPolicy";

const normalPlanFeatures = [
  "Schedule system",
  "Backlog Tracker",
  "Revision Tracker",
  "Rating System",
  "Badges",
  "Paid Internship Role",
  "Deep Profile Analysis of Student",
  "Syllabus Tracker",
  "Academic Mentor",
  "Accountability Mentor",
  "Psychological Mentor( Related to Exam Stress)",
  "Leaderboard",
];

const trackerPlanFeatures = [
  "Schedule System",
  "Revision Tracker",
  "Syllabus Tracker",
  "Backlog Tracker",
];

const normalPlans = [
  {
    days: "30",
    price: 250,
    originalPrice: 500,
    popular: false,
    discount: 50,
  },
  {
    days: "90",
    price: 700,
    originalPrice: 1500,
    popular: true,
    discount: 53,
  },
  {
    days: "180",
    price: 1400,
    originalPrice: 3000,
    popular: false,
    discount: 53,
  },
];

const trackerPlans = [
  // { days: "7", price: 30, originalPrice: 50, popular: false, discount: 40 },
  { days: "30", price: 99, originalPrice: 150, popular: true, discount: 34 },
  {
    days: "180",
    price: 1400,
    originalPrice: 2000,
    popular: false,
    discount: 30,
  },
];

function Pricing() {
  const [loadingAmount, setLoadingAmount] = useState<number | null>(null);
  const [selectedNormalDuration, setSelectedNormalDuration] =
    useState<string>("90");
  const [selectedTrackerDuration, setSelectedTrackerDuration] =
    useState<string>("30");

  const selectedPlanData = normalPlans.find(
    (p) => p.days === selectedNormalDuration
  );
  const selectedTrackerData = trackerPlans.find(
    (p) => p.days === selectedTrackerDuration
  );

  async function handleChoosePlan(amount: number) {
    try {
      setLoadingAmount(amount);
      const response = await axiosInstance.post("/create-order", {
        amount,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      });

      const data = response.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: data.amount,
        currency: data.currency,
        order_id: data.id,
        name: "Student Sahayak",
        description: "Plan Upgrade",
        handler: async (response: any) => {
          try {
            await axiosInstance.post("/verify-payment", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            toast.success("Payment successful!");
            window.location.reload();
          } catch (error) {
            toast.error("Payment verification failed");
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#ea580c",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
        transition: Bounce,
      });
    } finally {
      setLoadingAmount(null);
    }
  }

  return (
    <>
      <section id="pricing" className="bg-gray-50 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fee Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for your academic journey
            </p>
          </div>

          <Tabs defaultValue="normal" className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-12 px-2">
              <TabsList className="grid w-full grid-cols-3 max-w-xl bg-gray-100 rounded-full p-1">
                <TabsTrigger value="normal" className="rounded-full font-bold text-xs sm:text-sm">
                  <span className="sm:hidden">Sahayak</span>
                  <span className="hidden sm:inline">Sahayak Plan</span>
                </TabsTrigger>
                <TabsTrigger value="tracker" className="rounded-full font-bold text-xs sm:text-sm">
                  <span className="sm:hidden">SSP</span>
                  <span className="hidden sm:inline">Solo System Plan (SSP)</span>
                </TabsTrigger>
                <TabsTrigger value="compare" className="rounded-full font-bold text-xs sm:text-sm">
                  <span className="sm:hidden">Compare</span>
                  <span className="hidden sm:inline">Compare Plans</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="normal" className="outline-none">
              <div className="mb-16">
                <div className="flex flex-col items-center text-center mb-8">
                  <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    Premium Tier
                  </span>
                  <h2 className="text-5xl font-black text-gray-900 mb-2">
                    Sahayak Plan
                  </h2>
                  <p className="text-gray-500 text-lg">
                    Full Access to All Features
                  </p>
                </div>

                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-w-5xl mx-auto flex flex-col md:flex-row">
                  {/* Left: Features List */}
                  <div className="flex-1 p-8 md:p-12 bg-gray-50/50">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <Star className="h-6 w-6 text-orange-600 fill-orange-600" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        Core Modules
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {normalPlanFeatures.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="bg-orange-600 rounded-full p-0.5">
                            <Check
                              className="h-3 w-3 text-white"
                              strokeWidth={4}
                            />
                          </div>
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Selection Area */}
                  <div className="flex-1 p-8 md:p-12 flex flex-col justify-center border-l border-gray-100">
                    <h4 className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
                      Choose Duration
                    </h4>
                    <div className="space-y-4 mb-10">
                      {normalPlans.map((plan) => (
                        <div
                          key={plan.days}
                          onClick={() => setSelectedNormalDuration(plan.days)}
                          className={`relative cursor-pointer group rounded-2xl p-5 border-2 transition-all duration-300 ${
                            selectedNormalDuration === plan.days
                              ? "border-orange-500 bg-orange-50/30 ring-4 ring-orange-500/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          {plan.popular && (
                            <div className="absolute -top-3 left-6 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                              MOST POPULAR
                            </div>
                          )}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                                  selectedNormalDuration === plan.days
                                    ? "border-orange-500 bg-orange-500"
                                    : "border-gray-300 group-hover:border-gray-400"
                                }`}
                              >
                                {selectedNormalDuration === plan.days && (
                                  <div className="w-2 h-2 bg-white rounded-full" />
                                )}
                              </div>
                              <span
                                className={`text-lg font-bold ${selectedNormalDuration === plan.days ? "text-gray-900" : "text-gray-600"}`}
                              >
                                {plan.days} Days
                              </span>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-black text-gray-900">
                                ₹{plan.price}
                              </div>
                              {plan.originalPrice && (
                                <div className="text-xs text-gray-400 line-through">
                                  ₹{plan.originalPrice}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() =>
                        selectedPlanData &&
                        handleChoosePlan(selectedPlanData.price)
                      }
                      disabled={
                        loadingAmount === selectedPlanData?.price ||
                        !selectedPlanData
                      }
                      className="w-full py-8 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xl shadow-xl shadow-orange-500/20 transition-all hover:-translate-y-1"
                    >
                      {loadingAmount === selectedPlanData?.price
                        ? "..."
                        : "Activate Sahayak Plan"}
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tracker" className="outline-none">
              <div className="mb-16">
                <div className="flex flex-col items-center text-center mb-8">
                  <span className="bg-emerald-100 text-emerald-600 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    Premium Subscription
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 italic leading-tight">
                    "People will become better when you show them what they are like."
                  </h2>
                  <p className="text-gray-400 text-sm font-medium tracking-wide">
                    — Anton Chekhov
                  </p>
                </div>

                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-w-5xl mx-auto flex flex-col md:flex-row">
                  {/* Left: Features List */}
                  <div className="flex-1 p-8 md:p-12 border-r border-gray-100">
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                          <Star className="h-6 w-6 text-emerald-600 fill-emerald-600/20" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">
                          Solo System Plan (SSP)
                        </h3>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed mb-8">
                        A plan to track your each move in student journey.
                        Master your time and syllabus with surgical precision.
                      </p>
                    </div>
                    <div className="space-y-4">
                      {trackerPlanFeatures.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="bg-emerald-100 rounded-full p-1.5">
                            <Check
                              className="h-4 w-4 text-emerald-600"
                              strokeWidth={4}
                            />
                          </div>
                          <span className="text-gray-800 font-semibold text-lg">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Selection Area */}
                  <div className="flex-1 p-8 md:p-12 bg-gray-50/30 flex flex-col justify-center">
                    <h4 className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
                      Choose Duration
                    </h4>
                    <div className="space-y-3 mb-10">
                      {trackerPlans.map((plan) => (
                        <div
                          key={plan.days}
                          onClick={() => setSelectedTrackerDuration(plan.days)}
                          className={`relative cursor-pointer group rounded-2xl p-4 border-2 transition-all duration-300 ${
                            selectedTrackerDuration === plan.days
                              ? "border-emerald-500 bg-white ring-4 ring-emerald-500/5"
                              : "bg-gray-100/50 border-transparent hover:bg-gray-200/50"
                          }`}
                        >
                          {plan.popular && (
                            <div className="absolute -top-3 right-6 bg-emerald-700 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                              BEST VALUE
                            </div>
                          )}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <span
                                className={`text-xl font-bold ${selectedTrackerDuration === plan.days ? "text-emerald-700" : "text-gray-600"}`}
                              >
                                {plan.days}{" "}
                                <span className="text-sm font-medium ml-1">
                                  Days
                                </span>
                              </span>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-black text-gray-900">
                                ₹{plan.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() =>
                        selectedTrackerData &&
                        handleChoosePlan(selectedTrackerData.price)
                      }
                      disabled={
                        loadingAmount === selectedTrackerData?.price ||
                        !selectedTrackerData
                      }
                      className="w-full py-8 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xl shadow-xl shadow-emerald-900/10 transition-all hover:-translate-y-1"
                    >
                      {loadingAmount === selectedTrackerData?.price
                        ? "..."
                        : "Activate Solo System Plan"}
                    </Button>
                    <p className="text-center text-[10px] text-gray-400 italic mt-4 transition-all hover:text-gray-600 cursor-default">
                      Secure checkout. Cancel anytime.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Compare Plans Tab */}
            <TabsContent value="compare" className="outline-none">
              <div className="mb-16">
                <div className="flex flex-col items-center text-center mb-10">
                  <h2 className="text-5xl font-black text-gray-900 mb-2">
                    Which Plan is Right for You?
                  </h2>
                  <p className="text-gray-500 text-lg max-w-xl">
                    See exactly what's included in each plan before you decide.
                  </p>
                </div>

                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-w-3xl mx-auto">
                  {/* Table Header */}
                  <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                    <div className="py-5 px-6 text-left">
                      <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Feature</span>
                    </div>
                    <div className="py-5 px-4 text-center border-l border-gray-200">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mb-1">
                          <Star className="h-4 w-4 text-emerald-600 fill-emerald-600/20" />
                        </div>
                        <span className="text-emerald-700 text-sm font-black uppercase tracking-wide">Solo System Plan (SSP)</span>
                        <span className="text-gray-400 text-[10px] font-medium">From ₹99 / 30 days</span>
                      </div>
                    </div>
                    <div className="py-5 px-4 text-center border-l border-gray-200">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-1">
                          <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                        </div>
                        <span className="text-orange-600 text-sm font-black uppercase tracking-wide">Sahayak Plan</span>
                        <span className="text-gray-400 text-[10px] font-medium">From ₹250 / 30 days</span>
                      </div>
                    </div>
                  </div>

                  {/* Feature rows */}
                  {[
                    { feature: "Schedule Tracker", desc: "Daily target scheduling", tracker: true, normal: true },
                    { feature: "Backlog Tracker", desc: "Manage pending tasks", tracker: true, normal: true },
                    { feature: "Syllabus Tracker", desc: "Track syllabus completion", tracker: true, normal: true },
                    { feature: "Revision Tracker", desc: "Spaced repetition system", tracker: true, normal: true },
                    { feature: "Mentorship", desc: "Academic & accountability mentor", tracker: false, normal: true },
                    { feature: "Rating System", desc: "Performance rating & feedback", tracker: false, normal: true },
                    { feature: "Badges", desc: "Achievement recognition", tracker: false, normal: true },
                    { feature: "Leaderboard", desc: "Compete with peers", tracker: false, normal: true },
                    { feature: "Paid Internship Role", desc: "Earn while you learn", tracker: false, normal: true },
                    { feature: "Deep Profile Analysis", desc: "Detailed student profiling", tracker: false, normal: true },
                    { feature: "Psychological Support", desc: "Exam stress counselling", tracker: false, normal: true },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-3 border-b border-gray-100 transition-colors hover:bg-gray-50/80 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                    >
                      <div className="py-4 px-6 flex flex-col justify-center">
                        <span className="text-gray-800 text-sm font-semibold">{row.feature}</span>
                        <span className="text-gray-400 text-xs mt-0.5">{row.desc}</span>
                      </div>
                      <div className="py-4 px-4 flex items-center justify-center border-l border-gray-100">
                        {row.tracker ? (
                          <div className="w-7 h-7 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-emerald-600" strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                            <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="py-4 px-4 flex items-center justify-center border-l border-gray-100">
                        {row.normal ? (
                          <div className="w-7 h-7 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-orange-600" strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                            <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* CTA footer */}
                  <div className="grid grid-cols-3 bg-gray-50 border-t border-gray-200">
                    <div className="py-5 px-6 flex items-center">
                      <span className="text-gray-500 text-sm font-medium">Ready to start?</span>
                    </div>
                    <div className="py-5 px-4 flex items-center justify-center border-l border-gray-200">
                      <button
                        onClick={() => {
                          const el = document.querySelector('[data-value="tracker"]') as HTMLElement;
                          el?.click();
                        }}
                        className="w-full py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md shadow-emerald-900/10 transition-all hover:-translate-y-0.5"
                      >
                        Get Tracker
                      </button>
                    </div>
                    <div className="py-5 px-4 flex items-center justify-center border-l border-gray-200">
                      <button
                        onClick={() => {
                          const el = document.querySelector('[data-value="normal"]') as HTMLElement;
                          el?.click();
                        }}
                        className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition-all hover:-translate-y-0.5"
                      >
                        Get Normal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <RefundPolicy />
      </section>
      <ToastContainer />
    </>
  );
}

export default Pricing;
