// src/pages/haberler.tsx
import React from "react";
import { getNews } from "../utils/api";
import { HaberBlock } from "../components/composer/blocks/HaberBlock";

export default function HaberlerPage() {
  const [newsItems, setNewsItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getNews()
      .then((data) => {
        setNewsItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Haberler yüklenirken bir hata oluştu.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <HaberBlock items={newsItems} title="Güncel Haberler" />
    </main>
  );
}
