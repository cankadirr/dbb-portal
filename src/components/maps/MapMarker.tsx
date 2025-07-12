// src/components/maps/MapMarker.tsx
// Bu dosya, özel harita işaretçileri veya popup gösterimleri için kullanılabilir.
// Şu an temel placeholder olarak bırakıldı.

import React from "react";

interface MapMarkerProps {
  position: [number, number];
  label?: string;
}

export const MapMarker: React.FC<MapMarkerProps> = ({ position, label }) => {
  // Marker UI veya tooltip düzenlemesi yapılabilir
  return <div title={label}>📍</div>;
};
