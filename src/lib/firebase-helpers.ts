import { auth } from "@/lib/firebase";

/**
 * Get the current Firebase ID token
 * Automatically refreshes if needed
 */
export async function getFirebaseToken(): Promise<string | null> {
  const user = auth.currentUser;

  if (!user) {
    return null;
  }

  try {
    return await user.getIdToken(true);
  } catch (error) {
    console.error("Error getting Firebase token:", error);
    return null;
  }
}

/**
 * Make an authenticated API request with Firebase token
 */
export async function makeAuthenticatedRequest(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const token = await getFirebaseToken();

  if (!token) {
    throw new Error("No authentication token available");
  }

  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * Get backend URL based on environment
 */
export function getBackendUrl(): string {
  return import.meta.env.MODE === "development"
    ? import.meta.env.VITE_DEV_BACKEND_URL
    : import.meta.env.VITE_PROD_BACKEND_URL;
}

/**
 * Get the current user's Firebase UID
 */
export function getFirebaseUid(): string | null {
  return auth.currentUser?.uid || null;
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  return auth.currentUser !== null;
}

/**
 * Sign out user
 */
export async function signOutUser(): Promise<void> {
  await auth.signOut();
  localStorage.removeItem("firebaseToken");
  localStorage.removeItem("firebaseUid");
}
