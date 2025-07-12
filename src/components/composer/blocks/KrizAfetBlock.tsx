// src/components/composer/blocks/KrizAfetBlock.tsx
import React from "react";

interface KrizAfetBlockProps {
  id: string;
  title?: string;
  alertMessage?: string;
}

export const KrizAfetBlock: React.FC<KrizAfetBlockProps> = ({ title, alertMessage }) => (
  <section className="bg-red-100 text-red-800 p-4 rounded mb-6">
    {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
    {alertMessage ? <p>{alertMessage}</p> : <p>Şu anda aktif bir kriz durumu yoktur.</p>}
  </section>
);
