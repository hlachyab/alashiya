"use client";

import dynamic from "next/dynamic";
import { EventClock } from "./event-clock";

const HeroModel = dynamic(
  () => import("./hero-model").then((m) => m.HeroModel),
  { ssr: false, loading: () => null },
);

export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_280px] lg:min-h-[calc(100vh-5rem)]">
      {/* Title block */}
      <div className="flex flex-col justify-center gap-5 px-8 py-16 lg:px-12">
        <p className="type-pre-title text-flame">Paphos</p>
        <div className="leading-none">
          <span
            className="block italic text-ink/80"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "1.75rem",
            }}
          >
            Archaeological
          </span>
          <span
            className="block text-ink"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.75rem",
            }}
          >
            Museum
          </span>
        </div>
        <div className="h-px w-12 bg-flame" />
        <h1
          className="text-ink"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(3rem, 6.5vw, 6rem)",
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
          }}
        >
          Explore
          <br />
          Life in
          <br />
          Ancient
          <br />
          Cyprus
        </h1>
        <p className="max-w-md type-body text-ink/60">
          10,000 years of civilisation, from the island&apos;s first stone
          villages to a Roman metropolis.
        </p>
      </div>

      {/* 3D model — gets the dominant space, sits on the same surface */}
      <div className="relative min-h-120">
        <HeroModel />
        <div className="pointer-events-none absolute inset-x-0 bottom-6 text-center">
          <span className="type-pre-title text-flame">
            Scroll to Explore ↓
          </span>
        </div>
      </div>

      {/* Events — arc on desktop, pills on mobile (component handles both) */}
      <EventClock />
    </section>
  );
}
