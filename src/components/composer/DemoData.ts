// src/components/composer/DemoData.ts
import { ComposerBlock } from "./ComposerTypes";

export const demoBlocks: ComposerBlock[] = [
  {
    type: "slider",
    id: "slider1",
    title: "Diyarbakır'dan Kareler",
    slides: [
      { img: "/images/slider/1.jpg", caption: "Ulu Cami" },
      { img: "/images/slider/2.jpg", caption: "On Gözlü Köprü" }
    ]
  },
  {
    type: "haber",
    id: "haber1",
    title: "Güncel Haberler",
    items: [
      { title: "Büyükşehir'den yeni yol projesi", date: "2025-07-11" },
      { title: "Yaz spor okulları açıldı", date: "2025-07-10" }
    ]
  },
  {
    type: "duyuru",
    id: "duyuru1",
    title: "Son Duyurular",
    items: [
      { title: "Su kesintisi bildirimi", date: "2025-07-09" },
      { title: "Elektrik bakım çalışması", date: "2025-07-08" }
    ]
  }
  // ...devamı...
];
