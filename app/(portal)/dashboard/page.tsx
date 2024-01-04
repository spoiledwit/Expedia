import React from "react";
import NewzealandApplication from "@/components/Portal/applications/newzealand";

const DashboardPage = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl text-gray-900">
        New Zealand Work Permit Program
      </h1>
      <div className="mt-2">
        <NewzealandApplication />
      </div>
    </div>
  );
};

export default DashboardPage;
