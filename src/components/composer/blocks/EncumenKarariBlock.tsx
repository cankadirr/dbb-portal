// src/components/composer/blocks/EncumenKarariBlock.tsx
import React from "react";

interface EncumenKarariBlockProps {
  id: string;
  title?: string;
  items: { title: string; date: string; documentUrl?: string }[];
}

export const EncumenKarariBlock: React.FC<EncumenKarariBlockProps> = ({ title, items }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {items.map((karar, idx) => (
        <li key={idx} className="py-3 flex items-center justify-between">
          <div>
            <span className="text-gray-400 text-sm">{karar.date}</span>
            <span className="ml-2">{karar.title}</span>
          </div>
          {karar.documentUrl && (
            <a
              href={karar.documentUrl}
              className="text-primary hover:underline ml-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF
            </a>
          )}
        </li>
      ))}
    </ul>
  </section>
);
