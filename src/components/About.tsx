import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        <div className="mb-8">
          <Link to="/">
            <Button
              variant="outline"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About Us
        </h1>

        <section className="mb-8">
          <p className="text-gray-700 mb-4">
            {/* TODO: Add your About Us content here */}
            Student Sahayak is dedicated to transforming academic journeys and
            building a better society. We focus on fostering discipline,
            consistency, and effective learning habits through personalized
            mentoring and innovative programs. Our mission extends beyond
            academic success to character building, mental health support, and
            promoting responsible citizenship.
          </p>
          <p className="text-gray-700">
            We believe in empowering students to achieve their full potential
            while contributing positively to their communities. Join us to build
            habits that shape your future and make a difference.
          </p>
        </section>
      </div>
    </div>
  );
}
