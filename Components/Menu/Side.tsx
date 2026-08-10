import Image from "next/image";
import logo from "@/public/Logo.png";

export default function SideMenu() {
  return (
    <div className="side_menu">
      <Image src={logo} alt="vitrino" width={100} height={100} />
    </div>
  );
}
