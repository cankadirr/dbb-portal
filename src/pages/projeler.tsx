// src/pages/projeler.tsx
import React from "react";
import { ProjeBlock } from "../components/composer/blocks/ProjeBlock";
import { getProjeler } from "../utils/api";

export default function ProjelerPage() {
  const [projeler, setProjeler] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getProjeler()
      .then((data) => {
        setProjeler(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Projeler yüklenemedi.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <ProjeBlock items={projeler} />
    </main>
  );
}
