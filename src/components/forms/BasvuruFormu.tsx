// src/components/forms/BasvuruFormu.tsx
import React, { useState } from "react";

export const BasvuruFormu: React.FC = () => {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    telefon: "",
    eposta: "",
    mesaj: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // API çağrısı örneği
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        name="ad"
        placeholder="Adınız"
        value={formData.ad}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="soyad"
        placeholder="Soyadınız"
        value={formData.soyad}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="tel"
        name="telefon"
        placeholder="Telefon"
        value={formData.telefon}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="eposta"
        placeholder="E-posta"
        value={formData.eposta}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="mesaj"
        placeholder="Mesajınız"
        value={formData.mesaj}
        onChange={handleChange}
        className="w-full p-2 border rounded h-24"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
      >
        {status === "sending" ? "Gönderiliyor..." : "Gönder"}
      </button>
      {status === "success" && <p className="text-green-600">Başvurunuz alındı!</p>}
      {status === "error" && <p className="text-red-600">Gönderme hatası!</p>}
    </form>
  );
};
