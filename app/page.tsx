import Post from "@/Components/Post/Post";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-2 min-w-80 overflow-scroll scrollbar-none max-h-svh lg:max-h-118 p-2 mt-20 lg:mt-0">
      <Post />
      <Post />
      <Post />
    </div>
  );
}
