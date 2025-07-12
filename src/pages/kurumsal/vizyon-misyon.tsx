// src/pages/kurumsal/vizyon-misyon.tsx
import React from "react";
import { KurumsalBlock } from "../../components/composer/blocks/KurumsalBlock";
import { getVizyonMisyon } from "../../utils/api";

export default function VizyonMisyonPage() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getVizyonMisyon()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setError("Vizyon & Misyon verisi yüklenemedi.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <h1>Vizyon & Misyon</h1>
      <KurumsalBlock data={data} />
    </main>
  );
}
