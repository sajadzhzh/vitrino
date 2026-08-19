"use client";

import Link from "next/link";
import MenuItems from "./items";
import Image from "next/image";
import logo from "@/public/Logo.png";
import Button from "../Button/Button";
import { Plus } from "lucide-react";
import Avatar from "../Avatar/Avatar";
import { useEffect, useRef } from "react";

export default function HiddenMenu({ onClose }: { onClose: () => void }) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="hidden hidden_menu_container bg-black/25" id="hidden_menu">
      <div className="hidden_menu" ref={menuRef}>
        <Link href="" className="w-full flex justify-center">
          <Image
            src={logo}
            alt="vitrino"
            width={100}
            height={100}
            className="size-1/4"
          />
        </Link>

        <div className="my-2">
          <MenuItems />
        </div>

        <Button theme="primary">
          <Plus />
          پست جدید
        </Button>

        <div className="my-2">
          <Avatar userName="Sajadzhzh" />
        </div>
      </div>
    </div>
  );
}