// src/pages/[dinamik-sayfa].tsx
import React from "react";
import { useRouter } from "next/router";
import { DynamicBlockRenderer } from "../components/composer/DynamicBlockRenderer";
import { getPageBlocks } from "../utils/api";

export default function DinamikSayfa() {
  const router = useRouter();
  const { slug } = router.query;
  const [blocks, setBlocks] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (slug) {
      getPageBlocks(slug)
        .then((data) => {
          setBlocks(data);
          setLoading(false);
        })
        .catch(() => {
          setError("Sayfa yüklenemedi.");
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <DynamicBlockRenderer blocks={blocks} />
    </main>
  );
}
