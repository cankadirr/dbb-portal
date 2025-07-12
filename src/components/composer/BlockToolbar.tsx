// src/components/composer/BlockToolbar.tsx
import React from "react";

interface BlockToolbarProps {
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}

export const BlockToolbar: React.FC<BlockToolbarProps> = ({
  onDelete,
  onMoveUp,
  onMoveDown,
}) => (
  <div className="flex gap-2 mb-2">
    <button
      title="Yukarı Taşı"
      onClick={onMoveUp}
      className="px-2 py-1 rounded bg-gray-200 hover:bg-primary"
    >
      ↑
    </button>
    <button
      title="Aşağı Taşı"
      onClick={onMoveDown}
      className="px-2 py-1 rounded bg-gray-200 hover:bg-primary"
    >
      ↓
    </button>
    <button
      title="Sil"
      onClick={onDelete}
      className="px-2 py-1 rounded bg-red-200 hover:bg-red-400"
    >
      🗑️
    </button>
  </div>
);
