"use client";

import { useEffect, useState } from "react";
import MessagePageMenu from "./Menu";
import MessageBox from "./MessageBox";

type User = {
  userName: string;
};

export default function MessagePageModifier() {
  const [data, setData] = useState<User | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className="w-full flex gap-2 h-[85svh] lg:h-116">
      {(!isMobile || !data) && (
        <MessagePageMenu onClick={(userName) => setData({ userName })} />
      )}

      {(!isMobile || data) && (
        <MessageBox data={data} onClose={() => setData(null)} />
      )}
    </div>
  );
}
