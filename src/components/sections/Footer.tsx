import { BookOpen } from "lucide-react";
import { Link } from "react-router";

export default function FooterSection() {
  return (
    <footer className="bg-black py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <span className="text-2xl font-bold text-white font-mono tracking-wider">
              STUDENT SAHAYAK
            </span>
          </div>
          <p className="text-gray-400 mb-6 text-lg">
            Build Habits, Shape Future - Your Partner in UPSC & SSC Exam
            Preparation
          </p>

          {/* New: Policy Links */}
          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6"
            aria-label="Footer navigation"
          >
            <Link to="/privacy-policy" aria-label="Read our Privacy Policy">
              <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm font-medium">
                Privacy Policy
              </span>
            </Link>
            <Link to="/terms" aria-label="Read our Terms and Conditions">
              <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm font-medium">
                Terms & Conditions
              </span>
            </Link>
            <Link to="/refund-policy" aria-label="Read our Refund Policy">
              <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm font-medium">
                Refund Policy
              </span>
            </Link>
            <Link to="/about-us" aria-label="Learn more About Us">
              <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm font-medium">
                About Us
              </span>
            </Link>
          </nav>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
              © {new Date().getFullYear()} Student Sahayak. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
