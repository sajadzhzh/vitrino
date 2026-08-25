import { ArrowLeft } from "lucide-react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Search from "../Inputs/Search";

type User = {
  userName: string;
};

export default function MessageBox({
  data,
  onClose,
}: {
  data: User | null;
  onClose: () => void;
}) {
  return (
    <div className="w-full lg:w-3/4 h-[85svh] Container border border-gray-200 flex flex-col overflow-hidden">
      {data ? (
        <>
          <div className="w-full flex items-center shrink-0 bg-(--container-background) border-b border-gray-200 p-2">
            <Avatar userName={data.userName} veryfied />

            <div className="w-15 ms-auto">
              <Button theme="normal" onClick={onClose}>
                <ArrowLeft />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-none p-3 flex flex-col gap-2">
            <div className="shadow-md border border-gray-300 w-max max-w-2/3 py-1 px-2 text-[13px] rounded">
              پیام شما
            </div>

            <div className="ms-auto shadow-md border border-gray-400 w-max max-w-2/3 py-1 px-2 text-[13px] rounded">
              پیام مخاطب
            </div>
          </div>

          <div className="w-full shrink-0 bg-(--container-background) border-t border-gray-200 p-2">
            <form className="w-full flex gap-2">
              <div className="lg:w-1/8 shrink-0">
                <Button theme="primary">ارسال</Button>
              </div>

              <Search
                placeHolder="پیام خود را وارد کنید ..."
                id="sendMessage"
                name="sendMessage"
              />
            </form>
          </div>
        </>
      ) : (
        <div className="h-10 flex items-center justify-center text-sm text-gray-500">
          یک گفتگو را انتخاب کنید
        </div>
      )}
    </div>
  );
}
