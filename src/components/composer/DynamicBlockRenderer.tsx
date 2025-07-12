// src/components/composer/DynamicBlockRenderer.tsx
import React from "react";
import { ComposerBlock } from "./ComposerTypes";
import { HaberBlock } from "./blocks/HaberBlock";
import { GaleriBlock } from "./blocks/GaleriBlock";
import { SliderBlock } from "./blocks/SliderBlock";
import { DuyuruBlock } from "./blocks/DuyuruBlock";
import { EtkinlikBlock } from "./blocks/EtkinlikBlock";
import { IletisimBlock } from "./blocks/IletisimBlock";
import { BaskanBlock } from "./blocks/BaskanBlock";
import { KurumsalBlock } from "./blocks/KurumsalBlock";
import { ProjeBlock } from "./blocks/ProjeBlock";
import { IhaleBlock } from "./blocks/IhaleBlock";
import { MeclisKarariBlock } from "./blocks/MeclisKarariBlock";
import { EncumenKarariBlock } from "./blocks/EncumenKarariBlock";
import { InsanKaynaklariBlock } from "./blocks/InsanKaynaklariBlock";
import { SosyalBlock } from "./blocks/SosyalBlock";
import { SSSBlock } from "./blocks/SSSBlock";
import { HaritaBlock } from "./blocks/HaritaBlock";
import { BasvuruBlock } from "./blocks/BasvuruBlock";
import { DestekAcilBlock } from "./blocks/DestekAcilBlock";
import { KrizAfetBlock } from "./blocks/KrizAfetBlock";
import { AcikVeriBlock } from "./blocks/AcikVeriBlock";
import { KursBlock } from "./blocks/KursBlock";
import { AnketOylamaBlock } from "./blocks/AnketOylamaBlock";
import { BasinBlock } from "./blocks/BasinBlock";
import { AbonelikBlock } from "./blocks/AbonelikBlock";

export const DynamicBlockRenderer: React.FC<{ block: ComposerBlock }> = ({
  block,
}) => {
  switch (block.type) {
    case "haber":
      return <HaberBlock {...block} />;
    case "galeri":
      return <GaleriBlock {...block} />;
    case "slider":
      return <SliderBlock {...block} />;
    case "duyuru":
      return <DuyuruBlock {...block} />;
    case "etkinlik":
      return <EtkinlikBlock {...block} />;
    case "iletisim":
      return <IletisimBlock {...block} />;
    case "baskan":
      return <BaskanBlock {...block} />;
    case "kurumsal":
      return <KurumsalBlock {...block} />;
    case "proje":
      return <ProjeBlock {...block} />;
    case "ihale":
      return <IhaleBlock {...block} />;
    case "meclisKarari":
      return <MeclisKarariBlock {...block} />;
    case "encumenKarari":
      return <EncumenKarariBlock {...block} />;
    case "insanKaynaklari":
      return <InsanKaynaklariBlock {...block} />;
    case "sosyal":
      return <SosyalBlock {...block} />;
    case "sss":
      return <SSSBlock {...block} />;
    case "harita":
      return <HaritaBlock {...block} />;
    case "basvuru":
      return <BasvuruBlock {...block} />;
    case "destekAcil":
      return <DestekAcilBlock {...block} />;
    case "krizAfet":
      return <KrizAfetBlock {...block} />;
    case "acikVeri":
      return <AcikVeriBlock {...block} />;
    case "kurs":
      return <KursBlock {...block} />;
    case "anketOylama":
      return <AnketOylamaBlock {...block} />;
    case "basin":
      return <BasinBlock {...block} />;
    case "abonelik":
      return <AbonelikBlock {...block} />;
    default:
      return <div>Blok tipi desteklenmiyor: {block.type}</div>;
  }
};
