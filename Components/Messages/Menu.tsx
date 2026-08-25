import Avatar from "../Avatar/Avatar";

export default function MessagePageMenu({onClick}:{onClick: (userName: string) => void;}) {
  return (
    <div className="w-full lg:w-1/4 h-[85svh] overflow-y-scroll scrollbar-none flex flex-col gap-2 Container border border-gray-200">
      <h2>لیست گفتگو های شما</h2>
      <Avatar
        userName="Sajadzhzh"
        onClick={() => onClick("Sajadzhzh")}
        online
        veryfied
        hover
      />
      <Avatar
        userName="Sina"
        onClick={() => onClick("Sina")}
        veryfied
        hover
      />
    </div>
  );
}
