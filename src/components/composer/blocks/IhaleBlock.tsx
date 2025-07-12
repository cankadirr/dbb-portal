// src/components/composer/blocks/IhaleBlock.tsx
import React from "react";

interface IhaleBlockProps {
  id: string;
  title?: string;
  items: {
    title: string;
    date: string;
    status?: string;
    slug?: string;
  }[];
}

export const IhaleBlock: React.FC<IhaleBlockProps> = ({ title, items }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {items.map((ihale, idx) => (
        <li key={idx} className="py-3 flex items-center justify-between">
          <div>
            <span className="text-gray-400 text-sm">{ihale.date}</span>
            <span className="ml-2 font-semibold">{ihale.title}</span>
            {ihale.status && (
              <span
                className={`ml-2 px-2 py-1 rounded text-xs font-bold ${
                  ihale.status === "Açık"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {ihale.status}
              </span>
            )}
          </div>
          {ihale.slug && (
            <a
              href={`/ihale/${ihale.slug}`}
              className="text-primary hover:underline ml-3"
            >
              Detay
            </a>
          )}
        </li>
      ))}
    </ul>
  </section>
);
