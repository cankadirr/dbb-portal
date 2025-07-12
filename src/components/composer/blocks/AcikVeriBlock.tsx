// src/components/composer/blocks/AcikVeriBlock.tsx
import React from "react";

interface AcikVeriBlockProps {
  id: string;
  title?: string;
  datasets?: { name: string; url: string }[];
}

export const AcikVeriBlock: React.FC<AcikVeriBlockProps> = ({ title, datasets }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <ul>
      {datasets && datasets.length > 0 ? (
        datasets.map((dataset, idx) => (
          <li key={idx} className="mb-2">
            <a
              href={dataset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {dataset.name}
            </a>
          </li>
        ))
      ) : (
        <p>Açık veri bulunmamaktadır.</p>
      )}
    </ul>
  </section>
);
