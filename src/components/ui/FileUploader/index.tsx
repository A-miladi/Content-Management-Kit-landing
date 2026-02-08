"use client";
import React, { FC, useRef, useState } from "react";
import { cn } from "@/utils";
import Image from "next/image";

type FileUploadProps = {
  label?: React.ReactNode;
  accept?: string;
  onFileSelect: (file: File) => void;
};

const FileUpload: FC<FileUploadProps> = ({
  label = "",
  accept = "",
  onFileSelect,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      onFileSelect(selectedFile);
    }
  };
  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);

    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile);
      onFileSelect(droppedFile);
    }
  };

  return (
    <div className="w-full items-center justify-center flex">
      <div
        className={cn(
          "flex h-24 w-24 md:h-32 md:w-full md:mt-6  cursor-pointer items-center justify-center rounded-lg border border-neutral-400 bg-transparent text-center",
          dragActive ? "border-neutral-300" : "",
          "relative"
        )}
        onClick={handleClick}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept={accept}
          onChange={handleFileChange}
        />
        {!file && (
          <p
            className="flex w-full items-center justify-center truncate text-neutral-300 text-xs md:text-base"
            dir="ltr"
          >
            {label}
          </p>
        )}
        {file && file.type.startsWith("image/") && (
          <Image
            src={URL.createObjectURL(file)}
            alt="upload logo"
            className="h-full w-full rounded"
            width={100}
            height={100}
          />
        )}
      </div>
    </div>
  );
};

export default FileUpload;
