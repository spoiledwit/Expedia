"use client";
import React, { useEffect, useState } from "react";
import NewzealandApplication from "@/components/Portal/applications/newzealand";
import NewzealandSteps from "@/components/Portal/steps/newzealand";
import axios from "axios";

const DashboardPage = () => {
  const [loading, setLoading] = useState(false);
  const [hasApplications, setHasApplications] = React.useState(false);

  useEffect(() => {
    haveApplications();
  }, []);

  const haveApplications = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/newzealand");
      console.log(response.data);
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
      <h1 className="text-2xl text-gray-900">
        New Zealand Work Permit Program
      </h1>

      <div className="mt-2">
        {hasApplications && !loading ? <NewzealandSteps /> : <NewzealandApplication />}
      </div>
    </div>
  );
};

export default DashboardPage;
