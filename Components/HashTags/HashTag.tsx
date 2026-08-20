import Link from "next/link"
import "./HashTag.css"
import { ChevronLeft } from "lucide-react"

export default function HashTag(){
    return(
        <Link href="" className="hashTag group">
            <div className="flex flex-col gap-2">
                <h5 className="text-[14px]">#لورم_ایپسوم</h5>
                <p className="text-[12px] text-gray-400">12.5K پست</p>
            </div>
            <ChevronLeft className="text-gray-400 group-hover:text-(--font-color)"/>
        </Link>
    )
}