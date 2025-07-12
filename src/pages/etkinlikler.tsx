// src/pages/etkinlikler.tsx
import React from "react";
import { getEvents } from "../utils/api";
import { EtkinlikBlock } from "../components/composer/blocks/EtkinlikBlock";

export default function EtkinliklerPage() {
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getEvents()
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Etkinlikler yüklenirken bir hata oluştu.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <EtkinlikBlock items={events} title="Etkinlikler" />
    </main>
  );
}
