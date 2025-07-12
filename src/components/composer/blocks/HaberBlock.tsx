// src/components/composer/blocks/HaberBlock.tsx
import React from "react";

interface HaberBlockProps {
  id: string;
  title?: string;
  items: { title: string; date: string; image?: string; slug?: string }[];
}

export const HaberBlock: React.FC<HaberBlockProps> = ({ title, items }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((news, idx) => (
        <a
          href={news.slug ? `/haber/${news.slug}` : "#"}
          className="block rounded shadow-lg hover:shadow-xl bg-white dark:bg-gray-900 overflow-hidden"
          key={idx}
        >
          {news.image && (
            <img
              src={news.image}
              alt={news.title}
              className="h-40 w-full object-cover"
            />
          )}
          <div className="p-4">
            <div className="text-sm text-gray-400">{news.date}</div>
            <div className="font-bold text-lg">{news.title}</div>
          </div>
        </a>
      ))}
    </div>
  </section>
);
