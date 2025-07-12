// src/components/composer/blocks/IletisimBlock.tsx
import React from "react";
import { ContactForm } from "../../forms/ContactForm";

interface IletisimBlockProps {
  id: string;
  title?: string;
}

export const IletisimBlock: React.FC<IletisimBlockProps> = ({ title }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <ContactForm />
  </section>
);
