import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
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

        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Shipping & Refund Policy
        </h1>

        <section className="mb-8">
          {/* <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Processing Time
          </h2>
          <p className="text-gray-700 mb-4">
            All orders are delivered within 2-3 business days. Orders are not
            shipped or delivered on weekends or holidays. If we are experiencing
            a high volume of orders, shipments may be delayed by a few days.
            Please allow additional days in transit for delivery. If there will
            be a significant delay in the shipment of your order, we will
            contact you via email or phone.
          </p> */}

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Return and Refund policy
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Refund</h3>
          <p className="text-gray-700 mb-4">
            We have a 2 day trial policy, if you buy our general course and
            after two days you don't feel satisfied with out service, we will
            refund 75% of your fees during our working time.
          </p>

          <span className="font-bold">
            sk7065717637@gmail.com/+91 95885 33265
          </span>

          {/* <h3 className="text-xl font-semibold text-gray-800 mb-2">Refunds</h3> */}
          <p className="text-gray-700">
            {/* We will notify you once we’ve received and inspected your return,
            and let you know if the refund was approved or not. If approved,
            you’ll be automatically refunded on your original payment method
            within 10 business days. Please remember it can take some time for
            your bank or credit card company to process and post the refund too.
            If more than 15 business days have passed since we’ve approved your
            return, please contact us at{" "} */}
            .
          </p>
        </section>
      </div>
    </div>
  );
}
