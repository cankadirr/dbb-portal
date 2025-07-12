// src/components/layout/MainContainer.tsx
import React from "react";

export const MainContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="container mx-auto px-2 py-4">{children}</div>
);
