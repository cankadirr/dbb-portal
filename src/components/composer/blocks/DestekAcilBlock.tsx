// src/components/composer/blocks/DestekAcilBlock.tsx
import React from "react";

interface DestekAcilBlockProps {
  id: string;
  title?: string;
  contacts?: { type: string; phone: string; description?: string }[];
}

export const DestekAcilBlock: React.FC<DestekAcilBlockProps> = ({ title, contacts }) => (
  <section>
    {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
    <ul>
      {contacts && contacts.length > 0 ? (
        contacts.map((contact, idx) => (
          <li key={idx} className="mb-2">
            <strong>{contact.type}:</strong> {contact.phone}{" "}
            {contact.description && <em>({contact.description})</em>}
          </li>
        ))
      ) : (
        <p>İletişim bilgisi bulunmamaktadır.</p>
      )}
    </ul>
  </section>
);
