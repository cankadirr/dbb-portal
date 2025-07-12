// src/pages/kurumsal/tarihce.tsx
import React from "react";
import { KurumsalBlock } from "../../components/composer/blocks/KurumsalBlock";
import { getTarihce } from "../../utils/api";

export default function TarihcePage() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getTarihce()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setError("Tarihçe verisi yüklenemedi.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <h1>Tarihçe</h1>
      <KurumsalBlock data={data} />
    </main>
  );
}
