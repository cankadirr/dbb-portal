// src/components/composer/blocks/BaskanBlock.tsx
import React from "react";

interface BaskanBlockProps {
  id: string;
  title?: string;
  data: {
    name: string;
    image: string;
    message: string;
    position?: string;
    social?: { platform: string; url: string }[];
  };
}

export const BaskanBlock: React.FC<BaskanBlockProps> = ({ title, data }) => (
  <section className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow">
    <img
      src={data.image}
      alt={data.name}
      className="w-32 h-32 rounded-full object-cover shadow-md"
    />
    <div>
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
      <div className="font-semibold text-xl mb-1">{data.name}</div>
      {data.position && <div className="text-gray-500">{data.position}</div>}
      <p className="mt-2 text-gray-700 dark:text-gray-200">{data.message}</p>
      {data.social && (
        <div className="flex gap-3 mt-2">
          {data.social.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <span>{s.platform}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  </section>
);
