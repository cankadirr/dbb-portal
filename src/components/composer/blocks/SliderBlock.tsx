// src/components/composer/blocks/SliderBlock.tsx
import React from "react";

interface SliderBlockProps {
  id: string;
  title?: string;
  slides: { img: string; caption?: string }[];
}

export const SliderBlock: React.FC<SliderBlockProps> = ({ title, slides }) => {
  const [current, setCurrent] = React.useState(0);

  if (!slides || slides.length === 0) return null;

  return (
    <section className="mb-8">
      {title && <h2 className="text-2xl font-bold mb-3">{title}</h2>}
      <div className="relative w-full h-64 bg-gray-100 rounded overflow-hidden">
        <img
          src={slides[current].img}
          alt={slides[current].caption || ""}
          className="w-full h-64 object-cover"
        />
        {slides[current].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white py-2 px-4">
            {slides[current].caption}
          </div>
        )}
        <button
          aria-label="Önceki"
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white rounded p-2"
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
        >
          ←
        </button>
        <button
          aria-label="Sonraki"
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white rounded p-2"
          onClick={() => setCurrent((current + 1) % slides.length)}
        >
          →
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full ${i === current ? "bg-primary" : "bg-gray-300"}`}
            aria-label={`Slayt ${i + 1}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
};
