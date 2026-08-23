import Image from "next/image";
import avatar from "@/public/4.jpg";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

export default function Avatar({
  userName,
  href,
  online,
  hover,
  veryfied,
  onClick,
}: {
  userName?: string;
  href?: string;
  online?: boolean;
  hover?: boolean;
  veryfied?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Link
      href={href || ""}
      onClick={onClick}
      className={
        hover
          ? "group w-full flex gap-2 items-center rounded-3xl border border-white/0 hover:shadow-xl hover:border-gray-400/25 "
          : "w-max flex gap-2 items-center"
      }
    >
      <Image
        src={avatar}
        alt="avatar"
        width={100}
        height={100}
        className="size-10 min-w-10 rounded-full"
      />

      {userName && (
        <div className="text-[14px] group-hover:-translate-y-px">{userName}</div>
      )}

      {veryfied && <BadgeCheck className="text-blue-500 min-w-5" />}

      {online && (
        <div className="ms-auto border-3 border-green-500 rounded-full"></div>
      )}
    </Link>
  );
}
