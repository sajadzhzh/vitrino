import { Bell, Home, MessageSquareMore } from "lucide-react";
import Search from "../Inputs/Search";
import Link from "next/link";
import Avatar from "../Avatar/Avatar";

export default function Desktop() {
  return (
    <div className="hidden w-full Container lg:flex items-center justify-between">
      <div className="w-1/2">
        <Search
          name="HeaderSearch"
          id="HeaderSearch"
          placeHolder="جستجو در ویترینو ..."
          className="focus-within:border-gray-300 focus-within:shadow"
        />
      </div>

      <div className="w-1/3 flex items-center justify-end gap-5">
        <Link href="" className="h-max w-max block">
          <Home color="var(--primary-color)" />
        </Link>
        <Link href="" className="h-max w-max block">
          <MessageSquareMore className="hover:text-(--secondary-color)" />
        </Link>
        <Link href="" className="h-max w-max block">
          <Bell className="hover:text-(--secondary-color)" />
        </Link>

        <Avatar />
      </div>
    </div>
  );
}
