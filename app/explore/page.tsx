import HashTag from "@/Components/HashTags/HashTag";
import Carousel from "@/Components/Carousel/Carousel";
import AvatarSugestion from "@/Components/Avatar/AvatarSugestion";
import { Heart } from "lucide-react";
import Post from "@/Components/Post/Post";

export default function Explore() {
  return (
    <div className="w-full flex flex-col gap-8 min-w-80 overflow-scroll scrollbar-none h-[90svh] p-2 mt-20 lg:mt-0">
      <div className="w-full flex flex-col gap-2">
        <h2>🔥 موضوعات پرطرفدار</h2>
        <Carousel>
          <HashTag />
          <HashTag />
          <HashTag />
          <HashTag />
          <HashTag />
          <HashTag />
          <HashTag />
          <HashTag />
          <HashTag />
          <HashTag />
        </Carousel>
      </div>

      <div className="w-full flex flex-col gap-2">
        <h2>⭐ کاربران محبوب</h2>
        <Carousel>
          <AvatarSugestion userName="Sajadzhzh" veryfied />
          <AvatarSugestion userName="Sajadzhzh" veryfied />
          <AvatarSugestion userName="Sajadzhzh" veryfied />
          <AvatarSugestion userName="Sajadzhzh" veryfied />
          <AvatarSugestion userName="Sajadzhzh" veryfied />
          <AvatarSugestion userName="Sajadzhzh" veryfied />
          <AvatarSugestion userName="Sajadzhzh" veryfied />
          <AvatarSugestion userName="Sajadzhzh" veryfied />
        </Carousel>
      </div>

      <div className="w-full flex flex-col gap-2">
        <h2 className="flex items-center gap-1">
          <Heart size={18} fill="red" color="red" />
          پست‌های محبوب
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}
