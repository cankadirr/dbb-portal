// src/components/maps/MapView.tsx
import React, { useEffect, useRef } from "react";

interface MapViewProps {
  center?: [number, number];
  zoom?: number;
  markers?: { position: [number, number]; label?: string }[];
}

export const MapView: React.FC<MapViewProps> = ({
  center = [37.9144, 40.2306], // Diyarbakır koordinatları
  zoom = 12,
  markers = [],
}) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Harita kütüphanesi entegrasyonu (örnek: Leaflet, Mapbox veya Google Maps)
    // Aşağıda Leaflet örneği varsayılmıştır

    // Importlar Leaflet kullandığını varsayıyor
    import("leaflet").then((L) => {
      const map = L.map(mapRef.current!).setView(center, zoom);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      markers.forEach(({ position, label }) => {
        const marker = L.marker(position).addTo(map);
        if (label) marker.bindPopup(label);
      });

      return () => {
        map.remove();
      };
    });
  }, [center, zoom, markers]);

  return <div ref={mapRef} className="w-full h-full min-h-[400px] rounded shadow" />;
};
