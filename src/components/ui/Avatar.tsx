// src/components/ui/Avatar.tsx
import React from "react";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  size = 40,
  className = "",
}) => (
  <img
    src={src}
    alt={alt}
    width={size}
    height={size}
    className={`rounded-full object-cover ${className}`}
  />
);
