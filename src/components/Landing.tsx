import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Target, Phone, Smartphone, Wrench, CheckCircle, MessageCircle, Star } from "lucide-react"
import {Link} from "react-router"


 function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-red-400 to-orange-400">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">STUDENT SAHAYAK</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="#services" className="text-white hover:text-orange-100 transition-colors">
              Services
            </Link>
            <Link to="#pricing" className="text-white hover:text-orange-100 transition-colors">
              Pricing
            </Link>
            <Link to="#contact" className="text-white hover:text-orange-100 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <BookOpen className="h-24 w-24 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            STUDENT
            <br />
            SAHAYAK
          </h1>
          <div className="space-y-4 text-white text-lg md:text-xl mb-12">
            <p className="font-semibold">MAINTAIN DISCIPLINE & CONSISTENCY IN STUDY</p>
            <p className="font-semibold">DAILY TARGET TRACKING</p>
            <p className="font-semibold">ONE ON ONE CALL WITH MENTOR TO SOLVE YOUR DISCIPLINE RELATED ISSUES</p>
            <p className="font-semibold">HELP IN LEAVING SOCIAL MEDIA/INSTAGRAM ADDICTION</p>
            <p className="font-semibold">BUILD ANY HABIT WITH US</p>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-white mb-8">
            <p>BUILD HABITS,</p>
            <p>SHAPE FUTURE.</p>
          </div>
          <Button
            size="lg"
            className="bg-white text-red-500 hover:bg-orange-50 text-xl px-8 py-4 rounded-full font-bold shadow-lg"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white/10 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <CardHeader>
                <Target className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white">Discipline & Consistency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  Maintain discipline and consistency in your study routine with our proven methods.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white">Daily Target Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  Track your daily goals and progress with our comprehensive monitoring system.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <CardHeader>
                <Phone className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white">One-on-One Mentoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  Get personalized guidance from experienced mentors to solve discipline-related issues.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white">Social Media Detox</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  Break free from social media and Instagram addiction with our proven strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <CardHeader>
                <Wrench className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white">Habit Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  Build any positive habit with our structured approach and continuous support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <CardHeader>
                <Star className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white">Trusted Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  We believe in building trust more than profit, with refund policy available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Fee Structure</h2>
          <p className="text-white text-center text-xl mb-12">Choose the plan that works best for you</p>

          {/* Special Offer */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <Badge className="bg-yellow-400 text-black text-lg px-4 py-2 mb-4">🔥 For the First 100 Students</Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white border-4 border-yellow-400 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 text-sm font-bold">
                  SPECIAL
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-800">30 Days</CardTitle>
                  <CardDescription className="text-3xl font-bold text-red-500">₹250</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-red-500 to-orange-400 hover:from-red-600 hover:to-orange-500">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-4 border-yellow-400 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 text-sm font-bold">
                  SPECIAL
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-800">45 Days</CardTitle>
                  <CardDescription className="text-3xl font-bold text-red-500">₹350</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-red-500 to-orange-400 hover:from-red-600 hover:to-orange-500">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-4 border-yellow-400 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 text-sm font-bold">
                  SPECIAL
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-800">90 Days</CardTitle>
                  <CardDescription className="text-3xl font-bold text-red-500">₹800</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-red-500 to-orange-400 hover:from-red-600 hover:to-orange-500">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Normal Plans */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <Badge className="bg-white text-red-500 text-lg px-4 py-2 mb-4">✅ NORMAL PLAN</Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-800">30 Days</CardTitle>
                  <CardDescription className="text-3xl font-bold text-red-500">₹275</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-red-500 to-orange-400 hover:from-red-600 hover:to-orange-500">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-800">45 Days</CardTitle>
                  <CardDescription className="text-3xl font-bold text-red-500">₹400</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-red-500 to-orange-400 hover:from-red-600 hover:to-orange-500">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-800">90 Days</CardTitle>
                  <CardDescription className="text-3xl font-bold text-red-500">₹900</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-red-500 to-orange-400 hover:from-red-600 hover:to-orange-500">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center text-white">
            <p className="text-lg mb-4">
              <strong>
                REFUND POLICY IS ALSO THERE UNLIKE OTHERS BECAUSE WE BELIEVE IN BUILDING TRUST MORE THAN PROFIT.
              </strong>
            </p>
            <p className="text-xl font-semibold">✨ Customized Plans Also Available!</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white/10 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Study Habits?</h2>
          <p className="text-xl text-white mb-8">
            Get in touch with us today and start your journey towards academic success!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white text-xl px-8 py-4 rounded-full font-bold shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp: 95885 33265
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-red-500 hover:bg-orange-50 text-xl px-8 py-4 rounded-full font-bold shadow-lg border-2 border-white"
            >
              Get Custom Plan
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6 text-white" />
            <span className="text-xl font-bold text-white">STUDENT SAHAYAK</span>
          </div>
          <p className="text-white/80 mb-4">Build Habits, Shape Future</p>
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Student Sahayak. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


export default Landing