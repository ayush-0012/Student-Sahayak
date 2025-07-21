import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Upload } from "lucide-react"; // Import the Upload icon
import { Link } from "react-router";

export default function RegisterPage() {
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
                className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-yellow-400 focus:ring-yellow-400"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-white">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phoneNumber"
                type="tel"
                placeholder="e.g., 9876543210"
                required
                className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-yellow-400 focus:ring-yellow-400"
              />
            </div>
            <div>
              <Label htmlFor="age" className="text-white">
                Age
              </Label>
              <Input
                id="age"
                name="age"
                type="text"
                placeholder="Your Age"
                required
                className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-yellow-400 focus:ring-yellow-400"
              />
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
                className="mt-1 bg-gray-800 text-white border-gray-700 focus:border-yellow-400 focus:ring-yellow-400"
              />
            </div>
            <div>
              <Label htmlFor="photo" className="text-white block mb-2">
                Upload Your Photo
              </Label>
              <div className="relative">
                <Input
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" // Hide default input
                />
                <Label
                  htmlFor="photo"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 cursor-pointer transition-all duration-200 transform hover:scale-[1.01]" // Changed gradient
                >
                  <Upload className="h-4 w-4" /> {/* Added icon */}
                  Choose photo from your device
                </Label>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold"
            >
              Register
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
