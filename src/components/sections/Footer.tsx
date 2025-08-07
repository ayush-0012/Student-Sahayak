import { BookOpen, Heart } from "lucide-react";
// import Link from "next/link"; // Import Link

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

          {/* New: Terms and Conditions Link */}
          <div className="mb-6">
            <a href="/terms">
              <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm font-medium">
                Terms and Conditions
              </span>
            </a>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
              © {new Date().getFullYear()} Student Sahayak. All rights reserved.
              Made with
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              for students.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
