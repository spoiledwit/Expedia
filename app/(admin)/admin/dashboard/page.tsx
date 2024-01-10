"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([
    {
      id: 0,
      label: "Total Applications",
      value: 0,
      href: "/admin/applications",
    },
    {
      id: 2,
      label: "Total Pending Applications",
      value: 0,
      href: "/admin/applications",
    },
    {
      id: 1,
      label: "Total Users on Portal",
      value: 0,
      href: "/admin/users",
    },
    {
      id: 3,
      label: "Total New Website Leads",
      href: "/admin/queries",
      value: 0,
    },
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/stats");
      setData([
        {
          id: 0,
          label: "Total Applications",
          value: res.data.stats.applications,
          href: "/admin/applications",
        },
        {
          id: 2,
          label: "Total Pending Applications",
          value: res.data.stats.pendingApplications,
          href: "/admin/applications",
        },
        {
          id: 1,
          label: "Total Users on Portal",
          value: res.data.stats.users,
          href: "/admin/users",
        },
        {
          id: 3,
          label: "Total New Website Leads",
          value: res.data.stats.contacts,
          href: "/admin/queries",
        },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
      className="p-3 px-8"
      >
      <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
      <p
      className="mt-2"
      >
        Loading Stats...
      </p>
      </div>
    );
  }

  return (
    <div className="px-8 p-3">
      <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-fit mt-6">
        {data.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="bg-white border h-[150px] hover:shadow transition-all duration-200 w-[170px] flex flex-col items-center justify-center gap-3 rounded-lg px-4 py-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {item.value}
            </h2>
            <p className="text-gray-400 text-center text-sm">{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
