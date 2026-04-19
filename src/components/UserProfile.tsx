import { LogOut, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface UserData {
  uid: string;
  email: string;
  fullName: string;
  emailVerified: boolean;
}

export default function UserProfile() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserSession();
  }, []);

  const fetchUserSession = async () => {
    try {
      const token = localStorage.getItem("firebaseToken");
      if (!token) {
        setLoading(false);
        return;
      }

      const backendUrl =
        import.meta.env.MODE === "development"
          ? import.meta.env.VITE_DEV_BACKEND_URL
          : import.meta.env.VITE_PROD_BACKEND_URL;

      const response = await fetch(`${backendUrl}/api/user/get-session`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setSessionExpired(false);
      } else if (response.status === 401) {
        // Token expired or invalid
        localStorage.removeItem("firebaseToken");
        localStorage.removeItem("firebaseUid");
        setSessionExpired(true);
        setUserData(null);
        toast.error("Session expired. Please login again.");
      } else if (response.status === 404) {
        // User not found in database - need to register
        localStorage.removeItem("firebaseToken");
        localStorage.removeItem("firebaseUid");
        setSessionExpired(true);
        setUserData(null);
        toast.error("Please register your account first");
      }
    } catch (error) {
      console.error("Failed to fetch session:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("firebaseToken");
      if (!token) {
        handleLogoutSuccess();
        return;
      }

      const backendUrl =
        import.meta.env.MODE === "development"
          ? import.meta.env.VITE_DEV_BACKEND_URL
          : import.meta.env.VITE_PROD_BACKEND_URL;

      await fetch(`${backendUrl}/api/user/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      handleLogoutSuccess();
    } catch (error) {
      console.error("Logout error:", error);
      handleLogoutSuccess();
    }
  };

  const handleLogoutSuccess = () => {
    // Clear localStorage
    localStorage.removeItem("firebaseToken");
    localStorage.removeItem("firebaseUid");
    setUserData(null);

    // Dispatch custom auth event to notify other components
    window.dispatchEvent(
      new CustomEvent("authStateChanged", { detail: { authenticated: false } })
    );

    toast.success("Logged out successfully");
    navigate("/login");
  };

  if (loading) {
    return null;
  }

  if (sessionExpired) {
    return (
      <button
        onClick={() => navigate("/login")}
        className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 font-semibold transition"
      >
        Login Again
      </button>
    );
  }

  if (!userData) {
    return null;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
      >
        <User size={20} />
        <span className="hidden sm:inline">{userData.fullName}</span>
      </button>

      {showMenu && (
        <div className="absolute right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50 min-w-max">
          <div className="px-4 py-3 border-b border-gray-700">
            <p className="text-white font-semibold">{userData.fullName}</p>
            <p className="text-gray-400 text-sm">{userData.email}</p>
            {userData.emailVerified && (
              <p className="text-green-400 text-xs mt-1">✓ Email Verified</p>
            )}
          </div>

          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 text-left text-red-400 hover:bg-gray-700 flex items-center gap-2 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
