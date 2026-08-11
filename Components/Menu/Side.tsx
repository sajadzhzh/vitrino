import Image from "next/image";
import logo from "@/public/Logo.png";
import Link from "next/link";
import MenuItems from "./items";

export default function SideMenu() {
  return (
    <div className="side_menu">
      <Link href="" className="w-full flex justify-center">
        <Image src={logo} alt="vitrino" width={100} height={100} className="size-1/4" />
      </Link>

      <MenuItems />
    </div>
  );
}
