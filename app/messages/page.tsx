import MessagePageModifier from "@/Components/Messages/Index";

export default function MessagesPage(){
    return(
        <div className="w-full min-w-80 overflow-scroll scrollbar-none max-h-svh lg:max-h-120 p-2 mt-20 lg:mt-0">
            <div className="hidden lg:block">
                <MessagePageModifier />
            </div>
        </div>
    )
}