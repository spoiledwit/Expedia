"use client";
import React, { useEffect } from "react";
import useAuthStore from "@/store/authStore";
import {format} from "timeago.js";
import Link from "next/link";
import axios from "axios";

const ApplicationsPage = () => {
  const { auth } = useAuthStore();
  const [loading, setLoading] = React.useState(false);
  const [applications, setApplications] = React.useState<any[]>([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/newzealand")
      .then((res) => {
        setApplications(res.data.applications);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col gap-2 p-10 h-full w-full bg-white">
      <h1 className="text-2xl font-semibold">
        Hey {auth?.name.split(" ")[0]}!
      </h1>
      <p className="text-lg">
        From here you can see all the applications you have submitted.
      </p>
      <div className="flex flex-wrap gap-2">
        <div className="p-4 border rounded-lg mt-2 border-primary-blue">
          Total Applications : {applications.length}
        </div>
        <div className="p-4 bg-yellow-100 border rounded-lg mt-2 border-primary-blue">
          Total Pending Applications : {applications.length}
        </div>
      </div>
      <div className="mt-6">
        {applications.map((applications) => (
          <Link
            key={applications._id}
            href={`/dashboard`}
            className="p-4 border hover:bg-gray-100 cursor-pointer rounded-lg mt-2 border-primary-blue gap-3 flex flex-col"
          >
            <h2>
              <strong>Application ID: {applications._id}</strong>
            </h2>
            <h2>
              Country:
              <span className="bg-primary-blue text-primary-gold px-2 py-1 rounded-lg ml-2">
                Newzealand
              </span>
            </h2>
            <h2>
              Application Status:
              <span
              className="bg-yellow-100 border mt-2 border-primary-blue px-2 py-1 rounded-lg ml-2"
              >{applications.status}</span>
            </h2>
            <h2>Application Submitted: {format(applications.createdAt)}</h2>
            <div></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsPage;
