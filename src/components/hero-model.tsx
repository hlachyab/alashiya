"use client";

import { useState } from "react";
import { pickRandomHeroModel } from "@/lib/models";
import { ModelViewer } from "./model-viewer";

export function HeroModel() {
  const [model] = useState(pickRandomHeroModel);

  return (
    <>
      <ModelViewer model={model} />
      <p className="pointer-events-none absolute left-6 top-6 max-w-55 type-body text-ink/55">
        {model.caption}
      </p>
    </>
  );
}
