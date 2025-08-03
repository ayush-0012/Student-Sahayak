"use client";

import { ReactTyped } from "react-typed";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Target,
  Phone,
  Compass,
  Shield,
  Zap,
  Star,
  ArrowRight,
  Users,
  Award,
  Clock,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-orange-500 flex items-center overflow-hidden pt-20 md:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white rounded-full blur-2xl"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-white/10 to-transparent rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div
          className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Enhanced Logo Section */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse"></div>
              <div className="relative p-8 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 shadow-2xl">
                <BookOpen className="h-24 w-24 text-white drop-shadow-lg" />
              </div>
              {/* Floating Elements */}
              <div
                className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Enhanced Title with Better Typography */}
          <div className="mb-12">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight tracking-tight">
                <span className="relative inline-block">
                  <ReactTyped
                    strings={["STUDENT", "STUDENT<br/>SAHAYAK"]}
                    typeSpeed={100}
                    backSpeed={50}
                    backDelay={2000}
                    loop={false}
                    showCursor={true}
                    cursorChar="|"
                    className="inline-block"
                  />
                  {/* Text Shadow Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent opacity-50 blur-sm -z-10">
                    STUDENT SAHAYAK
                  </span>
                </span>
              </h1>

              {/* Savitribai Phule Image and Text - Integrated */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 mb-8 max-w-3xl mx-auto">
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <img
                    src="/images/savitribai.jpeg"
                    alt="Savitribai Phule"
                    className="w-full h-full object-cover rounded-full border-4 border-yellow-400 shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-20 blur-xl"></div>
                </div>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-white/90 text-center md:text-left">
                  Honoring Savitri Bai Phule's courage who fought against all
                  odds to promote education.
                </p>
              </div>

              {/* Prominent Tagline - right after main title */}
              <div className="mt-6 mb-8">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-300 tracking-wide">
                  WE LIVE FOR STUDENTS, WE DO IT FOR STUDENTS
                </p>
              </div>

              {/* Then keep the existing subtitle */}
              <div className="mt-8 mb-12">
                <p
                  className="text-xl md:text-2xl text-white/90 font-medium mb-4 animate-fade-in-up"
                  style={{ animationDelay: "2s" }}
                >
                  Transform Your Academic Journey
                </p>
                <div className="flex items-center justify-center gap-4 text-white/80">
                  <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-20"></div>
                  <Star className="h-6 w-6 text-yellow-400 animate-spin-slow" />
                  <span className="text-lg font-semibold">
                    BUILD HABITS, SHAPE FUTURE
                  </span>
                  <Star className="h-6 w-6 text-yellow-400 animate-spin-slow" />
                  <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-20"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <Button
              size="lg"
              className="relative bg-white text-red-600 hover:bg-gray-100 text-xl px-10 py-5 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3">
                <Zap className="h-6 w-6" />
                Start Your Journey Today
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            {/* New Register Button */}
            <Button
              size="lg"
              // onClick={onRegisterClick} // Use the prop to open the modal
              className="relative border-3 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 text-xl px-10 py-5 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 bg-transparent group overflow-hidden"
              onClick={() => navigate("/register")}
            >
              <span className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3">
                <Users className="h-6 w-6" />
                Register Now
              </span>
            </Button>
          </div>

          {/* Enhanced Key Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-white text-sm md:text-base mb-16 max-w-6xl mx-auto">
            {[
              {
                icon: Compass,
                title: "DISCIPLINE & CONSISTENCY",
                subtitle: "Build unbreakable study routines",
                color: "from-blue-400 to-blue-600",
                delay: "0ms",
              },
              {
                icon: Target,
                title: "DAILY TARGET TRACKING",
                subtitle: "Monitor progress with precision",
                color: "from-green-400 to-green-600",
                delay: "150ms",
              },
              {
                icon: Phone,
                title: "ONE-ON-ONE MENTORING",
                subtitle: "Personalized guidance when you need it",
                color: "from-purple-400 to-purple-600",
                delay: "300ms",
              },
              {
                icon: Shield,
                title: "SOCIAL MEDIA DETOX",
                subtitle: "Break free from digital distractions",
                color: "from-red-400 to-red-600",
                delay: "450ms",
              },
              {
                icon: Zap,
                title: "HABIT BUILDING",
                subtitle: "Transform your life, one habit at a time",
                color: "from-yellow-400 to-orange-500",
                delay: "600ms",
              },
              {
                icon: Award,
                title: "PROVEN RESULTS",
                subtitle: "Join 500+ successful students",
                color: "from-indigo-400 to-purple-600",
                delay: "750ms",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: item.delay }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className={`p-4 bg-gradient-to-r ${item.color} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-3 group-hover:text-yellow-200 transition-colors text-center">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm group-hover:text-white transition-colors text-center leading-relaxed">
                    {item.subtitle}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="relative bg-white text-red-600 hover:bg-gray-100 text-xl px-10 py-5 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3">
                <Zap className="h-6 w-6" />
                Start Your Journey Today
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="relative border-3 border-white text-white hover:bg-white hover:text-red-600 text-xl px-10 py-5 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 bg-transparent group overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3">
                <BookOpen className="h-6 w-6" />
                Learn More
              </span>
            </Button>
          </div>

          {/* Trust Indicators */}
          {/* <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">500+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span className="text-sm font-medium">95% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">100% Refund Policy</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
