import HashTag from "@/Components/HashTags/HashTag";
import "./explore.css";

export default function Explore() {
  return (
    <div className="w-full flex flex-col gap-2 min-w-80 overflow-scroll scrollbar-none max-h-svh lg:max-h-118 p-2 mt-20 lg:mt-0">
      <div className="w-full flex flex-col gap-2">
        <h2>🔥 موضوعات پرطرفدار</h2>
        <div className="max-w-full flex gap-2 overflow-x-scroll carousel">
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
        </div>
      </div>
    </div>
  );
}
