// src/pages/kurumsal/yonetim.tsx
import React from "react";
import { KurumsalBlock } from "../../components/composer/blocks/KurumsalBlock";
import { getYonetim } from "../../utils/api";

export default function YonetimPage() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getYonetim()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setError("Yönetim verisi yüklenemedi.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <h1>Yönetim</h1>
      <KurumsalBlock data={data} />
    </main>
  );
}
