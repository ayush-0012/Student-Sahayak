import {
  Award,
  CheckCircle,
  Clock,
  Heart,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function RefundPolicy() {
  return (
    <>
      {/* Detailed Refund Policy */}
      <section className="mt-12 max-w-6xl mx-auto">
        <div className="text-center mb-8 flex justify-center ">
          <Badge className="flex bg-gradient-to-r from-green-400 to-blue-500 text-white  px-6 py-3 rounded-full font-bold  items-center justify-start gap-2 w-full text-2xl">
            {/* <Shield className="h-5 w-5" /> */}
            Detailed Refund Policy
          </Badge>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* 2-Day Satisfaction Policy */}
          <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                2-Day Trial Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-green-100 rounded-lg p-4 mb-4">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  60%
                </div>
                <div className="text-sm text-green-700 font-semibold">
                  REFUND GUARANTEED
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                After two days, if you are not satisfied with our service, we
                will refund 60% of your fees within 5 hours during our working
                time.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="h-4 w-4" />
                <span className="text-xs font-medium">
                  Quick 5-Hour Processing
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Financial Support Policy */}
          <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                Financial Support
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-blue-100 rounded-lg p-4 mb-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
                <div className="text-sm text-blue-700 font-semibold">
                  SPECIAL REFUND
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                For financially poor students, we provide enhanced support with
                75% refund policy to ensure education remains accessible.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-blue-600">
                <Users className="h-4 w-4" />
                <span className="text-xs font-medium">
                  Supporting Every Student
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Satisfaction Guarantee */}
          <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                Ultimate Guarantee
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-purple-100 rounded-lg p-4 mb-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  90%
                </div>
                <div className="text-sm text-purple-700 font-semibold">
                  MAXIMUM REFUND
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                If you don't get even 1% satisfaction from our course, we will
                refund 90% of your money (only for genuine reasons).
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-purple-600">
                <Star className="h-4 w-4" />
                <span className="text-xs font-medium">
                  Genuine Reasons Only
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Message */}
        <div className="text-center mt-8 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-2xl">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="h-6 w-6 text-gray-700" />
            <h4 className="text-lg font-bold text-gray-900">
              Our Promise to You
            </h4>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe in building trust more than profit. These policies ensure
            that every student, regardless of their financial situation, gets
            the support they deserve with complete peace of mind.
          </p>
        </div>
      </section>
    </>
  );
}

export default RefundPolicy;
