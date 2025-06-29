
import { ReactTyped } from "react-typed"
import { Button } from "./ui/button.tsx"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx"
import { Badge } from "./ui/badge.tsx"
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
  Users,
  Award,
  Clock,
  Compass,
  Shield,
  Zap,
  DollarSign,
  Gift,
  Heart,
  IndianRupee,
} from "lucide-react"
import {Link} from "react-router"
import { useEffect, useState } from "react"

export default function StudentSahayakLanding() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-all duration-300">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white font-mono tracking-wider">STUDENT SAHAYAK</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                to="#services"
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
              >
                Services
              </Link>
              <Link
                to="#pricing"
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
              >
                Pricing
              </Link>
              <Link
                to="#contact"
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-orange-500 flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div
            className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-white/20 rounded-full backdrop-blur-sm animate-pulse">
                <BookOpen className="h-20 w-20 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight min-h-[200px] flex flex-col justify-center">
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
            </h1>

            <div className="grid md:grid-cols-2 gap-6 text-white text-sm md:text-base mb-12 max-w-5xl mx-auto">
              {[
                {
                  icon: Compass,
                  title: "MAINTAIN DISCIPLINE & CONSISTENCY",
                  subtitle: "Build unbreakable study routines",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  icon: Target,
                  title: "DAILY TARGET TRACKING",
                  subtitle: "Monitor progress with precision",
                  color: "from-green-400 to-green-600",
                },
                {
                  icon: Phone,
                  title: "ONE ON ONE CALL WITH MENTOR",
                  subtitle: "Personalized guidance when you need it",
                  color: "from-purple-400 to-purple-600",
                },
                {
                  icon: Shield,
                  title: "SOCIAL MEDIA ADDICTION RECOVERY",
                  subtitle: "Break free from digital distractions",
                  color: "from-red-400 to-red-600",
                },
                {
                  icon: Zap,
                  title: "BUILD ANY HABIT WITH US",
                  subtitle: "Transform your life, one habit at a time",
                  color: "from-yellow-400 to-orange-500",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${isVisible ? "animate-fade-in-up" : ""}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 bg-gradient-to-r ${item.color} rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-200 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm group-hover:text-white transition-colors">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-3xl md:text-5xl font-bold text-white mb-12 animate-bounce-slow">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Zap className="h-8 w-8 text-yellow-400 animate-spin-slow" />
                <span>BUILD HABITS,</span>
                <Zap className="h-8 w-8 text-yellow-400 animate-spin-slow" />
              </div>
              <p>SHAPE FUTURE.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-16">
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
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support system designed to transform your study habits and academic performance
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
                  "Get personalized guidance from experienced mentors to solve discipline-related issues effectively.",
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
                  <p className="text-gray-600 leading-relaxed text-center">{service.description}</p>
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
              <DollarSign className="h-8 w-8 text-gray-900" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Fee Structure</h2>
            </div>
            <p className="text-xl text-gray-600">Choose the plan that works best for your academic journey</p>
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
                  className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${plan.popular ? "border-4 border-yellow-400 scale-105" : "border border-gray-200"}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-center py-2 font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 text-sm font-bold rounded-full">
                    SPECIAL
                  </div>
                  <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-8"}`}>
                    <CardTitle className="text-3xl text-gray-900 mb-2">{plan.days} Days</CardTitle>
                    <CardDescription className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent flex items-center justify-center gap-1">
                      <IndianRupee className="h-8 w-8" />
                      {plan.price}
                    </CardDescription>
                    <p className="text-gray-500 mt-2">Perfect for getting started</p>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Button
                      className={`w-full py-3 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 ${plan.popular ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-yellow-500 hover:to-orange-500" : "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"}`}
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
                    <CardTitle className="text-2xl text-gray-900 mb-2">{plan.days} Days</CardTitle>
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
              <h3 className="text-2xl font-bold">100% Refund Policy Available</h3>
            </div>
            <p className="text-lg mb-4">
              We believe in building trust more than profit. Your satisfaction is our priority.
            </p>
            <div className="flex items-center justify-center gap-2">
              <Gift className="h-6 w-6" />
              <p className="text-xl font-semibold">Customized Plans Also Available!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join hundreds of successful students who have transformed their study habits and achieved their academic
            goals with Student Sahayak.
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
              <span className="text-2xl font-bold text-white font-mono tracking-wider">STUDENT SAHAYAK</span>
            </div>
            <p className="text-gray-400 mb-6 text-lg">Build Habits, Shape Future</p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
                © {new Date().getFullYear()} Student Sahayak. All rights reserved. Made with
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                for students.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
