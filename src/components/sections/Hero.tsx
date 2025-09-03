import { ReactTyped } from "react-typed";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Zap,
  Star,
  ArrowRight,
  Users,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

type HeroSectionProps = {};

export default function HeroSection({}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-orange-500 flex items-center overflow-hidden pt-20 md:pt-0">
      {/* Subtle background accents */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 py-20 relative z-10 mt-14">
        {/* Logo */}
        {/* <div
          className={`flex justify-center mb-10 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse"></div>
            <div className="relative p-8 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 shadow-2xl">
              <BookOpen className="h-24 w-24 text-white drop-shadow-lg" />
            </div>
          </div>
        </div> */}

        {/* Two-column layout */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start transition-all duration-1000${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 "
          }`}
        >
          {/* LEFT: Title + image + paragraph */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight">
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
                <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent opacity-50 blur-sm -z-10">
                  STUDENT SAHAYAK
                </span>
              </span>
            </h1>

            {/* Savitribai image + description */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 md:gap-6 mt-8">
              <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
                <img
                  src="/images/savitribai.jpeg"
                  alt="Savitribai Phule"
                  className="rounded-full border-4 border-yellow-400 shadow-2xl object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-20 blur-xl animate-pulse"></div>
              </div>
              <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-white/90">
                Savitri Bai Phule was India’s first female teacher and a
                fearless social reformer. She fought for girls’ education and
                women’s rights, lighting a path for generations to come.
              </p>
            </div>
          </div>

          {/* RIGHT: WhatsApp contact + inclusive highlight */}
          <div className="flex flex-col items-stretch gap-5 md:gap-6 mt-20 ml-36">
            {/* Contact on WhatsApp */}
            <a
              href="https://wa.me/919588533265"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="group"
            >
              <div className="w-80 bg-green-500 text-white rounded-2xl shadow-2xl px-5 py-4 sm:px-6 sm:py-5 font-bold text-center flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:text-green-500">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-base sm:text-lg">
                  Contact us on WhatsApp
                </span>
                <span className="sr-only">{"WhatsApp number 95885 33265"}</span>
              </div>
            </a>

            {/* Inclusive highlight (above registration) */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-2xl blur opacity-60"></div>
              <div className="relative bg-black/40 border border-white/20 rounded-2xl p-4 sm:p-5 text-white">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300 shrink-0" />
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    we provide our daily target tracking service for free to
                    students who are transgenders, victims of brutal assault,
                    orphans and Student from manual scavenger family
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle under highlight on right for balance */}
        <div className="flex flex-col justify-between items-center text-center md:text-left text-white/90 mt-20">
          {/* Tagline */}
          <p className="items-center mt-6 text-xl md:text-2xl lg:text-3xl font-bold text-yellow-300 tracking-wide mb-4">
            WE LIVE FOR STUDENTS, WE DO IT FOR STUDENTS
          </p>
          <p className="text-lg md:text-xl font-medium">
            Transform Your Academic Journey
          </p>
          <div className="mt-2 flex items-center justify-center md:justify-start gap-3 text-white/80">
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-16 md:w-20"></div>
            <Star className="h-5 w-5 text-yellow-300 animate-spin-slow" />
            <span className="text-sm md:text-base font-semibold">
              BUILD HABITS, SHAPE FUTURE
            </span>
            <Star className="h-5 w-5 text-yellow-300 animate-spin-slow" />
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-16 md:w-20"></div>
          </div>
        </div>

        {/* Registration and primary CTAs (placed below columns so the highlight is above) */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
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

          <Link to="/register">
            <Button
              size="lg"
              className="relative border-3 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 text-xl px-10 py-5 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 bg-transparent group overflow-hidden"
            >
              <span className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3">
                <Users className="h-6 w-6" />
                Register Now
              </span>
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        {/* <div className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70">
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
    </section>
  );
}
