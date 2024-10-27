import { useState } from "react";
import "./ImageUploader.scss";
import clsx from "clsx";

interface ImageUploaderProps {
  imageUrl: string;
  onImageUpload: (imageUrl: string) => void;
}

function ImageUploader({ imageUrl, onImageUpload }: ImageUploaderProps) {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        onImageUpload(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  return (
    <div
      className={clsx("drop-area", dragging && "dragging")}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p>Drag & drop an image here or click to upload</p>
      <input type="file" accept="image/*" onChange={handleFileInputChange} />
      {imageUrl && (
        <img src={imageUrl} alt="Profile Image" className="profile-image" />
      )}
    </div>
  );
}

export default ImageUploader;
