// src/components/composer/blocks/InsanKaynaklariBlock.tsx
import React from "react";

interface InsanKaynaklariBlockProps {
  id: string;
  title?: string;
  items: { position: string; deadline?: string; description?: string; applyUrl?: string }[];
}

export const InsanKaynaklariBlock: React.FC<InsanKaynaklariBlockProps> = ({ title, items }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {items.map((job, idx) => (
        <li key={idx} className="py-3 flex items-center justify-between">
          <div>
            <span className="font-semibold">{job.position}</span>
            {job.deadline && (
              <span className="ml-2 text-xs text-gray-400">
                Son başvuru: {job.deadline}
              </span>
            )}
            {job.description && (
              <div className="text-sm text-gray-500">{job.description}</div>
            )}
          </div>
          {job.applyUrl && (
            <a
              href={job.applyUrl}
              className="text-primary hover:underline ml-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Başvur
            </a>
          )}
        </li>
      ))}
    </ul>
  </section>
);
