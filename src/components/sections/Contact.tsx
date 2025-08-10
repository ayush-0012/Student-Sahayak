import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Future?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join hundreds of successful students who have transformed their study
          habits and achieved their academic goals with Student Sahayak.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto"
          >
            <MessageCircle className="h-6 w-6" />
            WhatsApp: 95885 33265
          </Button>
          {/* <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto bg-transparent"
          >
            Get Custom Plan
          </Button> */}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-300 text-lg mb-2">Or reach us via email:</p>
          <a
            href="mailto:sahayakstudent4@gmail.com"
            className="text-yellow-400 hover:text-yellow-300 text-xl font-bold transition-colors duration-300"
          >
            sahayakstudent4@gmail.com
          </a>
          <p className="text-white text-xl mt-2"> Sachin, Student Sahayak</p>
        </div>
      </div>
    </section>
  );
}
