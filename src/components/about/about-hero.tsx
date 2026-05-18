import Image from "next/image";
import { ABOUT_INTRO } from "@/lib/about";
import { IMAGES } from "@/lib/images";
import { Reveal } from "../reveal";

export function AboutHero() {
  return (
    <section className="bg-surface px-6 pt-20 pb-12 lg:px-20 lg:pt-28 lg:pb-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="type-pre-title text-flame">At a Glance</p>
          <div className="mt-2 h-px w-12 bg-flame" />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h1 className="font-hero text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink lg:text-6xl">
              Twelve Thousand Years
              <br />
              of Cyprus
            </h1>
          </Reveal>
          <Reveal delay={120} className="flex items-end">
            <p className="type-body text-ink/65">{ABOUT_INTRO}</p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="relative h-64 overflow-hidden border-t-2 border-gold lg:col-span-1 lg:h-96">
              <Image
                src={IMAGES.aboutGlanceExterior.src}
                alt={IMAGES.aboutGlanceExterior.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden border-t-2 border-gold lg:col-span-2 lg:h-96">
              <Image
                src={IMAGES.aboutGlanceGalleries.src}
                alt={IMAGES.aboutGlanceGalleries.alt}
                fill
                sizes="(min-width: 1024px) 67vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
