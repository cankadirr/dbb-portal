// src/components/ui/Progress.tsx
import React from "react";

interface ProgressProps {
  value: number; // 0-100 arası
}

export const Progress: React.FC<ProgressProps> = ({ value }) => (
  <div className="w-full bg-gray-300 rounded-full h-4">
    <div
      className="bg-primary h-4 rounded-full transition-width duration-300"
      style={{ width: `${value}%` }}
    />
  </div>
);
