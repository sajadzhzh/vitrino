import Button from "../Button/Button";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./Post.css";
import InputImage from "../Inputs/Image";
import TextArea from "../Inputs/Textarea";

export default function CreatePost({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const createPostRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<File[]>([]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        createPostRef.current &&
        !createPostRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [open]);
  return (
    <div
      className={`${!open && "hidden -showPost"} showPost w-full flex items-center justify-center absolute h-svh right-0 top-0 bg-gray-500/50 z-999`}
    >
      <div className="absolute w-20 top-5 left-10">
        <Button
          onClick={() => setOpen(false)}
          theme="normal"
          className="group bg-red-500/25 hover:bg-red-400/25"
        >
          <X className="text-white group-hover:text-red-500" />
        </Button>
      </div>
      <div
        className="Container max-h-[80svh] overflow-scroll scrollbar-none w-[90vw] lg:w-1/2"
        ref={createPostRef}
      >
        <form className="space-y-5">
          <InputImage
            value={images}
            onChange={setImages}
            maxFiles={5}
            maxSize={10}
            label="تصاویر پست"
          />

          <div>
            <label htmlFor="createPost">توضیحات</label>
            <TextArea name="createPost" id="createPost" />
          </div>

          <Button theme="primary">ایجاد پست</Button>
        </form>
      </div>
    </div>
  );
}
