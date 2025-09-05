import { ReactTyped } from "react-typed";
import { Button } from "@/components/ui/button";
import { Shield, Star, Users, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

type HeroSectionProps = {};

export default function HeroSection({}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-orange-500 flex items-center overflow-hidden pt-16 sm:pt-20 md:pt-0">
      {/* Subtle background accents - responsive positioning */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-white rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-32 sm:top-40 right-10 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 bg-white rounded-full blur-xl sm:blur-2xl"></div>
        <div className="absolute bottom-24 sm:bottom-32 left-1/6 sm:left-1/4 w-24 sm:w-40 h-24 sm:h-40 bg-white rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-16 sm:bottom-20 right-1/4 sm:right-1/3 w-20 sm:w-28 h-20 sm:h-28 bg-white rounded-full blur-xl sm:blur-2xl"></div>
      </div>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20 relative z-10 lg:mt-14">
        {/* Two-column layout - responsive */}
        <div
          className={`grid grid-cols-1 md:grid-cols-1 gap-6 sm:gap-8 lg:gap-12 items-start transition-all duration-1000${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* LEFT: Title + image + paragraph */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] sm:leading-[0.95] tracking-tight">
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

            {/* Savitribai image + description - responsive layout */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-6 mt-6 sm:mt-8">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0">
                <img
                  src="/images/savitribai.jpeg"
                  alt="Savitribai Phule"
                  className="w-full h-full rounded-full border-3 sm:border-4 border-yellow-400 shadow-2xl object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-20 blur-xl animate-pulse"></div>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed text-white/90 text-center sm:text-left">
                Savitri Bai Phule was India's first female teacher and a
                fearless social reformer. She fought for girls' education and
                women's rights, lighting a path for generations to come.
              </p>
            </div>
          </div>

          {/* RIGHT: WhatsApp contact + inclusive highlight - responsive */}
          <div className="flex flex-col items-stretch gap-4 sm:gap-5 md:gap-6 lg:ml-36 mt-6 sm:mt-8 md:mt-0">
            {/* Inclusive highlight (above registration) - responsive */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-xl sm:rounded-2xl blur opacity-60"></div>
              <div className="relative bg-black/40 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-white">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300 shrink-0" />
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    We provide our daily target tracking service for{" "}
                    <span className="text-yellow-300 font-bold">FREE</span> to
                    students who are{" "}
                    <span className="text-red-300 font-bold bg-red-900/30 px-2 py-1 rounded border border-red-400/50 shadow-lg">
                      Transgenders
                    </span>
                    ,{" "}
                    <span className="text-red-300 font-bold bg-red-900/30 px-2 py-1 rounded border border-red-400/50 shadow-lg">
                      Victims of Brutal Assault
                    </span>
                    ,{" "}
                    <span className="text-red-300 font-bold bg-red-900/30 px-2 py-1 rounded border border-red-400/50 shadow-lg">
                      Orphans
                    </span>{" "}
                    and Students from{" "}
                    <span className="text-red-300 font-bold bg-red-900/30 px-2 py-1 rounded border border-red-400/50 shadow-lg">
                      Manual Scavenger Family
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle under highlight on right for balance - responsive */}
        <div className="flex flex-col justify-between items-center text-center md:text-left text-white/90 mt-8 sm:mt-10 lg:mt-10">
          {/* Tagline - responsive text */}
          <p className="items-center mt-4 sm:mt-6 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-yellow-300 tracking-wide mb-3 sm:mb-4 px-2">
            WE LIVE FOR STUDENTS, WE DO IT FOR STUDENTS
          </p>
          <p className="text-lg sm:text-xl md:text-xl font-medium mb-2">
            Transform Your Academic Journey
          </p>
          <div className="mt-2 flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-white/80 flex-wrap px-2">
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-12 sm:w-16 md:w-20"></div>
            <Star
              className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300 animate-spin flex-shrink-0"
              style={{
                animation: "spin 3s linear infinite",
              }}
            />
            <span className="text-xs sm:text-sm md:text-base font-semibold text-center">
              BUILD HABITS, SHAPE FUTURE
            </span>
            <Star
              className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300 animate-spin flex-shrink-0"
              style={{
                animation: "spin 3s linear infinite",
              }}
            />
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-12 sm:w-16 md:w-20"></div>
          </div>
        </div>

        {/* Registration and primary CTAs - responsive layout */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-2">
          {/* Contact on WhatsApp - responsive */}
          <a
            href="https://wa.me/919588533265"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="group w-full sm:w-auto"
          >
            <div className="w-full sm:w-80 bg-green-500 text-white rounded-full shadow-2xl px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 font-bold text-center flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:text-green-500 min-h-[48px]">
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              <span className="text-sm sm:text-base md:text-lg">
                Contact us on WhatsApp
              </span>
              <span className="sr-only">{"WhatsApp number 95885 33265"}</span>
            </div>
          </a>

          <Link to="/register" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto relative border-3 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 text-lg sm:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 bg-transparent group overflow-hidden min-h-[48px]"
            >
              <span className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                Register Now
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        /* Extra small screens */
        @media (max-width: 320px) {
          .text-4xl {
            font-size: 1.875rem !important;
            line-height: 2.25rem !important;
          }
          .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        }

        /* Landscape orientation adjustments */
        @media (max-height: 500px) and (orientation: landscape) {
          .pt-16 {
            padding-top: 0.5rem;
          }
          .py-6 {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
        }

        /* Very small screens - compact layout */
        @media (max-width: 480px) {
          .mt-4 {
            margin-top: 0.75rem;
          }
          .mb-2 {
            margin-bottom: 0.5rem;
          }
        }

        /* Ensure proper touch targets */
        @media (hover: none) {
          button,
          a {
            min-height: 44px;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
