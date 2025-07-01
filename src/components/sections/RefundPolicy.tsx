import { CheckCircle, Clock, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function RefundPolicy() {
  return (
    <>
      {/* Detailed Refund Policy */}
      <section className="mt-12 max-w-6xl mx-auto">
        <div className="text-center mb-8 flex justify-center">
          <Badge className="flex bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full font-bold items-center justify-center gap-2 text-2xl">
            {/* <Shield className="h-6 w-6" /> */}
            Refund Policy
          </Badge>
        </div>

        {/* Single Centered Card */}
        <div className="flex justify-center">
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-green-200 bg-gradient-to-br from-green-50 to-white max-w-md w-full">
            <CardHeader className="text-center pb-6">
              <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                2-Day Trial Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center px-8 pb-8">
              <div className="bg-green-100 rounded-xl p-6 mb-6">
                <div className="text-5xl font-bold text-green-600 mb-3">
                  75%
                </div>
                <div className="text-lg text-green-700 font-semibold">
                  REFUND GUARANTEED
                </div>
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                After two days, if you are not satisfied with our service, we
                will refund 75% of your fees during our working time.
              </p>
              <div className="flex items-center justify-center gap-3 text-green-600 bg-green-50 rounded-lg p-4">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Quick Processing</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Message */}
        <div className="text-center mt-12 bg-gradient-to-r from-gray-100 to-gray-50 p-8 rounded-2xl mb-5">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-7 w-7 text-gray-700" />
            <h4 className="text-xl font-bold text-gray-900">
              Our Promise to You
            </h4>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We believe in building trust more than profit. This policy ensures
            that every student gets the support they deserve with complete peace
            of mind. Your satisfaction is our top priority.
          </p>
        </div>
      </section>
    </>
  );
}

export default RefundPolicy;
