import { toast } from "react-toastify";

export interface TestBlockAnalysis {
  block: string;
  scored: number;
  total: number;
  percentage: string;
}

export interface TestScore {
  total: number;
  max: number;
  percentage: string;
  status: string;
}

export interface TestResult {
  message: string;
  score: TestScore;
  blockAnalysis: TestBlockAnalysis[];
}

/**
 * Save test score to backend
 */
export async function saveTestScoreToFirebase(
  testResult: TestResult
): Promise<boolean> {
  try {
    const token = localStorage.getItem("firebaseToken");
    const uid = localStorage.getItem("firebaseUid");

    if (!token || !uid) {
      toast.error("You must be logged in to submit a test");
      return false;
    }

    const backendUrl =
      import.meta.env.MODE === "development"
        ? import.meta.env.VITE_DEV_BACKEND_URL
        : import.meta.env.VITE_PROD_BACKEND_URL;

    const response = await fetch(`${backendUrl}/api/user/save-test-score`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid,
        message: testResult.message,
        score: testResult.score,
        blockAnalysis: testResult.blockAnalysis,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      toast.success(`Test saved! ${data.remaining} attempts remaining today`);
      return true;
    } else if (response.status === 429) {
      const data = await response.json();
      toast.error(data.error);
      return false;
    } else {
      const data = await response.json();
      toast.error(data.error || "Failed to save test score");
      return false;
    }
  } catch (error) {
    console.error("Failed to save test score:", error);
    toast.error("Failed to save test score");
    return false;
  }
}

/**
 * Get remaining test attempts for today
 */
export async function getTestAttemptsRemaining(): Promise<{
  remaining: number;
  testsToday: number;
  canTakeTest: boolean;
} | null> {
  try {
    const token = localStorage.getItem("firebaseToken");
    const uid = localStorage.getItem("firebaseUid");

    if (!token || !uid) {
      return null;
    }

    const backendUrl =
      import.meta.env.MODE === "development"
        ? import.meta.env.VITE_DEV_BACKEND_URL
        : import.meta.env.VITE_PROD_BACKEND_URL;

    const response = await fetch(
      `${backendUrl}/api/user/test-attempts-remaining?uid=${uid}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch (error) {
    console.error("Failed to get test attempts:", error);
    return null;
  }
}

/**
 * Get all test scores for user
 */
export async function getAllTestScores(): Promise<any[] | null> {
  try {
    const token = localStorage.getItem("firebaseToken");

    if (!token) {
      return null;
    }

    const backendUrl =
      import.meta.env.MODE === "development"
        ? import.meta.env.VITE_DEV_BACKEND_URL
        : import.meta.env.VITE_PROD_BACKEND_URL;

    const response = await fetch(`${backendUrl}/api/user/test-scores`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data.tests;
    }
    return null;
  } catch (error) {
    console.error("Failed to get test scores:", error);
    return null;
  }
}
