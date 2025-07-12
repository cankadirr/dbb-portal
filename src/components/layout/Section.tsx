// src/components/layout/Section.tsx
import React from "react";

export const Section: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-10">
    {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
    <div>{children}</div>
  </section>
);
