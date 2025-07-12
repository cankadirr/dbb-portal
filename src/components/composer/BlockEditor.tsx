// src/components/composer/BlockEditor.tsx
import React from "react";
import { ComposerBlock } from "./ComposerTypes";
import { BlockPreview } from "./BlockPreview";
import { BlockToolbar } from "./BlockToolbar";

interface BlockEditorProps {
  blocks: ComposerBlock[];
  onChange: (blocks: ComposerBlock[]) => void;
}

export const BlockEditor: React.FC<BlockEditorProps> = ({ blocks, onChange }) => {
  // Sürükle-bırak, ekle/sil fonksiyonları vs. burada geliştirilecek
  return (
    <div>
      <h2>Sayfa Blok Editörü</h2>
      <div>
        {blocks.map((block, i) => (
          <div key={block.id} className="mb-6">
            <BlockToolbar
              onDelete={() =>
                onChange(blocks.filter((_, idx) => idx !== i))
              }
              onMoveUp={() => {
                if (i > 0) {
                  const newBlocks = [...blocks];
                  [newBlocks[i - 1], newBlocks[i]] = [newBlocks[i], newBlocks[i - 1]];
                  onChange(newBlocks);
                }
              }}
              onMoveDown={() => {
                if (i < blocks.length - 1) {
                  const newBlocks = [...blocks];
                  [newBlocks[i], newBlocks[i + 1]] = [newBlocks[i + 1], newBlocks[i]];
                  onChange(newBlocks);
                }
              }}
            />
            <BlockPreview block={block} />
          </div>
        ))}
      </div>
      {/* Yeni blok ekleme arayüzü eklenebilir */}
    </div>
  );
};
