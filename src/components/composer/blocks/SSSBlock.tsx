// src/components/composer/blocks/SosyalBlock.tsx
import React from "react";

interface SosyalBlockProps {
  id: string;
  title?: string;
  items: { platform: string; url: string; icon?: React.ReactNode }[];
}

export const SosyalBlock: React.FC<SosyalBlockProps> = ({ title, items }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <div className="flex flex-wrap gap-3">
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-primary/10"
        >
          {item.icon}
          <span className="font-semibold">{item.platform}</span>
        </a>
      ))}
    </div>
  </section>
);
