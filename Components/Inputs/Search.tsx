import { SearchIcon } from "lucide-react";

export default function Search({
  name,
  id,
  placeHolder,
  className,
  search,
}: {
  name: string;
  id: string;
  placeHolder?: string;
  className?: string;
  search?: boolean;
}) {
  return (
    <div
      className={`w-full relative border border-gray-200 bg-(--input-background) rounded-2xl ${className}`}
    >
      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeHolder}
        className={`w-full py-2 ps-9 outline-0 placeholder:text-[13px] text-sm`}
      ></input>

      {search && (
        <div className="absolute top-2 right-2">
          <SearchIcon size={20} />
        </div>
      )}
    </div>
  );
}
