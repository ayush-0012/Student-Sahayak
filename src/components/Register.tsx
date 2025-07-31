import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router";
import { Upload, X, Loader2 } from "lucide-react";
import { axiosInstance } from "@/utils/axiosInstance";
import { Bounce, toast } from "react-toastify";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    age: "",
    exam: "",
    // image: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
    setFormData((prev) => ({
      ...prev,
      image: file || null,
    }));

    // Create preview URL
    const url = file ? URL.createObjectURL(file) : null;
    setPreviewUrl(url);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFormData((prev) => ({
      ...prev,
      image: null,
    }));
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    // Reset the file input
    const fileInput = document.getElementById("photo") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
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

    // Phone Number validation
    if (!formData.phoneNumber.trim()) {
      toast.error("Please enter your phone number");
      return false;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phoneNumber.trim())) {
      toast.error("Phone number must be exactly 10 digits");
      return false;
    }

    // Email validation
    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      return false;
    }
    const emailRegex =
      /^[^\s@]+@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com)$/i;
    if (!emailRegex.test(formData.email.trim())) {
      toast.error(
        "Email must end with @gmail.com, @yahoo.com, @hotmail.com, or @outlook.com"
      );
      return false;
    }

    // Age validation
    if (!formData.age.trim()) {
      toast.error("Please enter your age");
      return false;
    }
    const ageNum = parseInt(formData.age);
    if (isNaN(ageNum)) {
      toast.error("Age must be a valid number");
      return false;
    }
    if (ageNum < 1) {
      toast.error("Age cannot be negative or zero");
      return false;
    }
    if (ageNum > 120) {
      toast.error("Please enter a valid age");
      return false;
    }

    // Exam validation
    if (!formData.exam.trim()) {
      toast.error("Please enter the exam you're preparing for");
      return false;
    }
    if (formData.exam.trim().length < 2) {
      toast.error("Exam name must be at least 2 characters long");
      return false;
    }

    // Image validation
    // if (!formData.image) {
    //   toast.error("Please upload your photo");
    //   return false;
    // }

    return true;
  };

  async function handleRegister() {
    // Validate form before making API call
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Create FormData for multipart/form-data
      const registrationData = {
        fullName: formData.fullName.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        email: formData.email.trim().toLowerCase(),
        age: formData.age.trim(),
        exam: formData.exam.trim(),
      };

      // if (formData.image) {
      //   registrationData.append("image", formData.image);
      // }

      console.log("prod backend url", import.meta.env.VITE_PROD_BACKEND_URL);
      console.log("dev backend url", import.meta.env.VITE_DEV_BACKEND_URL);

      console.log("registration data", registrationData);
      const response = await axiosInstance.post(
        "/api/user/register",
        JSON.stringify(registrationData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);

      // Success toast
      toast.success("Registration successful! Please login to continue.", {
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

      // Redirect to login page after successful registration
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error: any) {
      console.log(error);

      const errorMessage =
        error.response?.data?.message ||
        "Registration failed. Please try again.";
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
    await handleRegister();
  }

  // Cleanup preview URL on component unmount
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 py-12 px-4">
      <Card className="w-full max-w-md bg-gray-900 text-white border-red-700/50 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-yellow-400">
            Register
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
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
              <Label htmlFor="phoneNumber" className="text-white">
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="e.g., 9876543210"
                required
                disabled={isLoading}
                value={formData.phoneNumber}
                onChange={handleInputChange}
                maxLength={10}
                className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 disabled:opacity-50"
              />
              <p className="text-xs text-gray-400 mt-1">
                Must be exactly 10 digits
              </p>
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
              <p className="text-xs text-gray-400 mt-1">
                Must end with @gmail.com
              </p>
            </div>
            <div>
              <Label htmlFor="age" className="text-white">
                Age
              </Label>
              <Input
                id="age"
                name="age"
                type="number"
                placeholder="Your Age"
                required
                disabled={isLoading}
                value={formData.age}
                onChange={handleInputChange}
                min="1"
                max="120"
                className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 disabled:opacity-50"
              />
              {/* <p className="text-xs text-gray-400 mt-1">
                Must be between 1 and 120
              </p> */}
            </div>
            <div>
              <Label htmlFor="exam" className="text-white">
                Exam Preparing For
              </Label>
              <Input
                id="exam"
                name="exam"
                type="text"
                placeholder="e.g., UPSC, SSC GD"
                required
                disabled={isLoading}
                value={formData.exam}
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
