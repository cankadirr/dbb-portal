// src/components/composer/blocks/KursBlock.tsx
import React from "react";

interface KursBlockProps {
  id: string;
  title?: string;
  courses?: { name: string; description: string; date?: string }[];
}

export const KursBlock: React.FC<KursBlockProps> = ({ title, courses }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <ul>
      {courses && courses.length > 0 ? (
        courses.map((course, idx) => (
          <li key={idx} className="mb-2">
            <strong>{course.name}</strong> - {course.description}{" "}
            {course.date && <em>({course.date})</em>}
          </li>
        ))
      ) : (
        <p>Kurs bilgisi bulunmamaktadır.</p>
      )}
    </ul>
  </section>
);
