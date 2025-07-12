// src/components/forms/ContactForm.tsx
import React, { useState } from "react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
        name="name"
        placeholder="Adınız"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="E-posta adresiniz"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Mesajınız"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded h-24"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
      >
        {status === "sending" ? "Gönderiliyor..." : "Gönder"}
      </button>
      {status === "success" && <p className="text-green-600">Mesajınız gönderildi!</p>}
      {status === "error" && <p className="text-red-600">Gönderme hatası!</p>}
    </form>
  );
};
