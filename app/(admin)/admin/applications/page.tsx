import React from "react";
import { ApplicationsTable } from "@/components/Admin/Applications/Table";

const ApplicationsPage = () => {
  return (
    <div className="flex flex-col p-8">
      <h1 className="text-3xl font-semibold tracking-wide mb-2">
        Applications
      </h1>
      <ApplicationsTable />
    </div>
  );
};

export default ApplicationsPage;
