// src/components/composer/BlockPreview.tsx
import React from "react";
import { ComposerBlock } from "./ComposerTypes";
import { DynamicBlockRenderer } from "./DynamicBlockRenderer";

export const BlockPreview: React.FC<{ block: ComposerBlock }> = ({ block }) => (
  <div className="border rounded p-4 bg-gray-50 dark:bg-gray-900">
    <DynamicBlockRenderer block={block} />
  </div>
);
