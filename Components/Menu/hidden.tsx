import Link from "next/link";
import MenuItems from "./items";
import Image from "next/image";
import logo from "@/public/Logo.png";
import Button from "../Button/Button";
import { Plus } from "lucide-react";
import Avatar from "../Avatar/Avatar";

export default function HiddenMenu() {
  return (
    <div className="hidden hidden_menu_container bg-black/25">
      <div className="hidden_menu">
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
