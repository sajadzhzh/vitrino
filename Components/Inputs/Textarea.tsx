import { SearchIcon } from "lucide-react";

export default function TextArea({
  name,
  id,
  placeHolder,
  className,
}: {
  name: string;
  id: string;
  placeHolder?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full relative border border-gray-300 bg-(--input-background) rounded-2xl ${className}`}
    >
      <textarea
        rows={5}
        name={name}
        id={id}
        placeholder={placeHolder}
        className={`w-full py-2 ps-9 outline-0 placeholder:text-[13px] text-sm`}
      ></textarea>
    </div>
  );
}
