import Link from "next/link";
import { EXPLORE_MODES, type ExploreMode } from "@/lib/explore-modes";
import { Reveal } from "./reveal";

// Static class strings (no dynamic concatenation) so Tailwind keeps them.
const THEME: Record<
  ExploreMode["theme"],
  { card: string; accent: string; number: string }
> = {
  tour: {
    card: "border-explore-tour bg-explore-tour-bg",
    accent: "text-explore-tour",
    number: "text-explore-tour",
  },
  timeline: {
    card: "border-explore-timeline bg-explore-timeline-bg",
    accent: "text-explore-timeline",
    number: "text-explore-timeline",
  },
  stories: {
    card: "border-explore-stories bg-explore-stories-bg",
    accent: "text-explore-stories",
    number: "text-explore-stories",
  },
};

export function ExploreModes() {
  return (
    <section className="bg-surface px-6 py-24 lg:px-20 lg:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="type-pre-title text-flame">
          How would you like to explore?
        </p>
        <p className="mt-5 font-accent text-2xl italic text-ink lg:text-3xl">
          Choose your journey through 10,000 years of Cypriot history
        </p>
      </Reveal>

      <div className="mx-auto mt-10 h-px max-w-6xl bg-explore-rule" />

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
        {EXPLORE_MODES.map((mode, i) => {
          const t = THEME[mode.theme];
          return (
            <Reveal key={mode.id} delay={i * 120} className="h-full">
              <Link
                href={mode.href}
                className={`group flex h-full flex-col gap-5 border-t-4 p-8 text-card-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${t.card}`}
              >
                <div>
                  <p className={`type-pre-title ${t.accent}`}>
                    {mode.category}
                  </p>
                  <p
                    className={`mt-1 font-hero text-4xl font-medium line-through decoration-2 ${t.number}`}
                  >
                    {mode.number}
                  </p>
                </div>
                <h3 className="font-hero text-3xl font-medium leading-[1.1] tracking-[-0.01em] text-card-ink lg:text-4xl">
                  {mode.title}
                </h3>
                <p className="type-body text-card-ink/65">
                  {mode.description}
                </p>
                <div className="mt-auto border-t border-card-ink/10 pt-4">
                  <span
                    className={`type-pre-title inline-block transition-transform group-hover:translate-x-1 ${t.accent}`}
                  >
                    {mode.cta} →
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
