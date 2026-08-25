import Post from "@/Components/Post/Post";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 min-w-80 overflow-scroll scrollbar-none h-[90svh] p-2 mt-20 lg:mt-0">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
