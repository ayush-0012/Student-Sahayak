import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";
import { useState } from "react";
import { axiosInstance } from "@/utils/axiosInstance";
import { Loader2 } from "lucide-react";
import { Bounce, toast, ToastContainer } from "react-toastify"; // or your preferred toast library

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function verifyEmail() {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post("/api/user/login", {
        email,
      });
      console.log(response);

      toast.success("Verification email sent!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } catch (error) {
      console.log(error);

      toast.error("Failed to send verification email", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await verifyEmail();
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 py-12 px-4">
        <Card className="w-full max-w-md bg-gray-900 text-white border-red-700/50 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-yellow-400">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="e.g., student@example.com"
                    required
                    disabled={isLoading}
                    value={email}
                    className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 disabled:opacity-50"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Verify Email"
                  )}
                </Button>
              </form>
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
      <ToastContainer />
    </>
  );
}
