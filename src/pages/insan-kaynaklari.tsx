// src/pages/insan-kaynaklari.tsx
import React from "react";
import { InsanKaynaklariBlock } from "../components/composer/blocks/InsanKaynaklariBlock";
import { getIKData } from "../utils/api";

export default function InsanKaynaklariPage() {
  const [ik, setIK] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getIKData()
      .then((data) => {
        setIK(data);
        setLoading(false);
      })
      .catch(() => {
        setError("İnsan Kaynakları verisi yüklenemedi.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <InsanKaynaklariBlock items={ik} />
    </main>
  );
}
