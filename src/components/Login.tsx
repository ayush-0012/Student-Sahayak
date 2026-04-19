import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleLogin() {
    if (!email || !password) {
      toast.error("Please fill in all fields", {
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
      return;
    }

    setIsLoading(true);
    try {
      // Sign in with Firebase
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();

      // Get backend URL
      const backendUrl =
        import.meta.env.MODE === "development"
          ? import.meta.env.VITE_DEV_BACKEND_URL
          : import.meta.env.VITE_PROD_BACKEND_URL;

      // Send token to backend to sync user data
      const loginResponse = await fetch(
        backendUrl + "/api/user/firebase-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({ uid: userCredential.user.uid }),
        }
      );

      // Check if user exists in database
      if (loginResponse.status === 404) {
        const errorData = await loginResponse.json();
        throw new Error(
          errorData.error || "Please register your account first"
        );
      }

      if (!loginResponse.ok) {
        const errorData = await loginResponse.json();
        throw new Error(errorData.error || "Login failed");
      }

      toast.success("Login successful!", {
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

      // Store token in localStorage
      localStorage.setItem("firebaseToken", idToken);
      localStorage.setItem("firebaseUid", userCredential.user.uid);

      // Dispatch custom auth event to notify other components
      window.dispatchEvent(
        new CustomEvent("authStateChanged", { detail: { authenticated: true } })
      );

      // Redirect to home
      navigate("/");
    } catch (error) {
      console.log(error);
      let errorMessage = "Login failed";

      if (error instanceof Error && "code" in error) {
        const fbError = error as { code: string };
        if (fbError.code === "auth/user-not-found") {
          errorMessage = "User not found. Please register first.";
        } else if (fbError.code === "auth/wrong-password") {
          errorMessage = "Incorrect password";
        } else if (fbError.code === "auth/invalid-email") {
          errorMessage = "Invalid email address";
        }
      }

      toast.error(errorMessage, {
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
    await handleLogin();
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
                <div>
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    disabled={isLoading}
                    value={password}
                    className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 disabled:opacity-50"
                    onChange={(e) => setPassword(e.target.value)}
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
                      Logging in...
                    </>
                  ) : (
                    "Login"
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
