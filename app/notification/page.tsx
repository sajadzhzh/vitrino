import NotificationItem from "@/Components/Notification/Item";
import { Bell } from "lucide-react";

export default function NotificationPage() {
  return (
    <div className="w-full flex flex-col gap-2 min-w-80 overflow-scroll scrollbar-none max-h-svh lg:max-h-118 p-2 mt-20 lg:mt-0">
      <h1 className="flex items-center gap-1">
        <Bell fill="yellow"/> اعلانات شما
      </h1>

      <div className="w-full h-[90svh] overflow-scroll scrollbar-none p-2 flex flex-col gap-1">
        <NotificationItem user="sajadzhzh" type="follow"/>
        <NotificationItem user="Sina" type="like"/>
        <NotificationItem user="Sara" type="message"/>
        <NotificationItem user="sajadzhzh" type="follow"/>
        <NotificationItem user="Sina" type="like"/>
        <NotificationItem user="Sara" type="message"/>
        <NotificationItem user="sajadzhzh" type="follow"/>
        <NotificationItem user="Sina" type="like"/>
        <NotificationItem user="Sara" type="message"/>
        <NotificationItem user="sajadzhzh" type="follow"/>
        <NotificationItem user="Sina" type="like"/>
        <NotificationItem user="Sara" type="message"/>
        <NotificationItem user="sajadzhzh" type="follow"/>
        <NotificationItem user="Sina" type="like"/>
        <NotificationItem user="Sara" type="message"/>
      </div>
    </div>
  );
}
