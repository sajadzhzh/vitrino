import Avatar from "@/Components/Avatar/Avatar";
import Button from "@/Components/Button/Button";
import Image from "next/image";
import post from "@/public/4.jpg";
import Link from "next/link";
import { Heart, MessageSquareMore, Send } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-2 min-w-80 overflow-scroll scrollbar-none max-h-svh lg:max-h-118 p-2 mt-20 lg:mt-0">
      <div className="w-full max-h-max Container flex flex-col gap-2 outline outline-white hover:outline-gray-400">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Avatar userName="Sajadzhzh" veryfied />
          </div>

          <div className="w-1/4">
            <Button theme="primary">دنبال کردن</Button>
          </div>
        </div>
        <Link
          href=""
          className="min-w-full group max-h-100 hover:bg-gray-200 rounded-2xl"
        >
          <Image
            src={post}
            width={500}
            height={500}
            alt="post_number"
            className="rounded-xl mx-auto group-hover:scale-102"
          />
        </Link>

        <p className="text-justify text-[13px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          dignissimos deserunt voluptatem, inventore magnam enim! Vel omnis quo
          tempore dignissimos maiores illum voluptatibus pariatur voluptas,
          quaerat ducimus nam tempora iste.
        </p>

        <div className="w-full flex gap-3">
          <Heart />
          <MessageSquareMore />
          <Send />
        </div>
      </div>

      <div className="w-full max-h-max Container flex flex-col gap-2 outline outline-white hover:outline-gray-400">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Avatar userName="Sajadzhzh" veryfied />
          </div>

          <div className="w-1/4">
            <Button theme="primary">دنبال کردن</Button>
          </div>
        </div>
        <Link
          href=""
          className="min-w-full group max-h-100 hover:bg-gray-200 rounded-2xl"
        >
          <Image
            src={post}
            width={500}
            height={500}
            alt="post_number"
            className="rounded-xl mx-auto group-hover:scale-102"
          />
        </Link>

        <p className="text-justify text-[13px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          dignissimos deserunt voluptatem, inventore magnam enim! Vel omnis quo
          tempore dignissimos maiores illum voluptatibus pariatur voluptas,
          quaerat ducimus nam tempora iste.
        </p>

        <div className="w-full flex gap-3">
          <Heart />
          <MessageSquareMore />
          <Send />
        </div>
      </div>
      <div className="w-full max-h-max Container flex flex-col gap-2 outline outline-white hover:outline-gray-400">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Avatar userName="Sajadzhzh" veryfied />
          </div>

          <div className="w-1/4">
            <Button theme="primary">دنبال کردن</Button>
          </div>
        </div>
        <Link
          href=""
          className="min-w-full group max-h-100 hover:bg-gray-200 rounded-2xl"
        >
          <Image
            src={post}
            width={500}
            height={500}
            alt="post_number"
            className="rounded-xl mx-auto group-hover:scale-102"
          />
        </Link>

        <p className="text-justify text-[13px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          dignissimos deserunt voluptatem, inventore magnam enim! Vel omnis quo
          tempore dignissimos maiores illum voluptatibus pariatur voluptas,
          quaerat ducimus nam tempora iste.
        </p>

        <div className="w-full flex gap-3">
          <Heart />
          <MessageSquareMore />
          <Send />
        </div>
      </div>
    </div>
  );
}
