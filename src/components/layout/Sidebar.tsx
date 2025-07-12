// src/components/layout/Sidebar.tsx
import React from "react";
import Link from "next/link";

const SIDEBAR_LINKS = [
  { label: "Duyurular", href: "/duyurular" },
  { label: "İhaleler", href: "/ihale" },
  { label: "Projeler", href: "/projeler" },
  { label: "Etkinlikler", href: "/etkinlikler" },
  { label: "İnsan Kaynakları", href: "/insan-kaynaklari" },
  { label: "Açık Veri", href: "/acik-veri" },
];

export const Sidebar: React.FC = () => (
  <aside className="w-full md:w-64 bg-gray-50 dark:bg-gray-900 px-4 py-8 rounded-xl shadow-md">
    <ul className="space-y-3">
      {SIDEBAR_LINKS.map((item, i) => (
        <li key={i}>
          <Link href={item.href} className="block text-base font-semibold hover:text-primary">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </aside>
);
