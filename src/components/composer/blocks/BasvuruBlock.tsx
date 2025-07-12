// src/components/composer/blocks/BasvuruBlock.tsx
import React from "react";

interface BasvuruBlockProps {
  id: string;
  title?: string;
}

export const BasvuruBlock: React.FC<BasvuruBlockProps> = ({ title }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    {/* Başvuru formu ya da içerikleri buraya gelecek */}
    <p>Başvuru formu ve detayları buraya eklenecek.</p>
  </section>
);
