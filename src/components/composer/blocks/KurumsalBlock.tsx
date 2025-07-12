// src/components/composer/blocks/KurumsalBlock.tsx
import React from "react";

interface KurumsalBlockProps {
  id: string;
  title?: string;
  data: {
    html?: string;
    content?: string;
    documents?: { name: string; url: string }[];
  };
}

export const KurumsalBlock: React.FC<KurumsalBlockProps> = ({ title, data }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    {data.html ? (
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
    ) : (
      <div className="text-base">{data.content}</div>
    )}
    {data.documents && data.documents.length > 0 && (
      <div className="mt-6">
        <h3 className="font-bold mb-2">Dökümanlar</h3>
        <ul className="list-disc ml-6">
          {data.documents.map((doc, i) => (
            <li key={i}>
              <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {doc.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </section>
);
