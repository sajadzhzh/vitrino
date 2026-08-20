import Image from "next/image";
import logo from "@/public/Logo.png";
import Link from "next/link";
import MenuItems from "./items";
import Button from "../Button/Button";
import { Plus } from "lucide-react";
import Avatar from "../Avatar/Avatar";

export default function SideMenu() {
  return (
    <div className="side_menu Container">
      <Link href="/" className="w-full flex justify-center">
        <Image
          src={logo}
          alt="vitrino"
          width={100}
          height={100}
          className="size-1/4"
        />
      </Link>

      <div className="my-4">
        <MenuItems />
      </div>

      <Button theme="primary">
        <Plus />
        پست جدید
      </Button>

      <div className="my-4">
        <Avatar userName="Sajadzhzh" online hover veryfied />
      </div>
    </div>
  );
}
