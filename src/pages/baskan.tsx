// src/pages/baskan.tsx
import React from "react";
import { BaskanBlock } from "../components/composer/blocks/BaskanBlock";
import { getBaskanData } from "../utils/api";

export default function BaskanPage() {
  const [baskan, setBaskan] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getBaskanData()
      .then((data) => {
        setBaskan(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Başkan bilgisi yüklenemedi.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <BaskanBlock data={baskan} />
    </main>
  );
}
