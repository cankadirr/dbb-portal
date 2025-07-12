// src/components/composer/blocks/DuyuruBlock.tsx
import React from "react";

interface DuyuruBlockProps {
  id: string;
  title?: string;
  items: { title: string; date: string; slug?: string }[];
}

export const DuyuruBlock: React.FC<DuyuruBlockProps> = ({ title, items }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {items.map((duyuru, idx) => (
        <li key={idx} className="py-3 flex items-center justify-between">
          <div>
            <span className="text-gray-400 text-sm">{duyuru.date}</span>
            <span className="ml-2">{duyuru.title}</span>
          </div>
          {duyuru.slug && (
            <a
              href={`/duyuru/${duyuru.slug}`}
              className="text-primary hover:underline ml-3"
            >
              Detay
            </a>
          )}
        </li>
      ))}
    </ul>
  </section>
);
