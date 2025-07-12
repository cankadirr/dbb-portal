// src/hooks/useComposer.ts
import { useState } from "react";
import { ComposerBlock } from "../components/composer/ComposerTypes";

export function useComposer(initialBlocks: ComposerBlock[]) {
  const [blocks, setBlocks] = useState<ComposerBlock[]>(initialBlocks);

  const addBlock = (block: ComposerBlock) => {
    setBlocks((prev) => [...prev, block]);
  };

  const removeBlock = (id: string) => {
    setBlocks((prev) => prev.filter((block) => block.id !== id));
  };

  const updateBlock = (id: string, updatedBlock: ComposerBlock) => {
    setBlocks((prev) =>
      prev.map((block) => (block.id === id ? updatedBlock : block))
    );
  };

  return { blocks, addBlock, removeBlock, updateBlock, setBlocks };
}
