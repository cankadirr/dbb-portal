// src/pages/galeri.tsx
import React from "react";
import { getGallery } from "../utils/api";
import { GaleriBlock } from "../components/composer/blocks/GaleriBlock";

export default function GaleriPage() {
  const [galleryItems, setGalleryItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getGallery()
      .then((data) => {
        setGalleryItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Galeri yüklenirken bir hata oluştu.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <GaleriBlock items={galleryItems} title="Galeri" />
    </main>
  );
}
