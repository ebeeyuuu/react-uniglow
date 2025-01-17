import type React from "react"
import Image from "next/image";

interface AvatarProps {
  src?: string
  alt?: string
  fallback: string
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback }) => {
  return (
    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
      {src ? (
        <Image className="w-full h-full object-cover" src={src || "/placeholder.svg"} alt={alt || "Avatar"} fill />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-indigo-500 text-white text-sm font-medium">
          {fallback}
        </div>
      )}
    </div>
  )
}

export default Avatar

