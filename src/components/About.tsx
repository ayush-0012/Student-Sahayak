import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        {/* Back Button */}
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

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About Us
        </h1>

        {/* About Us Content */}
        <section className="mb-8 space-y-4">
          <p className="text-gray-700">
            Student Sahayak is a youth-driven initiative dedicated to
            transforming academic journeys and nurturing responsible,
            well-rounded individuals. We strive to go beyond conventional
            learning by fostering discipline, consistency, and effective study
            habits through personalized mentoring, structured guidance, and
            innovative learning programs.
          </p>

          <p className="text-gray-700">
            Our approach is holistic — while we help students excel
            academically, we also focus on building essential life skills,
            strengthening mental health, and cultivating a growth mindset. We
            aim to instill values of integrity, resilience, and social
            responsibility so that our students not only succeed in their
            personal goals but also become active contributors to a better
            society.
          </p>

          <p className="text-gray-700">
            Through workshops, one-on-one mentorship, peer learning programs,
            and community engagement activities, Student Sahayak provides a safe
            and motivating environment where learners can explore their
            potential, overcome challenges, and stay on track in their academic
            and personal growth.
          </p>

          <p className="text-gray-700">
            Our mission is to empower students from all walks of life by making
            quality mentorship accessible, affordable, and impactful. Whether
            it’s guiding them to achieve top academic results, helping them
            manage stress, or inspiring them to give back to their communities,
            we are committed to walking alongside them every step of the way.
          </p>

          <p className="text-gray-700">
            By joining Student Sahayak, you are not just preparing for exams —
            you are building habits, skills, and values that will shape your
            future and help you make a meaningful difference in the world.
          </p>
        </section>
      </div>
    </div>
  );
}
