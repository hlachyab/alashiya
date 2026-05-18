import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { INSTITUTIONAL_ACK } from "@/lib/team";
import { Reveal } from "../reveal";

export function InstitutionalAcknowledgement() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#e2dfd2_0%,#d6d2c4_55%,#cdc8b8_100%)] px-6 py-24 lg:px-20 lg:py-32">
      {/* Soft light sheen, lower-right — matches the gentle vignette in Figma */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_100%,rgba(255,255,255,0.45)_0%,transparent_55%)]"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-hero text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-ink lg:text-[2.75rem]">
            {INSTITUTIONAL_ACK.heading}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Image
              src={IMAGES.departmentOfAntiquities.src}
              alt={IMAGES.departmentOfAntiquities.alt}
              width={IMAGES.departmentOfAntiquities.width}
              height={IMAGES.departmentOfAntiquities.height}
              className="h-12 w-auto"
            />
            <div className="text-left">
              <p className="type-eyebrow text-hero-gold">
                {INSTITUTIONAL_ACK.eyebrow}
              </p>
              <p className="mt-1.5 font-hero text-2xl font-medium leading-tight text-ink lg:text-[1.75rem]">
                {INSTITUTIONAL_ACK.partner}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-2xl type-body leading-relaxed text-ink/65">
            {INSTITUTIONAL_ACK.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
