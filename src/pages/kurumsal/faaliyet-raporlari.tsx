// src/pages/kurumsal/faaliyet-raporlari.tsx
import React from "react";
import { KurumsalBlock } from "../../components/composer/blocks/KurumsalBlock";
import { getFaaliyetRaporlari } from "../../utils/api";

export default function FaaliyetRaporlariPage() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getFaaliyetRaporlari()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setError("Faaliyet raporları yüklenemedi.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <h1>Faaliyet Raporları</h1>
      <KurumsalBlock data={data} />
    </main>
  );
}
