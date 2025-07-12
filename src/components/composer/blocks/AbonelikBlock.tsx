// src/components/composer/blocks/AbonelikBlock.tsx
import React, { useState } from "react";

export const AbonelikBlock: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubscribe = () => {
    if (!email) return;
    // Örnek: API çağrısı ile abone olma işlemi
    setStatus("success");
  };

  return (
    <section className="max-w-md mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded">
      <h2 className="text-2xl font-bold mb-4">E-Bülten Aboneliği</h2>
      {status === "success" ? (
        <p>Teşekkürler, aboneliğiniz kaydedildi!</p>
      ) : (
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="E-posta adresinizi girin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow p-2 rounded border border-gray-300"
          />
          <button
            onClick={handleSubscribe}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
          >
            Abone Ol
          </button>
        </div>
      )}
    </section>
  );
};
