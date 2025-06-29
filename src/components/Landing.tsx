import { ReactTyped } from "react-typed";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Target,
  Phone,
  Smartphone,
  Wrench,
  CheckCircle,
  MessageCircle,
  Star,
  ArrowRight,
  // Users,
  // Award,
  // Clock,
  Compass,
  Shield,
  Zap,
  // DollarSign,
  // Flame,
  Gift,
  Heart,
  IndianRupee,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function StudentSahayakLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-red-900/55 backdrop-blur-md border-b border-red-500/50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="p-2 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-all duration-300">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white font-mono tracking-wider"></span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                Services
              </a>
              <a
                href="#pricing"
                className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                Contact
              </a>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
                aria-label="Toggle menu"
              >
                <div
                  className={`transition-transform duration-300 ${
                    isMenuOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </div>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-red-700/50 animate-fade-in-up">
                <div className="flex flex-col space-y-2 pt-4">
                  <a
                    href="#services"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-3 rounded-lg transition-all duration-300 font-medium transform hover:translate-x-2"
                  >
                    Services
                  </a>
                  <a
                    href="#pricing"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-3 rounded-lg transition-all duration-300 font-medium transform hover:translate-x-2"
                  >
                    Pricing
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-3 rounded-lg transition-all duration-300 font-medium transform hover:translate-x-2"
                  >
                    Contact
                  </a>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-orange-500 flexitems-center overflow-hidden">
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
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
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

                {/* Subtitle with Animation */}
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

            {/* Enhanced Key Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white text-sm md:text-base mb-8 max-w-4xl mx-auto">
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
                // {
                //   icon: Zap,
                //   title: "HABIT BUILDING",
                //   subtitle: "Transform your life, one habit at a time",
                //   color: "from-yellow-400 to-orange-500",
                //   delay: "600ms",
                // },
                // {
                //   icon: Award,
                //   title: "PROVEN RESULTS",
                //   subtitle: "Join 500+ successful students",
                //   color: "from-indigo-400 to-purple-600",
                //   delay: "750ms",
                // },
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

            {/* SEPARATE FEATURE DIV - CORRECTED */}
            <div className="flex justify-center mb-16">
              <div className="w-full max-w-md">
                <div
                  className={`group relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 ${
                    isVisible ? "animate-fade-in-up" : ""
                  }`}
                  style={{ animationDelay: "600ms" }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-center mb-4">
                      <div
                        className={`p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Zap className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-3 group-hover:text-yellow-200 transition-colors text-center text-white">
                      HABIT BUILDING
                    </h3>
                    <p className="text-white/80 text-sm group-hover:text-white transition-colors text-center leading-relaxed">
                      Transform your life, one habit at a time
                    </p>
                    {/* Progress Bar */}
                    <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-yellow-400 to-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* Stats Section */}
      {/* <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, number: "500+", label: "Students Helped" },
              { icon: Award, number: "95%", label: "Success Rate" },
              { icon: Clock, number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support system designed to transform your study
              habits and academic performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Discipline & Consistency",
                description:
                  "Maintain discipline and consistency in your study routine with our proven methods and daily accountability.",
                color: "from-red-400 via-pink-500 to-red-600",
              },
              {
                icon: CheckCircle,
                title: "Daily Target Tracking",
                description:
                  "Track your daily goals and progress with our comprehensive monitoring system and detailed analytics.",
                color: "from-orange-400 via-red-500 to-orange-600",
              },
              {
                icon: Phone,
                title: "One-on-One Mentoring",
                description:
                  "Get personalized guidance from mentors to solve discipline-related issues effectively.",
                color: "from-purple-400 via-pink-500 to-purple-600",
              },
              {
                icon: Smartphone,
                title: "Social Media Detox",
                description:
                  "Break free from social media and Instagram addiction with our proven strategies and support system.",
                color: "from-blue-400 via-purple-500 to-blue-600",
              },
              {
                icon: Wrench,
                title: "Habit Building",
                description:
                  "Build any positive habit with our structured approach, continuous support, and proven methodologies.",
                color: "from-green-400 via-blue-500 to-green-600",
              },
              {
                icon: Star,
                title: "Trusted Support",
                description:
                  "We believe in building trust more than profit, with transparent refund policy and genuine care.",
                color: "from-yellow-400 via-orange-500 to-yellow-600",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white"
              >
                <CardHeader className="text-center pb-6 flex justify-center">
                  <div
                    className={`inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${service.color} rounded-full mb-6 group-hover:scale-105 transition-transform duration-300 text-white font-bold text-lg max-w-fit`}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                    {service.title}
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Fee Structure
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Choose the plan that works best for your academic journey
            </p>
          </div>

          {/* Special Offer */}
          <div className="mb-16">
            <div className="text-center mb-12 flex justify-center">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-lg px-6 py-3 rounded-full font-bold shadow-lg animate-pulse flex items-center gap-2">
                Limited Time: First 100 Students Only!
              </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { days: "30", price: "250", popular: false },
                { days: "45", price: "350", popular: true },
                { days: "90", price: "800", popular: false },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    plan.popular
                      ? "border-4 border-yellow-400 scale-105"
                      : "border border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-center py-2 font-bold">
                      RECOMMENDED
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 text-sm font-bold rounded-full">
                    SPECIAL
                  </div>
                  <CardHeader
                    className={`text-center ${plan.popular ? "pt-12" : "pt-8"}`}
                  >
                    <CardTitle className="text-3xl text-gray-900 mb-2">
                      {plan.days} Days
                    </CardTitle>
                    <CardDescription className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent flex items-center justify-center gap-1">
                      <IndianRupee className="h-8 w-8" />
                      {plan.price}
                    </CardDescription>
                    <p className="text-gray-500 mt-2">
                      Perfect for getting started
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

          {/* Normal Plans */}
          <div className="mb-12">
            <div className="text-center mb-12 flex justify-center">
              <Badge className="bg-gray-800 text-white text-lg px-6 py-3 rounded-full font-bold flex items-center gap-2">
                Regular Pricing
              </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { days: "30", price: "275" },
                { days: "45", price: "400" },
                { days: "90", price: "900" },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border border-gray-200"
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-gray-900 mb-2">
                      {plan.days} Days
                    </CardTitle>
                    <CardDescription className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-1">
                      <IndianRupee className="h-6 w-6" />
                      {plan.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-full font-bold transition-all duration-300 transform group-hover:scale-105">
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-8 w-8" />
              <h3 className="text-2xl font-bold">
                100% Refund Policy Available
              </h3>
            </div>
            <p className="text-lg mb-4">
              We believe in building trust more than profit. Your satisfaction
              is our priority.
            </p>
            <div className="flex items-center justify-center gap-2">
              <Gift className="h-6 w-6" />
              <p className="text-xl font-semibold">
                Customized Plans Also Available!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join hundreds of successful students who have transformed their
            study habits and achieved their academic goals with Student Sahayak.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto"
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp: 95885 33265
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto bg-transparent"
            >
              Get Custom Plan
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white font-mono tracking-wider">
                STUDENT SAHAYAK
              </span>
            </div>
            <p className="text-gray-400 mb-6 text-lg">
              Build Habits, Shape Future
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
                © {new Date().getFullYear()} Student Sahayak. All rights
                reserved. Made with
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                for students.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
