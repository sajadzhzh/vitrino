"use client";

import Image from "next/image";
import Link from "next/link";
import post from "@/public/4.jpg";
import { useState } from "react";
import ShowPost from "../ShowPost";

export default function ProfilePost() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Link
        onClick={() => setOpen(true)}
        href=""
        className="min-w-full group max-h-100 hover:bg-(--shadow) rounded-2xl"
      >
        <Image
          src={post}
          width={500}
          height={500}
          alt="post_number"
          className="rounded-xl mx-auto group-hover:scale-102"
        />
      </Link>

      <ShowPost open={open} setOpen={setOpen} />
    </>
  );
}
