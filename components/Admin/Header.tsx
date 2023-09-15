"use client";

import { useCookies } from "react-cookie";
import { adminNav } from "../../navs";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const cookie = useCookies(["Authorization"]);

  const router = useRouter();
  function isActiveLink(href: string) {
    return router.pathname === href;
  }

  return (
    <div className="w-full h-16 px-4 flex justify-between items-center border-b-[2px] border-gray-300">
      <h2 className=" text-2xl font-bold text-black">Admin</h2>
      <nav className=" text-sm font-bold text-gray-500 gap-8 flex w-full justify-center mx-4">
        {adminNav.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`${
              isActiveLink(link.href)
                ? "text-green-500"
                : "hover:text-green-500"
            } transition-all h-10 grid place-items-center`}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <button
        className="disabled:cursor-wait whitespace-nowrap bg-green-500 hover:bg-green-400 disabled:bg-gray-500 disabled:hover:bg-gray-500 border rounded-lg px-6 flex items-center justify-center text-white h-10 outline-none"
        onClick={() => cookie[2]("Authorization")}
      >
        Log out
      </button>
    </div>
  );
}
