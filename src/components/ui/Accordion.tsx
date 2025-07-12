// src/components/ui/Accordion.tsx
import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-gray-100 dark:bg-gray-800 font-semibold"
      >
        {title}
      </button>
      {isOpen && <div className="p-4 bg-white dark:bg-gray-900">{children}</div>}
    </div>
  );
};
