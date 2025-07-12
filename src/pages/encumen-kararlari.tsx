// src/pages/encumen-kararlari.tsx
import React from "react";
import { EncumenKarariBlock } from "../components/composer/blocks/EncumenKarariBlock";
import { getEncumenKararlari } from "../utils/api";

export default function EncumenKararlariPage() {
  const [kararlar, setKararlar] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getEncumenKararlari()
      .then((data) => {
        setKararlar(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Encümen kararları yüklenemedi.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <EncumenKarariBlock items={kararlar} />
    </main>
  );
}
