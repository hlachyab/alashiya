"use client";

import { useEffect, useRef } from "react";

const MARQUEE_PHRASES = [
  "🚧 UNDER CONSTRUCTION 🚧",
  "DO NOT ENTER · KITCHEN OPEN",
  "CULTURAL HERITAGE PROJECT",
  "WALK THROUGH CYPRUS",
  "STAY TUNED",
  "MUSEUMS · ARTIFACTS · STORIES",
  "SOMETHING SPICY",
  "COMING SOON",
  "BUILT DIFFERENT",
  "TEAM WEB ✦",
];

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-bg">
      <CustomCursor />

      {/* Fixed top tape */}
      <Marquee phrases={MARQUEE_PHRASES} fixed="top" />

      {/* Page content — padded so it clears the fixed tapes */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-32 text-center sm:px-10">
        <header className="absolute left-0 right-0 top-20 flex items-center justify-between px-6 sm:px-10">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-flame" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-ink/60">
              team_web / cyprus
            </span>
          </div>
          <span className="hidden sm:inline-block rounded-full border border-ink/15 bg-ink/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60">
            · in the kitchen
          </span>
        </header>

       

        <h1
          className="font-bold leading-[0.85] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block text-[18vw] sm:text-[14vw] md:text-[12vw] text-ink">
            Team Web is
          </span>
          <span className="block text-[22vw] sm:text-[16vw] md:text-[14vw] text-flame">
            cooking!
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-balance text-base text-ink/70 sm:text-lg">
          an interactive walk through the{" "}
          <span className="text-flame font-semibold">history of cyprus</span>.
          we&apos;re visiting museums, gathering artifacts, and stitching the
          story together, one chapter at a time.
        </p>
      </main>

      {/* Fixed bottom tape */}
      <Marquee phrases={MARQUEE_PHRASES} reverse fixed="bottom" />
    </div>
  );
}

function Marquee({
  phrases,
  reverse,
  fixed,
}: {
  phrases: string[];
  reverse?: boolean;
  fixed?: "top" | "bottom";
}) {
  const items = [...phrases, ...phrases, ...phrases, ...phrases];
  const fixedClass =
    fixed === "top"
      ? "fixed top-0 left-0 right-0"
      : fixed === "bottom"
        ? "fixed bottom-0 left-0 right-0"
        : "";
  return (
    <div
      className={`${fixedClass} z-50 overflow-hidden border-y border-bg bg-flame py-3 text-bg`}
    >
      <div
        className={`marquee-track flex w-max items-center gap-10 whitespace-nowrap font-bold uppercase tracking-[0.18em] ${
          reverse ? "reverse" : ""
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {items.map((p, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-2xl sm:text-3xl"
          >
            {p}
            <span className="text-lg opacity-70">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
        dotRef.current.style.opacity = "1";
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = "1";
      }
    };

    const onDown = () => {
      if (ringRef.current) ringRef.current.classList.add("scale-75");
    };
    const onUp = () => {
      if (ringRef.current) ringRef.current.classList.remove("scale-75");
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] h-2 w-2 rounded-full bg-flame opacity-0 mix-blend-difference"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] h-10 w-10 rounded-full border-2 border-flame opacity-0 mix-blend-difference transition-transform duration-150 ease-out"
      />
    </>
  );
}
