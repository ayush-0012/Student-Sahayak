import { Button } from "../ui/button";
import { Heart, Zap, Award, Compass, Users, Shield, Star } from "lucide-react";

function Mission() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                OUR PURPOSE
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond academic success, we're committed to building a better
              society and nurturing the leaders of tomorrow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Character Building",
                description:
                  "Character building among citizens of our beloved country.",
                color: "from-red-400 to-red-600",
                delay: "0ms",
              },
              {
                icon: Shield,
                title: "Reducing Suicide Rates",
                description:
                  "Reducing suicide rates among students through proper guidance and mental health support.",
                color: "from-pink-400 to-red-500",
                delay: "150ms",
              },
              {
                icon: Heart,
                title: "Women Led Development",
                description:
                  "Women led development and breaking the patriarchal mindset for a progressive society.",
                color: "from-purple-400 to-pink-500",
                delay: "300ms",
              },
              {
                icon: Star,
                title: "Parenting Excellence",
                description:
                  "We will make you learn those things which will help you to make your child one of the best. You will able to give guidance to your child at early age what your parents may failed to give. We will help you to make your child scientist, astronaut, brilliant sportsperson etc.",
                color: "from-yellow-400 to-orange-500",
                delay: "450ms",
              },
              {
                icon: Award,
                title: "Build Civic Sense",
                description:
                  "Build civic sense and responsible citizenship for a better tomorrow.",
                color: "from-green-400 to-blue-500",
                delay: "600ms",
              },
              {
                icon: Compass,
                title: "Fight Climate Change",
                description:
                  "Fight climate change through awareness and sustainable practices for our planet's future.",
                color: "from-blue-400 to-green-500",
                delay: "750ms",
              },
            ].map((purpose, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 animate-fade-in-up`}
                style={{ animationDelay: purpose.delay }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex items-center justify-center mb-6">
                    <div
                      className={`p-4 bg-gradient-to-r ${purpose.color} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <purpose.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <h3 className="font-bold text-xl mb-4 group-hover:text-yellow-200 transition-colors text-center text-white">
                    {purpose.title}
                  </h3>
                  <p className="text-white/80 text-sm group-hover:text-white transition-colors text-center leading-relaxed">
                    {purpose.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-6 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${purpose.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join Our Mission
              </h3>
              <p className="text-lg mb-6">
                Be part of a movement that's not just about academic success,
                but about building a better society for everyone.
              </p>
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <Zap className="h-6 w-6" />
                Start Making a Difference
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mission;
