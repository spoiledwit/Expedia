"use client";

import useAuthStore from "@/store/authStore";
import Link from "next/link";
import React, { useEffect } from "react";
import {Button} from "@/components/ui/button";
import { storeInitializer } from "@/lib/actions/storeInitializer";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { auth, status } = useAuthStore();
  const { setStatus } = useAuthStore();
  useEffect(() => {
    storeInitializer();
    if (auth) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }, []);

  if (status === "error" || !auth) {
    return (
      <div className=" min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl text-gray-900">
          Please login to access this page
        </h1>
        <Link href="/login">
          <Button
          className="mt-2"
          >Login</Button>
        </Link>
      </div>
    );
  }

  if (!auth.isAdmin) {
    return (
      <div className=" min-h-screen flex flex-col justify-center items-center max-w-[100vw]">
        <h1 className="text-4xl text-gray-900">
          You are not authorized to access this page
        </h1>
      </div>
    );
  }

  return <div>{children}</div>;
}