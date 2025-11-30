import { axiosInstance } from "@/utils/axiosInstance";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import VideoSection from "./sections/Video";

export default function StudentSahayakLanding() {
  console.log(
    "prod backend url in landing",
    import.meta.env.VITE_PROD_BACKEND_URL
  );
  console.log("dev backend url", import.meta.env.VITE_DEV_BACKEND_URL);

  function keepServerAwake() {
    axiosInstance
      .get("/ping")
      .then((res) => console.log("Ping sent!", res.status))
      .catch((err) => console.error("Ping failed", err))
      .finally(() => {
        // Call again after 30 seconds
        setTimeout(keepServerAwake, 48000);
      });
  }

  // Start pinging
  keepServerAwake();

  return (
    <main className="min-h-screen">
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

      {/* Our Purpose Section */}
      <Mission />

      {/* Contact Section */}
      <Contact />
      {/* Video Section  */}
      <VideoSection />
      {/* Footer */}
      <Footer />
    </main>
  );
}
