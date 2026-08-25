import Image from "next/image";
import Button from "../Button/Button";
import post from "@/public/4.jpg";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import "./Post.css"

export default function ShowPost({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const postRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (postRef.current && !postRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <div
      className={`${!open && "hidden -showPost"} showPost w-full flex items-center justify-center absolute h-svh right-0 top-0 bg-gray-500/50`}
    >
      <div className="absolute w-20 top-5 left-10">
        <Button
          onClick={() => setOpen(false)}
          theme="normal"
          className="group bg-red-500/25 hover:bg-red-400/25"
        >
          <X className="text-white group-hover:text-red-500" />
        </Button>
      </div>
      <Image
        ref={postRef}
        src={post}
        width={500}
        height={500}
        alt="post_number"
        className="rounded-xl mx-auto group-hover:scale-102"
      />
    </div>
  );
}
