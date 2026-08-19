import Image from "next/image";
import avatar from "@/public/4.jpg";
import Link from "next/link";

export default function Avatar({ userName }: { userName?: string }) {
  return (
    <Link
      href=""
      className={
        userName
          ? "group w-full flex gap-2 items-center rounded-3xl border border-white/0 hover:shadow-xl hover:border-gray-400/25 "
          : "w-max flex items-center"
      }
    >
      <Image
        src={avatar}
        alt="avatar"
        width={100}
        height={100}
        className="size-8 rounded-full"
      />

      {userName && (
        <>
          <div className="grow group-hover:-translate-y-px">{userName}</div>

          <div className="ms-auto border-3 border-green-500 rounded-full"></div>
        </>
      )}
    </Link>
  );
}
