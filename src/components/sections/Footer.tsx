import { BookOpen } from "lucide-react";
import { Link } from "react-router";

export default function FooterSection() {
  return (
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

          {/* New: Policy Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            <Link to="/privacy-policy">
              <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm font-medium">
                Privacy Policy
              </span>
            </Link>
            <Link to="/terms">
              <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm font-medium">
                Terms & Conditions
              </span>
            </Link>
            <Link to="/refund-policy">
              <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm font-medium">
                Refund Policy
              </span>
            </Link>
            <Link to="/about-us">
              <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm font-medium">
                About Us
              </span>
            </Link>
          </div>

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
