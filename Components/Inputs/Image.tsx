"use client";

import { useEffect, useRef, useState } from "react";
import { ImagePlus, X } from "lucide-react";

type InputImageProps = {
  value?: File[];
  onChange?: (files: File[]) => void;
  maxFiles?: number;
  maxSize?: number; // MB
  label?: string;
  name?: string;
  disabled?: boolean;
};

export default function InputImage({
  value = [],
  onChange,
  maxFiles = 5,
  maxSize = 10,
  label = "تصاویر",
  name = "images",
  disabled = false,
}: InputImageProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<File[]>(value);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setFiles(value);
  }, [value]);

  useEffect(() => {
    const urls = files.map((file) => URL.createObjectURL(file));

    setPreviews(urls);

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  const updateFiles = (newFiles: File[]) => {
    setFiles(newFiles);
    onChange?.(newFiles);
  };

  const addFiles = (selectedFiles: FileList | null) => {
    if (!selectedFiles || disabled) return;

    const validFiles = Array.from(selectedFiles).filter((file) => {
      const isImage = file.type.startsWith("image/");
      const isValidSize = file.size <= maxSize * 1024 * 1024;

      return isImage && isValidSize;
    });

    const mergedFiles = [...files, ...validFiles].slice(0, maxFiles);

    updateFiles(mergedFiles);
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);

    updateFiles(newFiles);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();

    setIsDragging(false);

    if (disabled) return;

    addFiles(event.dataTransfer.files);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[13px]">{label}</label>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {previews.map((preview, index) => (
          <div
            key={`${preview}-${index}`}
            className="group relative aspect-square overflow-hidden rounded-xl border border-gray-300 bg-(--main-background)"
          >
            <img
              src={preview}
              alt={`تصویر ${index + 1}`}
              className="h-full w-full object-cover"
            />

            <button
              type="button"
              onClick={() => removeFile(index)}
              className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-(--main-background) text-red-500 opacity-0 backdrop-blur-sm transition group-hover:opacity-100 hover:bg-red-500/50"
            >
              <X className="size-4" />
            </button>

            {index === 0 && (
              <span className="absolute bottom-2 right-2 rounded-md bg-(--main-background) px-2 py-1 text-[10px] text-white backdrop-blur-sm">
                تصویر اصلی
              </span>
            )}
          </div>
        ))}
      </div>

      {files.length < maxFiles && (
        <label
          htmlFor={name}
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`
            group flex cursor-pointer flex-col items-center justify-center
            gap-3 rounded-xl border-2 border-dashed py-8
            transition-all
            ${
              isDragging
                ? "border-(--primary-color) bg-(--main-background)"
                : "border-gray-600 bg-(--main-background) hover:border-(--primary-color) hover:bg-gray-200"
            }
            ${disabled ? "cursor-not-allowed opacity-50" : ""}
          `}
        >
          <div className="flex size-14 items-center justify-center rounded-2xl bg-(--secondary-color) text-(--primary-color) transition group-hover:scale-105">
            <ImagePlus className="size-6" />
          </div>

          <div className="text-center">
            <p className="font-medium">
              تصاویر را اینجا رها کنید
            </p>

            <p className="mt-1 text-sm text-gray-500">
              یا برای انتخاب تصاویر کلیک کنید
            </p>

            <p className="mt-2 text-xs text-gray-600">
              JPG, PNG, WEBP تا {maxSize} مگابایت
            </p>

            <p className="mt-1 text-xs text-gray-600">
              حداکثر {maxFiles} تصویر
            </p>
          </div>

          <input
            ref={inputRef}
            id={name}
            name={name}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            disabled={disabled}
            onChange={(event) => {
              addFiles(event.target.files);
              event.target.value = "";
            }}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
}