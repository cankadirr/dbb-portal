// src/pages/sosyal-medya.tsx
import React from "react";
import { SosyalBlock } from "../components/composer/blocks/SosyalBlock";
import { getSosyal } from "../utils/api";

export default function SosyalMedyaPage() {
  const [socialItems, setSocialItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getSosyal()
      .then((data) => {
        setSocialItems(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Sosyal medya verisi yüklenemedi.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <SosyalBlock items={socialItems} />
    </main>
  );
}
