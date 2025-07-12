// src/components/composer/blocks/GaleriBlock.tsx
import React from "react";

interface GaleriBlockProps {
  id: string;
  title?: string;
  items: { img: string; caption?: string }[];
}

export const GaleriBlock: React.FC<GaleriBlockProps> = ({ title, items }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item, idx) => (
        <figure key={idx} className="relative">
          <img src={item.img} alt={item.caption || "Galeri görseli"} className="rounded shadow" />
          {item.caption && (
            <figcaption className="text-xs text-center mt-1 text-gray-500">{item.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  </section>
);
