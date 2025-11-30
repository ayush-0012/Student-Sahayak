import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, IndianRupee, Users } from "lucide-react";

export default function PlansOverviewSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Daily Plans Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              {/* <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                <BookOpen className="h-8 w-8 text-white" />
              </div> */}
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                SPECIAL DAILY REVISION PLAN
              </h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
              FOR UPSC STUDENTS
            </h3>

            {/* Limited Slots Badge */}
            <div className="flex justify-center mb-8">
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-base sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold shadow-lg animate-pulse flex items-center gap-2 sm:gap-3 max-w-full">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                <span className="text-center leading-tight">
                  SLOTS FOR ONLY FIRST 20 STUDENTS!
                </span>
              </Badge>
            </div>
          </div>

          {/* Daily Pricing Cards */}
          <div className="grid  md:grid-cols-2    gap-8 mb-12">
            {/* 3 Months */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 bg-white/10 backdrop-blur-md">
              <CardHeader className="text-center text-white pt-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-2xl font-bold">3 Months</CardTitle>
                </div>
                <div className="text-4xl font-bold text-yellow-400 flex items-center justify-center gap-1">
                  <IndianRupee className="h-8 w-8" />
                  7,000
                </div>
                <p className="text-gray-400 line-through text-lg mt-1 flex items-center justify-center">
                  <IndianRupee className="h-4 w-4" />
                  8,000
                </p>
                <p className="text-gray-300 mt-2">
                  Perfect for focused preparation
                </p>
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
                <div className="text-4xl font-bold text-yellow-400 flex items-center justify-center gap-1">
                  <IndianRupee className="h-8 w-8" />
                  13,500
                </div>
                <p className="text-gray-400 line-through text-lg mt-1 flex items-center justify-center">
                  <IndianRupee className="h-4 w-4" />
                  14,500
                </p>
                <p className="text-gray-300 mt-2">Comprehensive preparation</p>
              </CardHeader>
              <CardContent className="pt-4">
                <Button className="w-full py-3 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-yellow-500 hover:to-orange-500">
                  Choose 6 Months
                </Button>
              </CardContent>
            </Card>

            {/* 9 Months  */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 bg-white/10 backdrop-blur-md">
              <CardHeader className="text-center text-white pt-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-2xl font-bold">9 Months</CardTitle>
                </div>
                <div className="text-4xl font-bold text-yellow-400 flex items-center justify-center gap-1">
                  <IndianRupee className="h-8 w-8" />
                  20,000
                </div>
                <p className="text-gray-400 line-through text-lg mt-1 flex items-center justify-center">
                  <IndianRupee className="h-4 w-4" />
                  21,000
                </p>
                <p className="text-gray-300 mt-2">Complete UPSC journey</p>
              </CardHeader>
              <CardContent className="pt-4">
                <Button className="w-full py-3 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  Choose 9 Months
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
                <div className="text-4xl font-bold text-yellow-400 flex items-center justify-center gap-1">
                  <IndianRupee className="h-8 w-8" />
                  24,000
                </div>
                <p className="text-gray-400 line-through text-lg mt-1 flex items-center justify-center">
                  <IndianRupee className="h-4 w-4" />
                  25,000
                </p>
                <p className="text-gray-300 mt-2">Complete UPSC journey</p>
              </CardHeader>
              <CardContent className="pt-4">
                <Button className="w-full py-3 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  Choose 12 Months
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Important Note */}
          <div className="text-center">
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
        </div>

        {/* Weekend Revision Section - Separate */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                WEEKEND REVISION PLAN
              </h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-6">
              FOR UPSC STUDENTS
            </h3>

            {/* Weekend Features */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-lg px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2">
                <Clock className="h-5 w-5" />
                2.5 Hours Session
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Only on Sundays
              </Badge>
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg px-6 py-3 rounded-full font-bold shadow-lg animate-pulse flex items-center gap-2">
                <Users className="h-5 w-5" />
                Only 20 Students
              </Badge>
            </div>
          </div>

          {/* Weekend Pricing Cards */}
          <div className="grid  md:grid-cols-2  gap-6 mb-12">
            {/* 3 Months Weekend */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-green-400 bg-white/10 backdrop-blur-md">
              <CardHeader className="text-center text-white pt-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="h-6 w-6 text-green-400" />
                  <CardTitle className="text-xl font-bold">3 Months</CardTitle>
                </div>
                <div className="text-3xl font-bold text-green-400 flex items-center justify-center gap-1">
                  <IndianRupee className="h-6 w-6" />
                  3,300
                </div>
                <p className="text-gray-400 line-through text-base mt-1 flex items-center justify-center">
                  <IndianRupee className="h-4 w-4" />
                  4,100
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  Weekend focused prep
                </p>
              </CardHeader>
              <CardContent className="pt-4">
                <Button className="w-full py-3 rounded-full font-bold text-sm transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                  Choose 3 Months
                </Button>
              </CardContent>
            </Card>

            {/* 6 Months Weekend */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-green-400 bg-white/10 backdrop-blur-md">
              <CardHeader className="text-center text-white pt-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="h-6 w-6 text-green-400" />
                  <CardTitle className="text-xl font-bold">6 Months</CardTitle>
                </div>
                <div className="text-3xl font-bold text-green-400 flex items-center justify-center gap-1">
                  <IndianRupee className="h-6 w-6" />
                  7,000
                </div>
                <p className="text-gray-400 line-through text-base mt-1 flex items-center justify-center">
                  <IndianRupee className="h-4 w-4" />
                  7,800
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  Extended weekend prep
                </p>
              </CardHeader>
              <CardContent className="pt-4">
                <Button className="w-full py-3 rounded-full font-bold text-sm transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                  Choose 6 Months
                </Button>
              </CardContent>
            </Card>

            {/* 9 Months Weekend - Popular */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-4 border-yellow-400 scale-105 bg-white/10 backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-center py-2 font-bold text-sm">
                RECOMMENDED
              </div>
              <CardHeader className="text-center text-white pt-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="h-6 w-6 text-green-400" />
                  <CardTitle className="text-xl font-bold">9 Months</CardTitle>
                </div>
                <div className="text-3xl font-bold text-green-400 flex items-center justify-center gap-1">
                  <IndianRupee className="h-6 w-6" />
                  9,400
                </div>
                <p className="text-gray-400 line-through text-base mt-1 flex items-center justify-center">
                  <IndianRupee className="h-4 w-4" />
                  10,200
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  Comprehensive weekend prep
                </p>
              </CardHeader>
              <CardContent className="pt-4">
                <Button className="w-full py-3 rounded-full font-bold text-sm transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-yellow-500 hover:to-orange-500">
                  Choose 9 Months
                </Button>
              </CardContent>
            </Card>

            {/* 12 Months Weekend */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-green-400 bg-white/10 backdrop-blur-md">
              <CardHeader className="text-center text-white pt-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="h-6 w-6 text-green-400" />
                  <CardTitle className="text-xl font-bold">12 Months</CardTitle>
                </div>
                <div className="text-3xl font-bold text-green-400 flex items-center justify-center gap-1">
                  <IndianRupee className="h-6 w-6" />
                  13,000
                </div>
                <p className="text-gray-400 line-through text-base mt-1 flex items-center justify-center">
                  <IndianRupee className="h-4 w-4" />
                  13,800
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  Complete weekend journey
                </p>
              </CardHeader>
              <CardContent className="pt-4">
                <Button className="w-full py-3 rounded-full font-bold text-sm transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                  Choose 12 Months
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Weekend Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-400/30 text-white text-center p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-green-500/30 rounded-full">
                  <Clock className="h-8 w-8 text-green-400" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-green-400 mb-2">
                2.5 Hour Sessions
              </h4>
              <p className="text-gray-300">
                Intensive weekend revision sessions
              </p>
            </Card>

            {/* <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-white text-center p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-blue-500/30 rounded-full">
                  <Target className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-400 mb-2">
                4 Tests + Doubt
              </h4>
              <p className="text-gray-300">
                Includes tests and 1 hour doubt clearing
              </p>
            </Card> */}

            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-white text-center p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-purple-500/30 rounded-full">
                  <Calendar className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-2">
                Sunday Only
              </h4>
              <p className="text-gray-300">Perfect for working professionals</p>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join Weekend Revision Program!
              </h3>
              <p className="text-lg mb-6">
                Perfect for working professionals and students who want
                intensive weekend preparation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <Users className="h-6 w-6" />
                  Book Weekend Slot
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
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
