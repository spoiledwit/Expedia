"use client";

import useAuthStore from "@/store/authStore";
import { storeInitializer } from "@/lib/actions/storeInitializer";
import React, { useEffect } from "react";
import Sidebar from "@/components/Portal/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { setStatus } = useAuthStore();

  useEffect(() => {
    handleStoreInit();
  }, []);

  const handleStoreInit = async () => {
    setStatus("loading");
    await storeInitializer();
    if (auth) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  const { auth } = useAuthStore();

  if (!auth) {
    return (
      <div className=" min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl text-gray-900">
          Please login to access this page
        </h1>
        <Button
        className="mt-3"
        >
          <Link href="/login">Login</Link>
        </Button>
      </div>
    );
  }

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-screen  rounded-lg border"
    >
      <ResizablePanel>
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle withHandle defaultValue={25} />
      <ResizablePanel defaultSize={75}>
       {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
