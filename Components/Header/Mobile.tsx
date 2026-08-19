"use client";

import Image from "next/image";
import logo from "@/public/Logo.png";
import Link from "next/link";
import Search from "../Inputs/Search";
import Button from "../Button/Button";
import { Menu } from "lucide-react";

export default function Mobile({
  setOpen,
}: {
  setOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="w-full min-w-80 lg:hidden fixed top-0 left-0 right-0 Container bg-white shadow-md">
      <div className="w-full flex justify-between items-center">
        <Link href="" className="w-max flex justify-center">
          <Image
            src={logo}
            alt="vitrino"
            width={100}
            height={100}
            className="size-10"
          />
        </Link>

        <div className="w-1/2">
          <Search
            name="HeaderSearch"
            id="HeaderSearch"
            placeHolder="جستجو در ویترینو ..."
            className="focus-within:border-gray-300 focus-within:shadow"
          />
        </div>

        <div>
          <Button onClick={setOpen} theme="primary">
            <Menu />
          </Button>
        </div>
      </div>
    </div>
  );
}