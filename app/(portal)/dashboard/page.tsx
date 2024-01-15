"use client";
import React, { useEffect, useState } from "react";
import NewzealandApplication from "@/components/Portal/applications/newzealand";
import NewzealandSteps from "@/components/Portal/steps/newzealand";
import axios from "axios";
import useAuthStore from "@/store/authStore";

const DashboardPage = () => {
  const { auth } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [hasApplications, setHasApplications] = React.useState(false);

  useEffect(() => {
    haveApplications();
  }, []);

  const haveApplications = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/newzealand");
      // console.log(response.data);
      if (response.data.applications.length > 0) {
        setHasApplications(true);
      } else {
        setHasApplications(false);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10">
      <h1
      className="text-2xl text-gray-900"
      >
        Available Programs:{" "}
      </h1>
      <div className="mt-2">
        {hasApplications && !loading && <NewzealandSteps />}
        {!hasApplications &&
          !loading &&
          auth?.countries.includes("New Zealand Work Permit Process") && (
            <>
              <h1 className="text-2xl text-gray-900">
                New Zealand Work Permit Program
              </h1>
              <NewzealandApplication />
            </>
          )}
          {!hasApplications && !loading && auth?.countries.length===0 && (
            <div className="text-yellow-500">
              You've not subscribed to any program yet. Please wait for admin to add you to a program.
            </div>
          )}
      </div>
    </div>
  );
};

export default DashboardPage;
