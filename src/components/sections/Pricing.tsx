import { IndianRupee } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useState } from "react";
import axios from "axios";

declare global {
  interface Window {
    Razorpay: any;
  }
}

function Pricing() {
  const [loading, setLoading] = useState(false);

  async function handleChoosePlan(amount: number) {
    try {
      setLoading(true);

      const response = await axios.post("http://localhost:9000/create-order", {
        amount,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      });

      const data = response.data;

      console.log(response);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: data.amount,
        currency: data.currency,
        order_id: data.id,
        name: "Your Company",
        description: "Test Transaction",
        handler: async function (response) {
          await axios.post("http://localhost:9000/verify-payment", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          alert("Payment successful!");
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // opening razorpay checkout
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Fee Structure
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Choose the plan that works best for your academic journey
            </p>
          </div>

          {/* Special Offer */}
          <div className="mb-16">
            <div className="text-center mb-12 flex justify-center">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-lg px-6 py-3 rounded-full font-bold shadow-lg animate-pulse flex items-center gap-2">
                Limited Time: First 100 Students Only!
              </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { days: "30", price: 250, popular: false },
                { days: "45", price: 350, popular: true },
                { days: "90", price: 650, popular: false },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    plan.popular
                      ? "border-4 border-yellow-400 scale-105"
                      : "border border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-center py-2 font-bold">
                      RECOMMENDED
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 text-sm font-bold rounded-full">
                    SPECIAL
                  </div>
                  <CardHeader
                    className={`text-center ${plan.popular ? "pt-12" : "pt-8"}`}
                  >
                    <CardTitle className="text-3xl text-gray-900 mb-2">
                      {plan.days} Days
                    </CardTitle>
                    <CardDescription className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent flex items-center justify-center gap-1">
                      <IndianRupee className="h-8 w-8" />
                      {plan.price}
                    </CardDescription>
                    <p className="text-gray-500 mt-2">
                      Perfect for getting started
                    </p>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Button
                      className={`w-full py-3 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 ${
                        plan.popular
                          ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-black hover:from-yellow-500 hover:to-orange-500"
                          : "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                      }`}
                      onClick={() => {
                        handleChoosePlan(plan.price);
                      }}
                    >
                      Choose This Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Normal Plans */}
          <div className="mb-12">
            <div className="text-center mb-12 flex justify-center">
              <Badge className="bg-gray-800 text-white text-lg px-6 py-3 rounded-full font-bold flex items-center gap-2">
                Regular Pricing
              </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { days: "30", price: "275" },
                { days: "45", price: "450" },
                { days: "90", price: "800" },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border border-gray-200"
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-gray-900 mb-2">
                      {plan.days} Days
                    </CardTitle>
                    <CardDescription className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-1">
                      <IndianRupee className="h-6 w-6" />
                      {plan.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-full font-bold transition-all duration-300 transform group-hover:scale-105">
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* <div className="text-center bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-8 w-8" />
              <h3 className="text-2xl font-bold">
                100% Refund Policy Available
              </h3>
            </div>
            <p className="text-lg mb-4">
              We believe in building trust more than profit. Your satisfaction
              is our priority.
            </p>
            <div className="flex items-center justify-center gap-2">
              <Gift className="h-6 w-6" />
              <p className="text-xl font-semibold">
                Customized Plans Also Available!
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Pricing;
