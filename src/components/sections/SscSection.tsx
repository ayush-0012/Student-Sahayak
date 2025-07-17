import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  IndianRupee,
  Calendar,
  BookOpen,
  Users,
  Target,
  CheckCircle,
  Mic,
} from "lucide-react"; // Added Mic icon

export default function SSCRevisionSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            {/* <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
              <BookOpen className="h-8 w-8 text-white" />
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              DAILY & WEEKLY REVISION PLANS
            </h2>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
            FOR SSC GD, CHSL, CPO, MTS, DP CONSTABLE & MORE
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Consistent daily and weekly revision to ace your competitive exams.
          </p>
        </div>

        {/* How We Will Revise Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            How We Will Revise
          </h3>
          <div className=" flex justify-center gap-8">
            {[
              // {
              //   step: "Step 1",
              //   title: "Daily Target Setting",
              //   description:
              //     "We help you set achievable daily revision targets based on your syllabus.",
              //   icon: Target,
              //   color: "from-blue-400 to-blue-600",
              // },
              {
                step: "Process",
                title: "Oral Test & GK",
                description:
                  "Mentor will take your oral test of your static and GK daily.",
                icon: Mic, // Using Mic icon for oral test
                color: "from-orange-400 to-red-600", // New color for this step
              },
              // {
              //   step: "Step 3",
              //   title: "Guided Practice",
              //   description:
              //     "Engage in structured practice sessions with our expert guidance.",
              //   icon: CheckCircle,
              //   color: "from-green-400 to-green-600",
              // },
              // {
              //   step: "Step 4",
              //   title: "Doubt Clearing",
              //   description:
              //     "Get your doubts cleared instantly with dedicated mentor support.",
              //   icon: Users,
              //   color: "from-purple-400 to-purple-600",
              // },
            ].map((process, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white group hover:bg-white/20 transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div
                    className={`inline-flex items-center justify-center p-4 bg-gradient-to-r ${process.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <process.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-white/20 text-white mb-2">
                    {process.step}
                  </Badge>
                  <CardTitle className="text-xl font-bold">
                    {process.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Daily Revision Pricing Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Daily Revision Plan Pricing
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { months: "1", price: "1650" },
              { months: "2", price: "3000" },
              { months: "3", price: "4500", popular: true },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  plan.popular
                    ? "border-4 border-yellow-400 scale-105"
                    : "border border-white/20"
                } bg-white/10 backdrop-blur-md`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-center py-2 font-bold">
                    BEST VALUE
                  </div>
                )}
                <CardHeader
                  className={`text-center text-white ${
                    plan.popular ? "pt-12" : "pt-8"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Calendar className="h-8 w-8 text-yellow-400" />
                    <CardTitle className="text-3xl font-bold">
                      {plan.months} Month{plan.months !== "1" && "s"}
                    </CardTitle>
                  </div>
                  <div className="text-4xl font-bold text-yellow-400 flex items-center justify-center gap-1">
                    <IndianRupee className="h-8 w-8" />
                    {plan.price}
                  </div>
                  <p className="text-gray-300 mt-2">35 mins/day (Mon-Sat)</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <Button
                    className={`w-full py-3 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 ${
                      plan.popular
                        ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-yellow-500 hover:to-orange-500"
                        : "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                    }`}
                  >
                    Choose This Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Weekly Revision Pricing Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Weekly Revision Plan (Sundays Only)
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { months: "1", price: "700" },
              { months: "2", price: "1200" },
              { months: "3", price: "1600", popular: true },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  plan.popular
                    ? "border-4 border-yellow-400 scale-105"
                    : "border border-white/20"
                } bg-white/10 backdrop-blur-md`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-center py-2 font-bold">
                    BEST VALUE
                  </div>
                )}
                <CardHeader
                  className={`text-center text-white ${
                    plan.popular ? "pt-12" : "pt-8"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Calendar className="h-8 w-8 text-yellow-400" />
                    <CardTitle className="text-3xl font-bold">
                      {plan.months} Month{plan.months !== "1" && "s"}
                    </CardTitle>
                  </div>
                  <div className="text-4xl font-bold text-yellow-400 flex items-center justify-center gap-1">
                    <IndianRupee className="h-8 w-8" />
                    {plan.price}
                  </div>
                  <p className="text-gray-300 mt-2">
                    1 hour 30 mins/session (Sundays only)
                  </p>
                </CardHeader>
                <CardContent className="pt-4">
                  <Button
                    className={`w-full py-3 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 ${
                      plan.popular
                        ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-yellow-500 hover:to-orange-500"
                        : "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                    }`}
                  >
                    Choose This Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
