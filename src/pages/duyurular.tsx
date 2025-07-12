// src/pages/duyurular.tsx
import React from "react";
import { getDuyurular } from "../utils/api";
import { DuyuruBlock } from "../components/composer/blocks/DuyuruBlock";

export default function DuyurularPage() {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getDuyurular()
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Duyurular yüklenirken bir hata oluştu.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <DuyuruBlock items={items} title="Duyurular" />
    </main>
  );
}
