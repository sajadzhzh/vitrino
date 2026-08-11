import { Aperture, Bell, Bookmark, Compass, Home, MessageSquareMore, Settings, User2 } from "lucide-react";
import Link from "next/link";

export default function MenuItems(){
    return(
        <div className="w-full mt-2 flex flex-col gap-2">
            <Link href="" className="w-full flex gap-2 items-center side_menu_item active">
                <Home size={20}/>
                خانه
            </Link>
            <Link href="" className="w-full flex gap-2 items-center side_menu_item">
                <Compass size={20}/>
                کاوش
            </Link>
            <Link href="" className="w-full flex gap-2 items-center side_menu_item">
                <Aperture size={20}/>
                پست‌ها
            </Link>
            <Link href="" className="w-full flex gap-2 items-center side_menu_item">
                <MessageSquareMore size={20}/>
                پیام‌ها
            </Link>
            <Link href="" className="w-full flex gap-2 items-center side_menu_item">
                <Bell size={20}/>
                اعلانات
            </Link>
            <Link href="" className="w-full flex gap-2 items-center side_menu_item">
                <Bookmark size={20}/>
                پست‌های ذخیره شده
            </Link>
            <Link href="" className="w-full flex gap-2 items-center side_menu_item">
                <User2 size={20}/>
                پروفایل
            </Link>
            <Link href="" className="w-full flex gap-2 items-center side_menu_item">
                <Settings size={20}/>
                تنظیمات
            </Link>
        </div>
    )
}