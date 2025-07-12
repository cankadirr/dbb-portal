// src/components/composer/blocks/ProjeBlock.tsx
import React from "react";

interface ProjeBlockProps {
  id: string;
  title?: string;
  items: {
    title: string;
    summary: string;
    image?: string;
    slug?: string;
    status?: string;
  }[];
}

export const ProjeBlock: React.FC<ProjeBlockProps> = ({ title, items }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((proje, idx) => (
        <div key={idx} className="rounded-xl shadow-lg bg-white dark:bg-gray-900 overflow-hidden">
          {proje.image && (
            <img src={proje.image} alt={proje.title} className="w-full h-40 object-cover" />
          )}
          <div className="p-4">
            <div className="font-bold text-lg mb-1">{proje.title}</div>
            <div className="text-sm text-gray-500 mb-2">{proje.status}</div>
            <div className="text-base">{proje.summary}</div>
            {proje.slug && (
              <a
                href={`/proje/${proje.slug}`}
                className="inline-block mt-2 text-primary hover:underline font-medium"
              >
                Detay
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);
