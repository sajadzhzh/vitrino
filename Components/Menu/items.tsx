"use client";

import {
  Bell,
  Bookmark,
  Compass,
  Home,
  MessageSquareMore,
  Settings,
  User2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuItems() {
  const path = usePathname();
  return (
    <div className="w-full mt-2 flex flex-col gap-2">
      <Link
        href="/"
        className={`w-full flex gap-2 items-center side_menu_item ${path === "/" && "active"}`}
      >
        <Home size={20} />
        خانه
      </Link>
      <Link
        href="/explore"
        className={`w-full flex gap-2 items-center side_menu_item ${path.includes("/explore") && "active"}`}
      >
        <Compass size={20} />
        کاوش
      </Link>
      <Link
        href="/messages"
        className={`w-full flex gap-2 items-center side_menu_item ${path.includes("/messages") && "active"}`}
      >
        <MessageSquareMore size={20} />
        پیام‌ها
      </Link>
      <Link
        href="/notification"
        className={`w-full flex gap-2 items-center side_menu_item ${path.includes("/notification") && "active"}`}
      >
        <Bell size={20} />
        اعلانات
      </Link>
      <Link
        href="/saved"
        className={`w-full flex gap-2 items-center side_menu_item ${path.includes("/saved") && "active"}`}
      >
        <Bookmark size={20} />
        پست‌های ذخیره شده
      </Link>
      <Link
        href="/profile"
        className={`w-full flex gap-2 items-center side_menu_item ${path.includes("/profile") && "active"}`}
      >
        <User2 size={20} />
        پروفایل
      </Link>
      <Link
        href="/settings"
        className={`w-full flex gap-2 items-center side_menu_item ${path.includes("/settings") && "active"}`}
      >
        <Settings size={20} />
        تنظیمات
      </Link>
    </div>
  );
}
