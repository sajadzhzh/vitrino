import HashTag from "@/Components/HashTags/HashTag";
import Carousel from "@/Components/Carousel/Carousel";
import AvatarSugestion from "@/Components/Avatar/AvatarSugestion";

export default function Explore() {
  return (
    <div className="w-full flex flex-col gap-8 min-w-80 overflow-scroll scrollbar-none max-h-svh lg:max-h-118 p-2 mt-20 lg:mt-0">
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
          <AvatarSugestion
          userName="Sajadzhzh"
          veryfied
          />
          <AvatarSugestion
          userName="Sajadzhzh"
          veryfied
          />
          <AvatarSugestion
          userName="Sajadzhzh"
          veryfied
          />
          <AvatarSugestion
          userName="Sajadzhzh"
          veryfied
          />
          <AvatarSugestion
          userName="Sajadzhzh"
          veryfied
          />
          <AvatarSugestion
          userName="Sajadzhzh"
          veryfied
          />
          <AvatarSugestion
          userName="Sajadzhzh"
          veryfied
          />
          <AvatarSugestion
          userName="Sajadzhzh"
          veryfied
          />
        </Carousel>
      </div>
    </div>
  );
}
