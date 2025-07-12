// src/components/layout/Header.tsx
import React from "react";
import Navbar from "./Navbar";
import { Logo } from "../ui/Logo";
import { ThemeSwitch } from "../ui/Switch";
import { LangSwitch } from "../ui/LangSwitch";
import { AccessibilityMenu } from "../ui/AccessibilityMenu";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="w-full shadow-md bg-white dark:bg-gray-900 z-20 sticky top-0">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-4">
          <Logo />
          <Navbar />
        </div>
        <div className="flex items-center gap-3">
          <AccessibilityMenu />
          <LangSwitch />
          <ThemeSwitch />
          <button
            onClick={() => router.push("/iletisim")}
            className="px-3 py-1 rounded bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            İletişim
          </button>
        </div>
      </div>
    </header>
  );
};
