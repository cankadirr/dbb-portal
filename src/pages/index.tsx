// src/pages/index.tsx
import React from "react";
import { Composer } from "../components/composer/Composer";
import { demoBlocks } from "../components/composer/DemoData";

const HomePage: React.FC = () => {
  return (
    <main>
      <Composer blocks={demoBlocks} />
    </main>
  );
};

export default HomePage;
