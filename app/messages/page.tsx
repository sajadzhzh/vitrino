import MessagePageModifier from "@/Components/Messages/Index";

export default function MessagesPage() {
  return (
    <div className="w-full min-w-80 overflow-scroll scrollbar-none h-[90svh] p-2 mt-20 lg:mt-0">
      <MessagePageModifier />
    </div>
  );
}
