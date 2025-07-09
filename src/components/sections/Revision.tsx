import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  BookMarked,
  MessageCircle,
  Video,
  Shield,
  IndianRupee,
  Users,
} from "lucide-react";

export default function RevisionSection() {
  return (
    <section
      id="revision"
      className="bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              ACTIVE RECALL REVISION
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Master the most effective learning technique with our guided active
            recall sessions
          </p>
          <div className="flex justify-center">
            <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg px-6 py-3 rounded-full font-bold shadow-lg animate-pulse flex items-center gap-2">
              <Users className="h-5 w-5" />
              For Limited Students Only!
            </Badge>
          </div>
        </div>

        {/* What is Active Recall */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                <BookMarked className="h-8 w-8" />
                What is Active Recall?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg leading-relaxed mb-6">
                Active recall is a learning technique where you actively
                stimulate memory during the learning process. Instead of
                passively reading notes, you test yourself on the material,
                forcing your brain to retrieve information from memory.
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="font-semibold text-yellow-200">
                  "The most effective way to learn is to close your book and
                  test yourself on what you just studied."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Active Recall Session Process
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 1",
                title: "Share Your Topics",
                description:
                  "Send us the topics and sub-topics you studied that day via WhatsApp",
                icon: MessageCircle,
                color: "from-green-400 to-green-600",
              },
              {
                step: "Step 2",
                title: "Schedule Session",
                description:
                  "Join the scheduled call session with your dedicated mentor",
                icon: Video,
                color: "from-blue-400 to-blue-600",
              },
              {
                step: "Step 3",
                title: "Oral Test",
                description:
                  "Mentor conducts oral test using active recall techniques to strengthen memory",
                icon: Brain,
                color: "from-purple-400 to-purple-600",
              },
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

        {/* Revision Pricing */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Revision Program Pricing
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                days: "15",
                price: "500",
                sessions: "45 mins/day",
                popular: false,
              },
              {
                days: "25",
                price: "750",
                sessions: "45 mins/day",
                popular: true,
              },
              {
                days: "60",
                price: "1500",
                sessions: "45 mins/day",
                popular: false,
              },
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
                    MOST POPULAR
                  </div>
                )}
                <CardHeader
                  className={`text-center text-white ${
                    plan.popular ? "pt-12" : "pt-8"
                  }`}
                >
                  <CardTitle className="text-3xl mb-2">
                    {plan.days} Days
                  </CardTitle>
                  <div className="text-4xl font-bold text-yellow-400 flex items-center justify-center gap-1">
                    <IndianRupee className="h-8 w-8" />
                    {plan.price}
                  </div>
                  <p className="text-gray-300 mt-2">{plan.sessions}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <Button
                    className={`w-full py-3 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 ${
                      plan.popular
                        ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-yellow-500 hover:to-orange-500"
                        : "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    }`}
                  >
                    Start Revision Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Revision Refund Policy */}
          <div className="text-center bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8 rounded-2xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-8 w-8" />
              <h3 className="text-2xl font-bold">90% Refund Policy</h3>
            </div>
            <p className="text-lg">
              After 2 days, if you don't like this revision program, we'll
              refund you 90% of your money.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
