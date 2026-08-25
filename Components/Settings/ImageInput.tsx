"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Camera, X } from "lucide-react";

type ImageInputProps = {
  currentImage?: string;
  onChange?: (file: File | null) => void;
};

export default function ImageInput({
  currentImage,
  onChange,
}: ImageInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(
    currentImage || null
  );

  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleChange = (file: File | undefined) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview((prev) => {
      if (prev?.startsWith("blob:")) {
        URL.revokeObjectURL(prev);
      }

      return imageUrl;
    });

    onChange?.(file);
  };

  const removeImage = () => {
    setPreview(null);
    onChange?.(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="relative size-24 min-w-24">
        <div className="relative size-full overflow-hidden rounded-full border-2 border-white shadow-md">
          {preview ? (
            <Image
              src={preview}
              alt="Profile image"
              fill
              unoptimized
              className="object-cover"
            />
          ) : (
            <div className="flex size-full items-center justify-center bg-(--secondary-color)">
              <Camera className="size-8 text-(--primary-color)" />
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="
            absolute bottom-0 inset-e-0
            flex size-8 items-center justify-center
            rounded-full
            bg-(--primary-color)
            text-white
            shadow-md
            transition
            hover:scale-105
          "
          aria-label="تغییر تصویر"
        >
          <Camera size={16} />
        </button>

        {preview && (
          <button
            type="button"
            onClick={removeImage}
            className="
              absolute -top-1 -inset-s-1
              flex size-6 items-center justify-center
              rounded-full
              bg-red-500
              text-white
              shadow
              transition
              hover:scale-105
            "
            aria-label="حذف تصویر"
          >
            <X size={13} />
          </button>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <span className="font-semibold">
          تصویر پروفایل
        </span>

        <span className="text-xs opacity-60">
          برای تغییر تصویر روی آیکون دوربین کلیک کنید
        </span>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="
            mt-1
            w-max
            text-sm
            font-medium
            text-(--primary-color)
            hover:underline
          "
        >
          انتخاب تصویر جدید
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={(e) => handleChange(e.target.files?.[0])}
      />
    </div>
  );
}