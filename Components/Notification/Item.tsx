import { User2, Heart, MessageSquareMore } from "lucide-react";
import Avatar from "../Avatar/Avatar";

const variants = {
  follow: {
    bg: "bg-(--secondary-color)",
    text: "text-(--primary-color)",
    icon: User2,
    message: "شما را دنبال کرد.",
  },
  like: {
    bg: "bg-red-200",
    text: "text-red-500",
    icon: Heart,
    message: "پست شما را لایک کرد",
  },
  message: {
    bg: "bg-blue-200",
    text: "text-blue-500",
    icon: MessageSquareMore,
    message: "پیامی برای شما فرستاد",
  },
};

type notificationType = "follow" | "like" | "message";

export default function NotificationItem({
  type,
  user,
}: {
  type: notificationType;
  user: string;
}) {
  const variant = variants[type];
  return (
    <div className="Container flex items-center gap-2 border border-gray-200 hover:border-white hover:-translate-y-0.5">
      <Avatar />

      <div className={`p-2 rounded-lg ${variant.bg}`}>
        <variant.icon className={`${variant.text}`} />
      </div>

      <p className="text-[14px]">{user} {variant.message}</p>
    </div>
  );
}
