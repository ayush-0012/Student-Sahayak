import { Award, CheckCircle, Clock, MessageCircle, Phone } from "lucide-react";

import { Button } from "../ui/button";

function WhatsappContact() {
  return (
    <>
      <section className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Get Personal Guidance
              </h2>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Call Scheduling */}
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <Phone className="h-6 w-6 text-white" />
                    <h3 className="text-xl font-bold text-white">
                      Schedule Your Call
                    </h3>
                  </div>
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    Message us on WhatsApp to get your slot timing. We will call
                    you within 1-2 hours of our working time for personalized
                    guidance.
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-white/80">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">
                      Quick Response: 1-2 Hours
                    </span>
                  </div>
                </div>

                {/* Right Side - Contact Info */}
                <div className="text-center">
                  <div className="bg-white/20 rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <MessageCircle className="h-6 w-6 text-white" />
                      <h4 className="text-lg font-bold text-white">
                        WhatsApp Number
                      </h4>
                    </div>
                    <div className="text-2xl font-bold text-white mb-4">
                      95885 33265
                    </div>
                    <Button
                      size="lg"
                      className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Message Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Queries */}
              <div className="border-t border-white/20 pt-6 mt-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white font-semibold">
                    Have Any Queries?
                  </span>
                </div>
                <p className="text-white/90 text-lg">
                  Please contact us on WhatsApp:{" "}
                  <span className="font-bold text-white">95885 33265</span>
                </p>
                <p className="text-white/80 text-sm mt-2">
                  We're here to help you with any questions about our programs,
                  pricing, or mentoring process.
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8 text-white/80">
              {/* <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Trusted by 500+ Students
                </span>
              </div> */}
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-medium">Quick Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span className="text-sm font-medium">Personal Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatsappContact;
