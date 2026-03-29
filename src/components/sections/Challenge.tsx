import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Apple,
  Dumbbell,
  Eye,
  Gift,
  IndianRupee,
  Smartphone,
  Star,
  Timer,
  Trophy,
  Video,
} from "lucide-react";

export default function ChallengeSection() {
  return (
    <section
      id="challenge"
      className="bg-gradient-to-br from-orange-900 via-red-900 to-orange-900 pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              CHALLENGE FOR STUDENTS
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We reward your consistency and help you build unbreakable study
            habits
          </p>
        </div>

        {/* Reward System */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                <Gift className="h-8 w-8" />
                Reward & Penalty System
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Trophy className="h-6 w-6" />
                    <h4 className="font-bold text-lg">REWARD</h4>
                  </div>
                  <p className="text-sm">
                    We pay you back as a reward for your consistency and
                    dedication!
                  </p>
                </div>
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Timer className="h-6 w-6" />
                    <h4 className="font-bold text-lg">PENALTY</h4>
                  </div>
                  <p className="text-sm">
                    ₹50 per day will be deducted from your reward if you miss
                    your daily targets
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Rules */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Challenge Rules
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Academic Baseline",
                description:
                  "Goal: 7h focused study daily (Mon-Sat, 12AM-11:30PM). Proof: Upload Forest app screenshot to Sahayak App daily.",
                icon: Timer,
                color: "from-blue-400 to-blue-600",
              },
              {
                title: "Physical Vitality",
                description:
                  "Goal: 4,000 steps in 40 mins (Min 4 days/week). Proof: Record on Google Fit; upload steps + duration screenshot.",
                icon: Dumbbell,
                color: "from-green-400 to-teal-500",
              },
              {
                title: "Clean Fuel Policy",
                description:
                  "Goal: Zero junk. 3 healthy meals daily. Proof: Photo of meal with handwritten date on paper beside the plate.",
                icon: Apple,
                color: "from-yellow-400 to-orange-500",
              },
              {
                title: "Digital Detox",
                description:
                  "Goal: No brain-rot apps Mon-Sat; Sunday <2h. Proof: Daily upload of Phone Screen Time settings.",
                icon: Smartphone,
                color: "from-red-400 to-red-600",
              },
              {
                title: "Sunday Revision",
                description:
                  "Goal: 2-3h mandatory revision. Proof: Mandatory log and one Yes/No accountability response on Sunday nights.",
                icon: Star,
                color: "from-purple-400 to-purple-600",
              },
              {
                title: "Gemini Quiz",
                description:
                  "Goal: 3 days/week (Wed, Sat). Proof: 5s screen recording showing test analysis and final score.",
                icon: Video,
                color: "from-indigo-400 to-blue-500",
              },
            ].map((rule, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white group hover:bg-white/20 transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div
                    className={`inline-flex items-center justify-center p-4 bg-gradient-to-r ${rule.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <rule.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold">
                    {rule.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-sm">{rule.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How We Track You */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            How We Track You
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Forest App",
                description:
                  "Upload screenshot of your 7-hour daily total study time to the Sahayak App before 11:30 PM.",
                icon: Smartphone,
                color: "from-green-400 to-green-600",
              },
              {
                title: "Google Fit",
                description:
                  "Upload activity screenshot showing 4,000 steps completed within 40 minutes for physical vitality.",
                icon: Dumbbell,
                color: "from-blue-400 to-blue-600",
              },
              {
                title: "Meal Authenticity",
                description:
                  "Upload photos of your 3 meals daily with a handwritten date on a paper placed beside your plate.",
                icon: Apple,
                color: "from-orange-400 to-orange-600",
              },
              {
                title: "Screen Time",
                description:
                  "Upload Phone 'Screen Time' settings daily to prove zero usage of entertainment apps (Mon-Sat).",
                icon: Eye,
                color: "from-purple-400 to-purple-600",
              },
              {
                title: "Sunday Log",
                description:
                  "Mandatory 2-3 hours revision log followed by a single Yes/No accountability response on Sunday night.",
                icon: Star,
                color: "from-yellow-400 to-yellow-600",
              },
              {
                title: "Quiz Analysis",
                description:
                  "Upload a 5-second screen recording showing your Gemini quiz analysis and final score sheet.",
                icon: Video,
                color: "from-indigo-400 to-indigo-600",
              },
            ].map((method, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white group hover:bg-white/20 transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div
                    className={`inline-flex items-center justify-center p-4 bg-gradient-to-r ${method.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Challenge Pricing with Reward Trees */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Challenge Program Pricing & Rewards
          </h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 30 Days Plan */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 bg-white/10 backdrop-blur-md">
              <CardHeader className="text-center text-white pt-8">
                <CardTitle className="text-2xl mb-2">
                  30 Days Challenge
                </CardTitle>
                <div className="text-3xl font-bold text-yellow-400 flex items-center justify-center gap-1 mb-4">
                  <IndianRupee className="h-6 w-6" />
                  500
                </div>

                {/* Reward Tree for 30 Days */}
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <h4 className="text-lg font-bold text-green-400 mb-3">
                    Reward Structure
                  </h4>

                  {/* Success Path */}
                  <div className="mb-4 p-3 bg-green-500/20 rounded-lg border border-green-400/30">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Trophy className="h-5 w-5 text-green-400" />
                      <span className="font-bold text-green-400">
                        Perfect Consistency
                      </span>
                    </div>
                    <p className="text-sm text-white/90 mb-2">
                      Study every day (Sundays free)
                    </p>
                    <div className="text-xl font-bold text-green-400 flex items-center justify-center gap-1">
                      <IndianRupee className="h-5 w-5" />
                      300 REWARD
                    </div>
                  </div>

                  {/* Penalty Path */}
                  <div className="mb-4 p-3 bg-red-500/20 rounded-lg border border-red-400/30">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Timer className="h-5 w-5 text-red-400" />
                      <span className="font-bold text-red-400">
                        Miss Days Penalty
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-white/90">Miss 1 day:</span>
                        <span className="text-red-400 font-bold">-₹50</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/90">Miss 2 days:</span>
                        <span className="text-red-400 font-bold">-₹100</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/90">Miss 3 days:</span>
                        <span className="text-red-400 font-bold">-₹150</span>
                      </div>
                      <div className="flex justify-between items-center border-t border-red-400/30 pt-2">
                        <span className="text-white/90 font-bold">
                          Miss 4+ days:
                        </span>
                        <span className="text-red-400 font-bold">
                          NO REWARD
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Tree */}
                  <div className="text-center">
                    <div className="inline-block">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full mx-auto mb-2"></div>
                      <div className="flex justify-center gap-4 mb-2">
                        <div className="w-px h-4 bg-white/30"></div>
                        <div className="w-px h-4 bg-white/30"></div>
                      </div>
                      <div className="flex justify-center gap-8">
                        <div className="text-center">
                          <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-1"></div>
                          <span className="text-xs text-green-400">
                            Success
                          </span>
                        </div>
                        <div className="text-center">
                          <div className="w-3 h-3 bg-red-400 rounded-full mx-auto mb-1"></div>
                          <span className="text-xs text-red-400">Penalty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <Button className="w-full py-3 rounded-full font-bold text-sm transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Join 30-Day Challenge
                </Button>
              </CardContent>
            </Card>

            {/* 45 Days Plan */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-4 border-yellow-400 scale-105 bg-white/10 backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-center py-2 font-bold text-sm">
                RECOMMENDED
              </div>
              <CardHeader className="text-center text-white pt-12">
                <CardTitle className="text-2xl mb-2">
                  45 Days Challenge
                </CardTitle>
                <div className="text-3xl font-bold text-yellow-400 flex items-center justify-center gap-1 mb-4">
                  <IndianRupee className="h-6 w-6" />
                  900
                </div>

                {/* Reward Tree for 45 Days */}
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <h4 className="text-lg font-bold text-green-400 mb-3">
                    Reward Structure
                  </h4>

                  {/* Success Path */}
                  <div className="mb-4 p-3 bg-green-500/20 rounded-lg border border-green-400/30">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Trophy className="h-5 w-5 text-green-400" />
                      <span className="font-bold text-green-400">
                        Perfect Consistency
                      </span>
                    </div>
                    <p className="text-sm text-white/90 mb-2">
                      Study every day (Sundays free)
                    </p>
                    <div className="text-xl font-bold text-green-400 flex items-center justify-center gap-1">
                      <IndianRupee className="h-5 w-5" />
                      500 REWARD
                    </div>
                  </div>

                  {/* Penalty Path */}
                  <div className="mb-4 p-3 bg-red-500/20 rounded-lg border border-red-400/30">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Timer className="h-5 w-5 text-red-400" />
                      <span className="font-bold text-red-400">
                        Miss Days Penalty
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-white/90">Miss 1 day:</span>
                        <span className="text-red-400 font-bold">-₹50</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/90">Miss 2 days:</span>
                        <span className="text-red-400 font-bold">-₹100</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/90">Miss 3 days:</span>
                        <span className="text-red-400 font-bold">-₹150</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/90">Miss 4 days:</span>
                        <span className="text-red-400 font-bold">-₹200</span>
                      </div>
                      <div className="flex justify-between items-center border-t border-red-400/30 pt-2">
                        <span className="text-white/90 font-bold">
                          Miss 5+ days:
                        </span>
                        <span className="text-red-400 font-bold">
                          NO REWARD
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Tree */}
                  <div className="text-center">
                    <div className="inline-block">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full mx-auto mb-2"></div>
                      <div className="flex justify-center gap-4 mb-2">
                        <div className="w-px h-4 bg-white/30"></div>
                        <div className="w-px h-4 bg-white/30"></div>
                      </div>
                      <div className="flex justify-center gap-8">
                        <div className="text-center">
                          <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-1"></div>
                          <span className="text-xs text-green-400">
                            Success
                          </span>
                        </div>
                        <div className="text-center">
                          <div className="w-3 h-3 bg-red-400 rounded-full mx-auto mb-1"></div>
                          <span className="text-xs text-red-400">Penalty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <Button className="w-full py-3 rounded-full font-bold text-sm transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-yellow-500 hover:to-orange-500">
                  Join 45-Day Challenge
                </Button>
              </CardContent>
            </Card>

            {/* 90 Days Plan */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 bg-white/10 backdrop-blur-md">
              <CardHeader className="text-center text-white pt-8">
                <CardTitle className="text-2xl mb-2">
                  90 Days Challenge
                </CardTitle>
                <div className="text-3xl font-bold text-yellow-400 flex items-center justify-center gap-1 mb-4">
                  ₹ 2000
                </div>

                {/* Reward Tree for 90 Days */}
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <h4 className="text-lg font-bold text-green-400 mb-3">
                    Reward Structure
                  </h4>

                  {/* Success Path */}
                  <div className="mb-4 p-3 bg-green-500/20 rounded-lg border border-green-400/30">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Trophy className="h-5 w-5 text-green-400" />
                      <span className="font-bold text-green-400">
                        Perfect Consistency
                      </span>
                    </div>
                    <p className="text-sm text-white/90 mb-2">
                      Study every day (Sundays free)
                    </p>
                    <div className="text-xl font-bold text-green-400 flex items-center justify-center gap-1">
                      ₹ 1400 REWARD
                    </div>
                  </div>

                  {/* Penalty Path */}
                  <div className="mb-4 p-3 bg-red-500/20 rounded-lg border border-red-400/30">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Timer className="h-5 w-5 text-red-400" />
                      <span className="font-bold text-red-400">
                        Miss Days Penalty
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-white/90">Miss 1-6 days:</span>
                        <span className="text-red-400 font-bold">-₹50/day</span>
                      </div>
                      <div className="flex justify-between items-center border-t border-red-400/30 pt-2">
                        <span className="text-white/90 font-bold">
                          Miss 7+ days:
                        </span>
                        <span className="text-red-400 font-bold">
                          NO REWARD
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Tree */}
                  <div className="text-center">
                    <div className="inline-block">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full mx-auto mb-2"></div>
                      <div className="flex justify-center gap-4 mb-2">
                        <div className="w-px h-4 bg-white/30"></div>
                        <div className="w-px h-4 bg-white/30"></div>
                      </div>
                      <div className="flex justify-center gap-8">
                        <div className="text-center">
                          <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-1"></div>
                          <span className="text-xs text-green-400">
                            Success
                          </span>
                        </div>
                        <div className="text-center">
                          <div className="w-3 h-3 bg-red-400 rounded-full mx-auto mb-1"></div>
                          <span className="text-xs text-red-400">Penalty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <Button className="w-full py-3 rounded-full font-bold text-sm transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Join 90-Day Challenge
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto pb-10">
            <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                  <Gift className="h-8 w-8" />
                  Challenge Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-bold text-lg mb-2 flex items-center justify-center gap-2">
                      <Trophy className="h-5 w-5" />
                      Success Rewards
                    </h4>
                    <div className="space-y-1 text-sm">
                      <p>30 Days: ₹300 back</p>
                      <p>45 Days: ₹500 back</p>
                      <p>90 Days: ₹1400 back</p>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-bold text-lg mb-2 flex items-center justify-center gap-2">
                      <Timer className="h-5 w-5" />
                      Daily Penalty
                    </h4>
                    <p className="text-sm">
                      ₹50 deducted for each missed day (except Sundays)
                    </p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-bold text-lg mb-2 flex items-center justify-center gap-2">
                      <Star className="h-5 w-5" />
                      Failure Limit
                    </h4>
                    <div className="space-y-1 text-sm">
                      <p>30 Days: 4+ missed days</p>
                      <p>45 Days: 5+ missed days</p>
                      <p>90 Days: 7+ missed days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
