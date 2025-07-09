import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import RefundPolicy from "./sections/RefundPolicy";
import WhatsappContact from "./sections/WhatsappContact";
import Challenge from "./sections/Challenge";
import Revision from "./sections/Revision";

export default function StudentSahayakLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                href="#challenge"
                className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                Challenge
              </a>
              <a
                href="#revision"
                className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                Revision
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
      <Hero />

      {/* Stats Section (we can use this in future)*/}
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
      <Services />
      {/* Whatsapp Contact Section */}
      <WhatsappContact />
      {/* Pricing Section */}
      <Pricing />
      {/* Challenge Section */}
      <Challenge />
      {/* Revison Section  */}
      <Revision />
      {/* Our Purpose Section */}
      <Mission />
      {/* Refund Policy section */}
      <RefundPolicy />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
