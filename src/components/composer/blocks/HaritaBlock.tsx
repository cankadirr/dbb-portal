// src/components/composer/blocks/HaritaBlock.tsx
import React from "react";
import { MapView } from "../../maps/MapView";

interface HaritaBlockProps {
  id: string;
  title?: string;
}

export const HaritaBlock: React.FC<HaritaBlockProps> = ({ title }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <div className="rounded overflow-hidden border h-96">
      <MapView />
    </div>
  </section>
);
