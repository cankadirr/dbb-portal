// src/components/composer/blocks/EtkinlikBlock.tsx
import React from "react";

interface EtkinlikBlockProps {
  id: string;
  title?: string;
  items: { title: string; date: string; location?: string; slug?: string }[];
}

export const EtkinlikBlock: React.FC<EtkinlikBlockProps> = ({ title, items }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((etkinlik, idx) => (
        <div key={idx} className="border rounded p-4 bg-white dark:bg-gray-800 shadow">
          <div className="text-gray-500 text-xs">{etkinlik.date}</div>
          <div className="font-bold text-lg">{etkinlik.title}</div>
          {etkinlik.location && (
            <div className="text-sm text-gray-400">{etkinlik.location}</div>
          )}
          {etkinlik.slug && (
            <a
              href={`/etkinlik/${etkinlik.slug}`}
              className="text-primary hover:underline mt-2 block"
            >
              Detay
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);
