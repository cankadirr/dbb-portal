// src/components/composer/Composer.tsx
import React from "react";
import { ComposerTypes, ComposerBlock } from "./ComposerTypes";
import { DynamicBlockRenderer } from "./DynamicBlockRenderer";

interface ComposerProps {
  blocks: ComposerBlock[];
}

export const Composer: React.FC<ComposerProps> = ({ blocks }) => {
  if (!blocks || blocks.length === 0)
    return <div>Henüz içerik eklenmemiş.</div>;

  return (
    <div className="space-y-8">
      {blocks.map((block, idx) => (
        <DynamicBlockRenderer key={idx} block={block} />
      ))}
    </div>
  );
};
