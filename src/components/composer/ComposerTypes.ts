// src/components/composer/ComposerTypes.ts
// Discriminated union for all block types

export type BlockType =
  | "haber"
  | "galeri"
  | "slider"
  | "duyuru"
  | "etkinlik"
  | "iletisim"
  | "baskan"
  | "kurumsal"
  | "proje"
  | "ihale"
  | "meclisKarari"
  | "encumenKarari"
  | "insanKaynaklari"
  | "sosyal"
  | "sss"
  | "harita"
  | "basvuru"
  | "destekAcil"
  | "krizAfet"
  | "acikVeri"
  | "kurs"
  | "anketOylama"
  | "basin"
  | "abonelik";

export interface BaseBlock {
  type: BlockType;
  id: string;
  title?: string;
  [key: string]: any;
}

export type HaberBlock = BaseBlock & { type: "haber"; items: any[] };
export type GaleriBlock = BaseBlock & { type: "galeri"; items: any[] };
export type SliderBlock = BaseBlock & { type: "slider"; slides: any[] };
export type DuyuruBlock = BaseBlock & { type: "duyuru"; items: any[] };
// ...diğer blocklar...

export type ComposerBlock =
  | HaberBlock
  | GaleriBlock
  | SliderBlock
  | DuyuruBlock
  // ...tüm blok tipleri burada devam edecek...
  ;
