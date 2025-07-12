// src/components/ui/Badge.tsx
import React from "react";

interface BadgeProps {
  text: string;
  variant?: "default" | "success" | "warning" | "error";
}

const VARIANT_CLASSES = {
  default: "bg-gray-200 text-gray-800",
  success: "bg-green-200 text-green-800",
  warning: "bg-yellow-200 text-yellow-800",
  error: "bg-red-200 text-red-800",
};

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = "default",
}) => (
  <span
    className={`inline-block px-2 py-1 rounded text-xs font-semibold ${VARIANT_CLASSES[variant]}`}
  >
    {text}
  </span>
);