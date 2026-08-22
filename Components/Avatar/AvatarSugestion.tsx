import Image from "next/image";
import avatar from "@/public/4.jpg";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

export default function AvatarSugestion({
  userName,
  veryfied,
}: {
  userName: string;
  veryfied?: boolean;
}) {
  return (
    <Link
      href=""
      className="group min-w-full sm:min-w-50 bg-(--container-background) sm:flex-[0_0_200px] flex gap-2 items-center rounded-3xl border border-gray-200 hover:shadow-[0_2px_8px_var(--shadow)] hover:border-white "
    >
      <Image
        src={avatar}
        alt="avatar"
        width={100}
        height={100}
        className="size-10 min-w-10 rounded-full"
      />

      <div className="grow flex flex-col gap-1">
        <div className="grow group-hover:-translate-y-px">سجاد ژیانجو</div>
        <p className="text-[11px] text-gray-400">{userName}@</p>
      </div>

      {veryfied && <BadgeCheck className="text-blue-500" />}
    </Link>
  );
}
