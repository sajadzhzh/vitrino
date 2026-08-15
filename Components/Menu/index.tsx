import SideMenu from "./Side";
import HiddenMenu from "./hidden";
import "./menu.css";

export default function Menu() {
  return (
    <div>
      <SideMenu />

      <HiddenMenu />
    </div>
  );
}
