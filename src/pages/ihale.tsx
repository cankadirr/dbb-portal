// src/pages/ihale.tsx
import React from "react";
import { IhaleBlock } from "../components/composer/blocks/IhaleBlock";
import { getIhaleler } from "../utils/api";

export default function IhalePage() {
  const [ihaleler, setIhaleler] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getIhaleler()
      .then((data) => {
        setIhaleler(data);
        setLoading(false);
      })
      .catch(() => {
        setError("İhaleler yüklenemedi.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <IhaleBlock items={ihaleler} />
    </main>
  );
}
