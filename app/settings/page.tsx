"use client";

import Button from "@/Components/Button/Button";
import Search from "@/Components/Inputs/Search";
import TextArea from "@/Components/Inputs/Textarea";
import ImageInput from "@/Components/Settings/ImageInput";

export default function SettingsPage() {
  return (
    <div className="w-full flex flex-col gap-2 h-[90svh] min-w-80 overflow-scroll scrollbar-none p-2 mt-20 lg:mt-0">
      <div className="Container border border-gray-200">
        <ImageInput
          currentImage="/4.jpg"
          onChange={(file) => {
            console.log(file);
          }}
        />
      </div>
      <div className="Container border border-gray-200">
        <form className="w-full flex flex-col gap-2">
          <div>
            <label htmlFor="userName" className="text-[12px]">
              نام کاربری
            </label>
            <Search
              id="userName"
              name="userName"
              className="border focus:border-white"
            />
          </div>
          <div>
            <label htmlFor="showName" className="text-[12px]">
              نام نمایشی
            </label>
            <Search
              id="showName"
              name="showName"
              className="border focus:border-white"
            />
          </div>
          <div>
            <label htmlFor="bio" className="text-[12px]">
              بیوگرافی
            </label>
            <TextArea
              id="bio"
              name="bio"
              className="border focus:border-white"
            />
          </div>

          <Button theme="primary" type="submit" className="md:max-w-1/2">
            ثبت تغییرات
          </Button>
        </form>
      </div>
    </div>
  );
}
