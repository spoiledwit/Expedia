"use client";
import useAuthStore from "@/store/authStore";
import React from "react";

const AdminPage = () => {
  const { auth } = useAuthStore();

  return (
    <div className="flex flex-col w-full p-6 ">
      <h1 className="text-3xl text-gray-900">Welcome {auth?.name}!</h1>
      <p className="text-gray-600">You are logged in as an admin.</p>
      <p className="text-gray-600">
        Please use the sidebar to navigate to the admin pages.
      </p>
    </div>
  );
};

export default AdminPage;
