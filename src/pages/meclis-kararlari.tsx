// src/pages/meclis-kararlari.tsx
import React from "react";
import { MeclisKarariBlock } from "../components/composer/blocks/MeclisKarariBlock";
import { getMeclisKararlari } from "../utils/api";

export default function MeclisKararlariPage() {
  const [kararlar, setKararlar] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getMeclisKararlari()
      .then((data) => {
        setKararlar(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Meclis kararları yüklenemedi.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <MeclisKarariBlock items={kararlar} />
    </main>
  );
}
