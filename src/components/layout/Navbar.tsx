// src/components/layout/Navbar.tsx
import React from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Anasayfa", href: "/" },
  { label: "Kurumsal", href: "/kurumsal/vizyon-misyon", submenu: [
    { label: "Vizyon & Misyon", href: "/kurumsal/vizyon-misyon" },
    { label: "Tarihçe", href: "/kurumsal/tarihce" },
    { label: "Yönetim", href: "/kurumsal/yonetim" },
    { label: "Organigram", href: "/kurumsal/organigram" },
    { label: "Faaliyet Raporları", href: "/kurumsal/faaliyet-raporlari" },
  ] },
  { label: "Haberler", href: "/haberler" },
  { label: "Duyurular", href: "/duyurular" },
  { label: "İhaleler", href: "/ihale" },
  { label: "Projeler", href: "/projeler" },
  { label: "Etkinlikler", href: "/etkinlikler" },
  { label: "Galeri", href: "/galeri" },
  { label: "E-Belediye", href: "/e-belediye" },
  { label: "Kent Rehberi", href: "/kent-rehberi" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  return (
    <nav className="flex gap-2">
      {NAV_ITEMS.map((item, idx) =>
        item.submenu ? (
          <div key={idx} className="relative group">
            <button className="px-3 py-2 font-medium hover:text-primary">
              {item.label}
            </button>
            <div className="absolute z-10 hidden group-hover:block bg-white shadow-lg rounded min-w-[180px]">
              {item.submenu.map((sub, i) => (
                <Link
                  key={i}
                  href={sub.href}
                  className="block px-4 py-2 text-sm hover:bg-primary/10"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link key={idx} href={item.href} className="px-3 py-2 font-medium hover:text-primary">
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
}
