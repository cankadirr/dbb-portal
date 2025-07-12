// src/components/layout/Footer.tsx
import React from "react";
import { SocialIcons } from "../social/SocialIcons";

export const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-8 mt-16">
    <div className="container mx-auto grid md:grid-cols-4 grid-cols-1 gap-6 px-4">
      <div>
        <h4 className="font-bold mb-2">Diyarbakır Büyükşehir Belediyesi</h4>
        <p className="text-sm">
          © {new Date().getFullYear()} Tüm hakları saklıdır.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-2">Kurumsal</h4>
        <ul className="text-sm space-y-1">
          <li><a href="/kurumsal/vizyon-misyon" className="hover:underline">Vizyon & Misyon</a></li>
          <li><a href="/kurumsal/tarihce" className="hover:underline">Tarihçe</a></li>
          <li><a href="/kurumsal/yonetim" className="hover:underline">Yönetim</a></li>
          <li><a href="/kurumsal/organigram" className="hover:underline">Organigram</a></li>
          <li><a href="/kurumsal/faaliyet-raporlari" className="hover:underline">Faaliyet Raporları</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Hizmetler</h4>
        <ul className="text-sm space-y-1">
          <li><a href="/duyurular" className="hover:underline">Duyurular</a></li>
          <li><a href="/ihale" className="hover:underline">İhaleler</a></li>
          <li><a href="/projeler" className="hover:underline">Projeler</a></li>
          <li><a href="/acik-veri" className="hover:underline">Açık Veri</a></li>
          <li><a href="/sosyal-medya" className="hover:underline">Sosyal Medya</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">İletişim</h4>
        <p className="text-sm">Tel: 0412 000 00 00</p>
        <p className="text-sm">info@dbb.gov.tr</p>
        <p className="text-sm">Elazığ Yolu Üzeri, Kayapınar/Diyarbakır</p>
        <SocialIcons />
      </div>
    </div>
    <div className="container mx-auto text-center text-xs text-gray-400 pt-4">
      Site erişilebilirlik ve açık veri standartlarına uygundur.
    </div>
  </footer>
);
