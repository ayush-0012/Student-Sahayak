import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { axiosInstance } from "@/utils/axiosInstance";
import { toast } from "react-toastify";

export default function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Invalid verification link");
      return;
    }

    verifyEmailToken();
  }, [token]);

  const verifyEmailToken = async () => {
    try {
      const response = await axiosInstance.post(
        `/api/user/verify?token=${token}`
      );

      if (response.data.success) {
        setStatus("success");
        setMessage("Email verified successfully!");
        toast.success("Email verified successfully!");

        // Redirect to login after 3 seconds
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      } else {
        setStatus("error");
        setMessage(response.data.message || "Verification failed");
      }
    } catch (error) {
      console.error("Verification error:", error);
      setStatus("error");
      setMessage("Unable to verify email. Please try again.");
      toast.error("Email verification failed");
    }
  };

  const handleRetryVerification = () => {
    setStatus("loading");
    verifyEmailToken();
  };

  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 py-12 px-4">
      <Card className="w-full max-w-md bg-gray-900 text-white border-red-700/50 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-yellow-400">
            Email Verification
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          {status === "loading" && (
            <div className="space-y-4">
              <Loader2 className="mx-auto h-12 w-12 animate-spin text-yellow-400" />
              <p className="text-gray-300">Verifying your email...</p>
            </div>
          )}

          {status === "success" && (
            <div className="space-y-4">
              <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
              <div className="space-y-2">
                <p className="text-green-400 font-semibold">{message}</p>
                {/* <p className="text-gray-400 text-sm">
                  Redirecting to dashboard in 3 seconds...
                </p> */}
              </div>
              <Button
                onClick={handleGoToDashboard}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold"
              >
                Go to Dashboard
              </Button>
            </div>
          )}

          {status === "error" && (
            <div className="space-y-4">
              <XCircle className="mx-auto h-12 w-12 text-red-500" />
              <div className="space-y-2">
                <p className="text-red-400 font-semibold">
                  Verification Failed
                </p>
                <p className="text-gray-400 text-sm">{message}</p>
              </div>
              <div className="space-y-2">
                <Button
                  onClick={handleRetryVerification}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold"
                >
                  Retry Verification
                </Button>
                <Button
                  onClick={handleGoToLogin}
                  variant="outline"
                  className="w-full border-gray-600 text-black hover:bg-gray-800"
                >
                  Back to Login
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
