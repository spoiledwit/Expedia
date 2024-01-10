"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTachometerAlt,
  FaUsers,
  FaFileInvoiceDollar,
  FaCog,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaWpforms } from "react-icons/fa";
import { signOut } from "next-auth/react";

const AdminSidebar = () => {
  const pathname = usePathname();

  const links = [
    {
      id: 0,
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      id: 1,
      name: "Applications",
      path: "/admin/applications",
      icon: <FaWpforms />,
    },
    {
      id: 2,
      name: "Users",
      path: "/admin/users",
      icon: <FaUsers />,
    },
    {
      id: 3,
      name: "Leads",
      path: "/admin/queries",
      icon: <FaFileInvoiceDollar />,
    },
    {
      id: 4,
      name: "Settings",
      path: "/admin/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <div className="bg-white border w-[350px] h-screen pt-6 px-4 flex flex-col gap-2">
      {links.map((link) => (
        <Link href={link.path} key={link.id}>
          <p
            className={`flex items-center px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 
          ${pathname.includes(link.path) && "bg-gray-100 "}
          `}
          >
            <span className="text-xl text-primary-gold bg-primary-blue p-2 rounded-xl">
              {link.icon}
            </span>
            <span className="ml-2 font-semibold">{link.name}</span>
          </p>
        </Link>
      ))}
      <Button
      onClick={() => signOut()}
      className="mt-auto mb-10">Logout</Button>
    </div>
  );
};

export default AdminSidebar;
