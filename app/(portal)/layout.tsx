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

export default function Layout({ children }: { children: React.ReactNode }) {
  const { setStatus } = useAuthStore();
  useEffect(() => {
    storeInitializer();
    if (auth) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }, []);
  const { auth, status } = useAuthStore();

  if (status === "error" || !auth) {
    return (
      <div className=" min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl text-gray-900">
          Please login to access this page
        </h1>
      </div>
    );
  }

  // if (!auth.isAdmin) {
  //   return (
  //     <div className=" min-h-screen flex flex-col justify-center items-center">
  //       <h1 className="text-4xl text-gray-900">
  //         You are not authorized to access this page
  //       </h1>
  //     </div>
  //   );
  // }

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
