import { authClient } from "@/lib/auth-client";
import React, { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    async function fetchSession() {
      const session = await authClient.getSession();

      console.log(session);
    }

    fetchSession();
  }, []);

  return <div>dashboard</div>;
}

export default Dashboard;
