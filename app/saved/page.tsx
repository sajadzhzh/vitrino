import Post from "@/Components/Post/Post";
import { Bookmark } from "lucide-react";

export default function SavedMessagePage() {
  return (
    <div className="w-full h-[90svh] min-w-80 overflow-scroll scrollbar-none p-2 mt-20 lg:mt-0">
      <div className="">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="flex items-center gap-1">
            <Bookmark fill="var(--font-color)" /> پست‌های ذخیره‌شده
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Post saved />
          <Post saved />
          <Post saved />
          <Post saved />
        </div>
      </div>
    </div>
  );
}
