// src/components/composer/blocks/BasinBlock.tsx
import React from "react";

interface BasinBlockProps {
  id: string;
  title?: string;
  items?: { title: string; date: string; url?: string }[];
}

export const BasinBlock: React.FC<BasinBlockProps> = ({ title, items }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <ul>
      {items && items.length > 0 ? (
        items.map((item, idx) => (
          <li key={idx}>
            <a href={item.url} className="text-primary hover:underline">
              {item.title}
            </a>{" "}
            <span className="text-gray-400 text-sm">({item.date})</span>
          </li>
        ))
      ) : (
        <p>Basın duyurusu bulunmamaktadır.</p>
      )}
    </ul>
  </section>
);
