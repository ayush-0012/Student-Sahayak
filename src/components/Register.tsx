import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Loader2 } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validation functions
  const validateForm = () => {
    // Full Name validation
    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name");
      return false;
    }
    if (formData.fullName.trim().length < 2) {
      toast.error("Full name must be at least 2 characters long");
      return false;
    }

    // Email validation
    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Please enter a valid email address");
      return false;
    }

    // Password validation
    if (!formData.password.trim()) {
      toast.error("Please enter a password");
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    return true;
  };

  async function handleRegister() {
    // Validate form before making API call
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email.trim().toLowerCase(),
        formData.password
      );

      // Update user profile with display name
      await updateProfile(userCredential.user, {
        displayName: formData.fullName.trim(),
      });

      const idToken = await userCredential.user.getIdToken();

      // Send user data to backend to create Firestore profile
      const registrationData = {
        uid: userCredential.user.uid,
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        emailVerified: false,
      };

      // Get backend URL
      const backendUrl =
        import.meta.env.MODE === "development"
          ? import.meta.env.VITE_DEV_BACKEND_URL
          : import.meta.env.VITE_PROD_BACKEND_URL;

      const response = await fetch(backendUrl + "/api/user/firebase-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(registrationData),
      });

      if (!response.ok) {
        throw new Error("Failed to save user profile");
      }

      // Success toast
      toast.success("Registration successful! You can now login.", {
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

      // Redirect to home after successful registration
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
      let errorMessage = "Registration failed. Please try again.";

      if (error instanceof Error && "code" in error) {
        const fbError = error as { code: string; message: string };
        if (fbError.code === "auth/email-already-in-use") {
          errorMessage = "This email is already registered.";
        } else if (fbError.code === "auth/invalid-email") {
          errorMessage = "Invalid email address.";
        } else if (fbError.code === "auth/weak-password") {
          errorMessage =
            "Password is too weak. Please use a stronger password.";
        } else if (fbError.message) {
          errorMessage = fbError.message;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
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

  // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   console.log("hit submit");
  //   await handleRegister();
  // }

  // Cleanup preview URL on component unmount
  // useEffect(() => {
  //   return () => {
  //     if (previewUrl) {
  //       URL.revokeObjectURL(previewUrl);
  //     }
  //   };
  // }, [previewUrl]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 py-12 px-4">
      <Card className="w-full max-w-md bg-gray-900 text-white border-red-700/50 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-yellow-400">
            Register
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-white">
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Your Full Name"
                required
                disabled={isLoading}
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 disabled:opacity-50"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="yourname@gmail.com"
                required
                disabled={isLoading}
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 disabled:opacity-50"
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
                placeholder="At least 6 characters"
                required
                disabled={isLoading}
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 disabled:opacity-50"
              />
              <p className="text-xs text-gray-400 mt-1">
                Must be at least 6 characters
              </p>
            </div>
            <div>
              <Label htmlFor="confirmPassword" className="text-white">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                required
                disabled={isLoading}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 disabled:opacity-50"
              />
            </div>
            {/* <div>
              <Label htmlFor="photo" className="text-white block mb-1">
                Upload Photo *
              </Label>
              <div className="relative">
                <Input
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  disabled={isLoading}
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                />

                {!selectedFile ? (
                  <Label
                    htmlFor="photo"
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 cursor-pointer transition-all duration-200 transform hover:scale-[1.01] ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <Upload className="h-4 w-4" />
                    Choose a photo from your device
                  </Label>
                ) : (
                  <div className="w-full border border-gray-700 rounded-md bg-gray-800 p-3">
                    <div className="flex items-center gap-3">
                      {previewUrl && (
                        <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={previewUrl}
                            alt="Preview"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          {selectedFile.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        disabled={isLoading}
                        className="flex-shrink-0 p-1 text-gray-400 hover:text-red-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div> */}
            <Button
              type="submit"
              disabled={isLoading}
              onClick={handleRegister}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Register"
              )}
            </Button>
            <div className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login">
                <Button
                  variant="link"
                  className="p-0 h-auto text-yellow-400 hover:text-yellow-300"
                >
                  Login
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
