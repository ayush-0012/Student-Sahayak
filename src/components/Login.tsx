import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom"; // react-router-dom for linking

export default function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 py-12 px-4">
      <Card className="w-full max-w-md bg-gray-900 text-white border-red-700/50 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-yellow-400">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {!otpSent ? (
              <form className="space-y-4">
                <div>
                  <Label htmlFor="phone" className="text-white">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phoneNumber"
                    type="tel"
                    placeholder="e.g., 9876543210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-yellow-400 focus:ring-yellow-400"
                  />
                </div>
                <Button
                  type="button"
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold"
                >
                  Send OTP
                </Button>
              </form>
            ) : (
              <form className="space-y-4">
                <div>
                  <Label htmlFor="otp" className="text-white">
                    Enter OTP
                  </Label>
                  <Input
                    id="otp"
                    name="otp"
                    type="text"
                    placeholder="e.g., 123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-yellow-400 focus:ring-yellow-400"
                  />
                </div>
                <Button
                  type="button"
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold"
                >
                  Verify OTP
                </Button>
              </form>
            )}
            <div className="text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link to="/register">
                <Button
                  variant="link"
                  className="p-0 h-auto text-yellow-400 hover:text-yellow-300"
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
