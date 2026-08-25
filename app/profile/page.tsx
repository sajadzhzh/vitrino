import Avatar from "@/Components/Avatar/Avatar";
import Button from "@/Components/Button/Button";
import ProfilePost from "@/Components/Post/profile/ProfilePost";
import Followers from "@/Components/Profile/Followers";
import { BadgeCheck } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="w-full h-[90svh] min-w-80 overflow-scroll scrollbar-none p-2 mt-20 lg:mt-0">
      <div className="w-full h-max Container border border-gray-200 flex flex-col md:flex-row items-center gap-2">
        <div className="w-full md:w-1/6 flex items-center">
          <Avatar className="size-35 rounded-full" />
          <div className="flex md:hidden w-2/4">
            <Followers />
          </div>
        </div>

        <div className="w-full md:w-5-6 flex flex-col justify-start gap-4">
          <div className="flex gap-2">
            <h2 className="text-[20px]">Sajadzhzh</h2>
            <BadgeCheck className="text-blue-500 min-w-5" />
          </div>
          <p className="text-justify text-[14px] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            rerum pariatur dolore animi. Repudiandae vitae laboriosam, natus
            reprehenderit enim maiores!
          </p>
          <div className="hidden md:block">
            <Followers />
          </div>
          <div className="w-full flex gap-2">
            <Button theme="primary">دنبال کردن</Button>
            <Button theme="normal" className="border border-gray-300">
              پیام
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
      </div>
    </div>
  );
}
