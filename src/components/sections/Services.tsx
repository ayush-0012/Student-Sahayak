import {
  Target,
  Phone,
  Smartphone,
  Wrench,
  CheckCircle,
  Star,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

function Services() {
  return (
    <>
      <section id="services" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support system designed to transform your study
              habits and academic performance
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
                  "Get personalized guidance from mentors to solve discipline-related issues effectively.",
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
                  <p className="text-gray-600 leading-relaxed text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
