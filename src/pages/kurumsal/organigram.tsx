// src/pages/kurumsal/organigram.tsx
import React from "react";
import { KurumsalBlock } from "../../components/composer/blocks/KurumsalBlock";
import { getOrganigram } from "../../utils/api";

export default function OrganigramPage() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getOrganigram()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setError("Organigram verisi yüklenemedi.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <h1>Organigram</h1>
      <KurumsalBlock data={data} />
    </main>
  );
}
