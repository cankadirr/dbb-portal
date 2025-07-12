// src/components/ui/Switch.tsx
import React from "react";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, label }) => (
  <label className="flex items-center gap-2 cursor-pointer select-none">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="sr-only"
    />
    <span
      className={`w-10 h-5 rounded-full transition-colors ${
        checked ? "bg-primary" : "bg-gray-300"
      }`}
    />
    <span
      className={`block w-5 h-5 rounded-full bg-white shadow transform transition-transform ${
        checked ? "translate-x-5" : "translate-x-0"
      }`}
    />
    {label && <span>{label}</span>}
  </label>
);
