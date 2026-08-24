"use client";

import { Bell, Home, MessageSquareMore } from "lucide-react";
import Search from "../Inputs/Search";
import Link from "next/link";
import Avatar from "../Avatar/Avatar";
import { usePathname } from "next/navigation";

export default function Desktop() {
  const path = usePathname();
  return (
    <div className="hidden w-full Container lg:flex items-center justify-between">
      <div className="w-1/2">
        <Search
          name="HeaderSearch"
          id="HeaderSearch"
          placeHolder="جستجو در ویترینو ..."
          className="focus-within:border-gray-300 focus-within:shadow"
          search
        />
      </div>

      <div className="w-1/3 flex items-center justify-end gap-5">
        <Link
          href="/"
          className={`h-max w-max block ${path !== "/" && "hover:text-(--secondary-color)"}`}
        >
          <Home className={path === "/" ? "text-(--primary-color)" : ""} />
        </Link>
        <Link href="/messages" className="h-max w-max block">
          <MessageSquareMore
            className={
              path === "/messages"
                ? "text-(--primary-color)"
                : "hover:text-(--secondary-color)"
            }
          />
        </Link>
        <Link href="/notification" className="h-max w-max block">
          <Bell
            className={
              path === "/notification"
                ? "text-(--primary-color)"
                : "hover:text-(--secondary-color)"
            }
          />
        </Link>

        <Avatar />
      </div>
    </div>
  );
}
