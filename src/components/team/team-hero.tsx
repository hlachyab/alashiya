import { TEAM_INTRO } from "@/lib/team";
import { Reveal } from "../reveal";

export function TeamHero() {
  return (
    <section className="bg-surface px-6 pt-20 pb-10 lg:px-20 lg:pt-28 lg:pb-14">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="type-pre-title text-flame">{TEAM_INTRO.eyebrow}</p>
        {/* Same typographic treatment as the home/about hero h1
            (font-hero = Fraunces, font-medium) — kept identical on purpose. */}
        <h1 className="mt-5 font-hero text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-ink lg:text-6xl">
          {TEAM_INTRO.heading[0]}
          <br />
          {TEAM_INTRO.heading[1]}
        </h1>
        <p className="mx-auto mt-6 max-w-xl type-body text-ink/55">
          {TEAM_INTRO.subtitle}
        </p>
      </Reveal>

      <Reveal delay={120} className="mx-auto mt-10 max-w-7xl lg:mt-14">
        <div className="h-px w-full bg-gold/45" />
      </Reveal>
    </section>
  );
}
