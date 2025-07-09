import { Play, Youtube } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
              <Youtube className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Watch Our Success Story
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we help students crack any exam with daily target tracking
            and consistency building
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/tSD-Y2VsmII"
                title="CRACK ANY EXAM WITH US| DAILY TARGET TRACKING| BUILD CONSISTENCY WITH US."
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                CRACK ANY EXAM WITH US | DAILY TARGET TRACKING | BUILD
                CONSISTENCY WITH US
              </h3>
              {/* <div className="flex items-center justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Youtube className="h-5 w-5 text-red-500" />
                  <span className="font-medium">STUDENT SAHAYAK</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  <span className="font-medium">Watch Now</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Success Journey?
              </h3>
              <p className="text-lg mb-6">
                Join thousands of students who have transformed their study
                habits and achieved their dreams
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/919588533265"
                  className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  {/* <Play className="h-6 w-6" /> */}
                  Start Your Journey
                </a>
                <a
                  href="mailto:sahayakstudent4@gmail.com"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
