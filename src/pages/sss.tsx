// src/pages/sss.tsx
import React from "react";
import { SSSBlock } from "../components/composer/blocks/SSSBlock";
import { getSSS } from "../utils/api";

export default function SSSPage() {
  const [sssItems, setSssItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getSSS()
      .then((data) => {
        setSssItems(data);
        setLoading(false);
      })
      .catch(() => {
        setError("SSS verisi yüklenemedi.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <SSSBlock items={sssItems} />
    </main>
  );
}
