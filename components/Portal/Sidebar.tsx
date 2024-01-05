"use client";
import useAuthStore from "@/store/authStore";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

const Sidebar = () => {
  const { auth, clearAuth } = useAuthStore();

  const handleSignOut = async () => {
    await signOut();
    clearAuth();
    window.location.href = "/";
  };

  const links = [
    {
      id: 0,
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      id: 1,
      name: "Applications",
      href: "/applications",
    },
  ];

  return (
    <div className="flex flex-col p-10 h-full w-full bg-white">
      <h2 className="text-2xl font-semibold">Welcome {auth?.name}!</h2>
      <div className="flex flex-col gap-2 mt-10">
        {links.map((link) => (
          <Button>
            {" "}
            <Link key={link.id} href={link.href}>
              {link.name}
            </Link>
          </Button>
        ))}
      </div>
      <Button
      onClick={handleSignOut}
      className="mt-auto"
      variant={"outline"}
      >
        Logout
      </Button>
    </div>
  );
};

export default Sidebar;
