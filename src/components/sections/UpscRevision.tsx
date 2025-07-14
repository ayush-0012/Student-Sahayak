import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  IndianRupee,
  Calendar,
  BookOpen,
  Users,
  Clock,
  Star,
  Target,
} from "lucide-react";

export default function UpscRevision() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Tagline Section - At Top */}
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            {/* <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="h-8 w-8 text-red-500" />
              <p className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text">
                "WE LIVE FOR STUDENTS, WE DO IT FOR STUDENTS"
              </p>
              <Heart className="h-8 w-8 text-red-500" />
            </div> */}
            <p className="text-lg text-gray-300">
              Every plan, every service, every moment - dedicated to your
              success
            </p>
          </div>
        </div>

        {/* Main Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              {/* <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                <BookOpen className="h-8 w-8 text-white" />
              </div> */}
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                FOR UPSC STUDENTS
              </h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
              SPECIAL DAILY REVISION PLAN
            </h3>

            {/* Limited Slots Badge */}
            <div className="flex justify-center mb-8">
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xl px-8 py-4 rounded-full font-bold shadow-lg animate-pulse flex items-center gap-3">
                <Users className="h-6 w-6" />
                SLOTS AVAILABLE FOR ONLY FIRST 20 STUDENTS!
              </Badge>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* 3 Months */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 bg-white/10 backdrop-blur-md">
              <CardHeader className="text-center text-white pt-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-2xl font-bold">3 Months</CardTitle>
                </div>
                <div className="text-4xl font-bold text-yellow-400 flex items-center justify-center gap-1 mb-4">
                  <IndianRupee className="h-8 w-8" />
                  7,000
                </div>
                <p className="text-gray-300">Perfect for focused preparation</p>
              </CardHeader>
              <CardContent className="pt-4">
                <Button className="w-full py-3 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  Choose 3 Months
                </Button>
              </CardContent>
            </Card>

            {/* 6 Months - Popular */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-4 border-yellow-400 scale-105 bg-white/10 backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-center py-2 font-bold">
                MOST POPULAR
              </div>
              <CardHeader className="text-center text-white pt-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-2xl font-bold">6 Months</CardTitle>
                </div>
                <div className="text-4xl font-bold text-yellow-400 flex items-center justify-center gap-1 mb-4">
                  <IndianRupee className="h-8 w-8" />
                  13,500
                </div>
                <p className="text-gray-300">Comprehensive preparation</p>
              </CardHeader>
              <CardContent className="pt-4">
                <Button className="w-full py-3 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-yellow-500 hover:to-orange-500">
                  Choose 6 Months
                </Button>
              </CardContent>
            </Card>

            {/* 12 Months */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 bg-white/10 backdrop-blur-md">
              <CardHeader className="text-center text-white pt-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-2xl font-bold">
                    12 Months
                  </CardTitle>
                </div>
                <div className="text-4xl font-bold text-yellow-400 flex items-center justify-center gap-1 mb-4">
                  <IndianRupee className="h-8 w-8" />
                  24,000
                </div>
                <p className="text-gray-300">Complete UPSC journey</p>
              </CardHeader>
              <CardContent className="pt-4">
                <Button className="w-full py-3 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  Choose 12 Months
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Important Note */}
          <div className="text-center mb-12">
            <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Clock className="h-6 w-6" />
                  <h4 className="text-xl font-bold">Important Note</h4>
                </div>
                <p className="text-lg font-semibold">
                  Sundays and National Holidays are OFF
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-white text-center p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-blue-500/30 rounded-full">
                  <Target className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-400 mb-2">
                UPSC Focused
              </h4>
              <p className="text-gray-300">
                Specially designed for UPSC aspirants
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-white text-center p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-purple-500/30 rounded-full">
                  <BookOpen className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-2">
                Daily Revision
              </h4>
              <p className="text-gray-300">
                Consistent daily revision sessions
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 text-white text-center p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-yellow-500/30 rounded-full">
                  <Star className="h-8 w-8 text-yellow-400" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-yellow-400 mb-2">
                Limited Seats
              </h4>
              <p className="text-gray-300">
                Only 20 students for personalized attention
              </p>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Secure Your Spot Today!
              </h3>
              <p className="text-lg mb-6">
                Don't miss this opportunity - only 20 seats available for this
                exclusive UPSC revision program
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <Users className="h-6 w-6" />
                  Book Your Slot Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
