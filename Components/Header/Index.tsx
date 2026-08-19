"use client";

import { useEffect, useState } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import HiddenMenu from "../Menu/hidden";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hiddenMenuCon = document.getElementById("hidden_menu");
    const hiddenMenu = hiddenMenuCon?.firstChild as HTMLElement;

    if (hiddenMenuCon && hiddenMenu) {
      if (open) {
        hiddenMenuCon.classList.remove("hidden");
        hiddenMenu.style.animation = "";
      } else {
        hiddenMenu.style.animation = "menuClose 0.5s";
        setTimeout(() => {
          hiddenMenuCon.classList.add("hidden");
        }, 450);
      }
    }
  }, [open]);
  return (
    <>
      <Desktop />
      <Mobile setOpen={() => setOpen(true)} />
      <HiddenMenu onClose={() => setOpen(false)} />
    </>
  );
}
