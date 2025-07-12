// src/components/composer/blocks/AnketOylamaBlock.tsx
import React from "react";

interface AnketOylamaBlockProps {
  id: string;
  title?: string;
  polls?: { question: string; options: string[] }[];
}

export const AnketOylamaBlock: React.FC<AnketOylamaBlockProps> = ({ title, polls }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    {polls && polls.length > 0 ? (
      polls.map((poll, idx) => (
        <div key={idx} className="mb-4">
          <div className="font-semibold">{poll.question}</div>
          <ul className="list-disc list-inside">
            {poll.options.map((option, i) => (
              <li key={i}>{option}</li>
            ))}
          </ul>
        </div>
      ))
    ) : (
      <p>Anket bilgisi bulunmamaktadır.</p>
    )}
  </section>
);
